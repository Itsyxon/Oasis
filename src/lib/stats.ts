import { catches, lakes, type Catch, type Lake, type LakeId } from './data'

export type LakeFilter = LakeId | 'all'

export interface CatchRow extends Catch {
  lakeName: string
}

export interface Tally {
  name: string
  count: number
  totalKg: number
}

export interface HourBin {
  from: number
  to: number
  count: number
}

export interface Forecast {
  level: 'good' | 'fair' | 'poor'
  label: string
  note: string
}

export interface LakeStats {
  filter: LakeFilter
  lake: Lake | null
  summary: {
    count: number
    totalKg: number
    avgKg: number
    speciesCount: number
    record: CatchRow | null
  }
  species: Tally[]
  baits: Tally[]
  hours: HourBin[]
  forecast: Forecast
  catches: CatchRow[]
}

const HOUR_STEP = 3
const RECENT_DAYS = 14

const lakeName = (id: LakeId) => lakes.find((lake) => lake.id === id)?.name ?? id

const round = (value: number) => Math.round(value * 100) / 100

const tally = (rows: Catch[], key: 'species' | 'bait'): Tally[] => {
  const map = new Map<string, Tally>()
  for (const row of rows) {
    const item = map.get(row[key]) ?? { name: row[key], count: 0, totalKg: 0 }
    item.count += 1
    item.totalKg = round(item.totalKg + row.weightKg)
    map.set(row[key], item)
  }
  return [...map.values()].sort((a, b) => b.count - a.count || b.totalKg - a.totalKg)
}

const hourBins = (rows: Catch[]): HourBin[] =>
  Array.from({ length: 24 / HOUR_STEP }, (_, index) => {
    const from = index * HOUR_STEP
    const to = from + HOUR_STEP
    const count = rows.filter((row) => {
      const hour = Number(row.caughtAt.slice(11, 13))
      return hour >= from && hour < to
    }).length
    return { from, to, count }
  })

const forecastFor = (rows: Catch[], hours: HourBin[]): Forecast => {
  const latest = Math.max(...catches.map((row) => Date.parse(row.caughtAt)))
  const recent = rows.filter((row) => latest - Date.parse(row.caughtAt) <= RECENT_DAYS * 86_400_000).length
  const max = Math.max(...hours.map((bin) => bin.count))
  const windows = hours
    .filter((bin) => bin.count === max && max > 0)
    .reduce<{ from: number; to: number }[]>((acc, bin) => {
      const last = acc.at(-1)
      if (last && last.to === bin.from) last.to = bin.to
      else acc.push({ from: bin.from, to: bin.to })
      return acc
    }, [])
  const note = windows.length
    ? `Чаще всего клюёт ${windows.map((span) => `с ${span.from}:00 до ${span.to}:00`).join(' и ')}.`
    : 'Пока мало данных, чтобы назвать лучшее время.'

  if (recent >= 5) return { level: 'good', label: 'Хороший', note }
  if (recent >= 2) return { level: 'fair', label: 'Средний', note }
  return { level: 'poor', label: 'Слабый', note }
}

export const getStats = (filter: LakeFilter): LakeStats => {
  const rows = catches
    .filter((row) => filter === 'all' || row.lakeId === filter)
    .map((row) => ({ ...row, lakeName: lakeName(row.lakeId) }))
    .sort((a, b) => b.caughtAt.localeCompare(a.caughtAt))

  const totalKg = round(rows.reduce((sum, row) => sum + row.weightKg, 0))
  const species = tally(rows, 'species')
  const hours = hourBins(rows)
  const record = rows.reduce<CatchRow | null>((best, row) => (!best || row.weightKg > best.weightKg ? row : best), null)

  return {
    filter,
    lake: filter === 'all' ? null : (lakes.find((lake) => lake.id === filter) ?? null),
    summary: {
      count: rows.length,
      totalKg,
      avgKg: rows.length ? round(totalKg / rows.length) : 0,
      speciesCount: species.length,
      record,
    },
    species,
    baits: tally(rows, 'bait'),
    hours,
    forecast: forecastFor(rows, hours),
    catches: rows,
  }
}
