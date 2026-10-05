import { pluralize } from '@/lib/format'
import styles from './BarList.module.css'

interface Props {
  items: { label: string; value: number; hint?: string }[]
  unit: [string, string, string]
  tone?: 'lake' | 'gold'
}

export default function BarList({ items, unit, tone = 'lake' }: Props) {
  const max = Math.max(...items.map((item) => item.value), 1)

  if (!items.length) return <p className={styles.empty}>В журнале пока нет записей.</p>

  return (
    <ul className={styles.list} data-tone={tone}>
      {items.map((item) => (
        <li key={item.label} className={styles.row}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.track}>
            <span className={styles.bar} style={{ width: `${(item.value / max) * 100}%` }} />
          </span>
          <span className={styles.value}>
            {item.value}
            <span className="visually-hidden"> {pluralize(item.value, unit)}</span>
            {item.hint ? <span className={styles.hint}>{item.hint}</span> : null}
          </span>
        </li>
      ))}
    </ul>
  )
}
