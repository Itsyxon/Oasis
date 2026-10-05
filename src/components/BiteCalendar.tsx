import { biteCalendar, biteLevels, months } from '@/lib/site'
import styles from './BiteCalendar.module.css'

export default function BiteCalendar() {
  return (
    <div className={styles.wrap}>
      <div className={styles.scroller} tabIndex={0} role="region" aria-label="Календарь клёва по месяцам">
        <table className={styles.table}>
          <caption className="visually-hidden">Интенсивность клёва по видам рыбы и месяцам</caption>
          <thead>
            <tr>
              <th scope="col"><span className="visually-hidden">Рыба</span></th>
              {months.map((month) => (
                <th key={month} scope="col">{month}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {biteCalendar.map((row) => (
              <tr key={row.species}>
                <th scope="row">{row.species}</th>
                {row.bite.map((level, index) => (
                  <td key={months[index]} data-level={level} title={`${row.species}, ${months[index].toLowerCase()}: ${biteLevels[level].toLowerCase()}`}>
                    <span className="visually-hidden">{biteLevels[level]}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className={styles.legend}>
        {biteLevels.map((label, level) => (
          <li key={label}>
            <span className={styles.swatch} data-level={level} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
    </div>
  )
}
