const monthsGenitive = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

export const formatKg = (value: number) => `${String(Math.round(value * 100) / 100).replace('.', ',')} кг`

export const formatDate = (iso: string) => `${Number(iso.slice(8, 10))} ${monthsGenitive[Number(iso.slice(5, 7)) - 1]}`

export const formatTime = (iso: string) => iso.slice(11, 16)

export const pluralize = (count: number, [one, few, many]: [string, string, string]) => {
  const mod10 = count % 10
  const mod100 = count % 100
  if (mod10 === 1 && mod100 !== 11) return one
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few
  return many
}
