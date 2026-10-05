'use client'

import { useRef, useState } from 'react'
import BarList from './BarList'
import type { Lake } from '@/lib/data'
import { formatDate, formatKg, formatTime, pluralize } from '@/lib/format'
import type { CatchRow, LakeFilter, LakeStats } from '@/lib/stats'
import styles from './StatsView.module.css'

type SortKey = 'caughtAt' | 'weightKg'

interface Props {
  lakes: Lake[]
  initial: LakeStats
}

const sortRows = (rows: CatchRow[], key: SortKey, desc: boolean) =>
  [...rows].sort((a, b) => {
    const diff = key === 'weightKg' ? a.weightKg - b.weightKg : a.caughtAt.localeCompare(b.caughtAt)
    return desc ? -diff : diff
  })

export default function StatsView({ lakes, initial }: Props) {
  const [stats, setStats] = useState(initial)
  const [pending, setPending] = useState<LakeFilter | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [sort, setSort] = useState<{ key: SortKey; desc: boolean }>({ key: 'caughtAt', desc: true })
  const controller = useRef<AbortController | null>(null)

  const selected = pending ?? stats.filter
  const options: { id: LakeFilter; label: string }[] = [{ id: 'all', label: 'Все водоёмы' }, ...lakes.map((lake) => ({ id: lake.id, label: lake.name }))]

  const select = async (filter: LakeFilter) => {
    if (filter === selected) return
    controller.current?.abort()
    const current = new AbortController()
    controller.current = current
    setPending(filter)
    setError(null)

    try {
      const response = await fetch(`/api/stats?lake=${filter}`, { signal: current.signal })
      const body = await response.json()
      if (!response.ok) throw new Error(body.error ?? 'Сервер не вернул статистику.')
      setStats(body as LakeStats)
      window.history.replaceState(null, '', filter === 'all' ? '/stats' : `/stats?lake=${filter}`)
    } catch (reason) {
      if (current.signal.aborted) return
      setError(reason instanceof Error ? reason.message : 'Сервер не вернул статистику.')
    } finally {
      if (controller.current === current) setPending(null)
    }
  }

  const toggleSort = (key: SortKey) =>
    setSort((value) => ({ key, desc: value.key === key ? !value.desc : true }))

  const { summary, forecast } = stats
  const rows = sortRows(stats.catches, sort.key, sort.desc)
  const peak = Math.max(...stats.hours.map((bin) => bin.count), 1)
  const showLake = stats.filter === 'all'

  const sortButton = (key: SortKey, label: string) => (
    <button type="button" className={styles.sort} onClick={() => toggleSort(key)}>
      {label}
      <span aria-hidden="true">{sort.key === key ? (sort.desc ? '↓' : '↑') : '↕'}</span>
    </button>
  )

  return (
    <div className="wrap">
      <div className={styles.filters} role="group" aria-label="Водоём">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={styles.filter}
            aria-pressed={option.id === selected}
            onClick={() => select(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>

      {error ? (
        <p className={styles.error} role="alert">
          Не удалось загрузить статистику: {error} Проверьте соединение и выберите водоём ещё раз.
        </p>
      ) : null}

      <div className={styles.board} aria-busy={pending !== null} data-pending={pending !== null}>
        <section className={styles.overview} aria-label="Сводка">
          <div className={styles.lakeInfo}>
            <h2>{stats.lake?.name ?? 'Все водоёмы базы'}</h2>
            <p>{stats.lake?.description ?? 'Два озера и река: сводка по всему улову, записанному в журнал за сезон.'}</p>
          </div>

          <dl className={styles.summary}>
            <div>
              <dt>Поймано</dt>
              <dd>{summary.count} <span>{pluralize(summary.count, ['рыба', 'рыбы', 'рыб'])}</span></dd>
            </div>
            <div>
              <dt>Общий вес</dt>
              <dd>{formatKg(summary.totalKg)}</dd>
            </div>
            <div>
              <dt>Средний вес</dt>
              <dd>{formatKg(summary.avgKg)}</dd>
            </div>
            <div>
              <dt>Видов рыбы</dt>
              <dd>{summary.speciesCount}</dd>
            </div>
          </dl>

          <div className={styles.callouts}>
            {summary.record ? (
              <p className={styles.callout}>
                <strong>Рекорд сезона</strong>
                {summary.record.species}, {formatKg(summary.record.weightKg)}. {summary.record.lakeName},{' '}
                {formatDate(summary.record.caughtAt)}, на {summary.record.bait.toLowerCase()}.
              </p>
            ) : null}
            <p className={styles.callout} data-level={forecast.level}>
              <strong>Прогноз клёва: {forecast.label.toLowerCase()}</strong>
              {forecast.note}
            </p>
          </div>
        </section>

        <div className={styles.charts}>
          <section className={styles.panel}>
            <h3>Что ловится</h3>
            <BarList
              items={stats.species.map((item) => ({ label: item.name, value: item.count, hint: formatKg(item.totalKg) }))}
              unit={['рыба', 'рыбы', 'рыб']}
            />
          </section>

          <section className={styles.panel}>
            <h3>На что клюёт</h3>
            <BarList
              items={stats.baits.map((item) => ({ label: item.name, value: item.count }))}
              unit={['поклёвка', 'поклёвки', 'поклёвок']}
              tone="gold"
            />
          </section>

          <section className={`${styles.panel} ${styles.hoursPanel}`}>
            <h3>Время поклёвки</h3>
            <ol className={styles.hours}>
              {stats.hours.map((bin) => (
                <li key={bin.from} data-peak={bin.count === peak && bin.count > 0}>
                  <span className={styles.hourValue}>{bin.count || ''}</span>
                  <span className={styles.hourTrack}>
                    <span className={styles.hourBar} style={{ height: `${(bin.count / peak) * 100}%` }} />
                  </span>
                  <span className={styles.hourLabel}>{bin.from}–{bin.to}</span>
                  <span className="visually-hidden">: {bin.count} {pluralize(bin.count, ['рыба', 'рыбы', 'рыб'])}</span>
                </li>
              ))}
            </ol>
            <p className={styles.hoursNote}>Число поклёвок по часам суток.</p>
          </section>
        </div>

        <section className={styles.log}>
          <h3>Журнал улова</h3>
          <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Журнал улова">
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Рыба</th>
                  {showLake ? <th scope="col">Водоём</th> : null}
                  <th scope="col" aria-sort={sort.key === 'caughtAt' ? (sort.desc ? 'descending' : 'ascending') : undefined}>
                    {sortButton('caughtAt', 'Дата')}
                  </th>
                  <th scope="col" className={styles.num} aria-sort={sort.key === 'weightKg' ? (sort.desc ? 'descending' : 'ascending') : undefined}>
                    {sortButton('weightKg', 'Вес')}
                  </th>
                  <th scope="col">Наживка</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td className={styles.fish}>{row.species}</td>
                    {showLake ? <td>{row.lakeName}</td> : null}
                    <td>
                      {formatDate(row.caughtAt)}
                      <span className={styles.time}>{formatTime(row.caughtAt)}</span>
                    </td>
                    <td className={styles.num}>{formatKg(row.weightKg)}</td>
                    <td>{row.bait}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
