import Link from 'next/link'
import Logo from './Logo'
import { contacts, nav } from '@/lib/site'
import styles from './SiteFooter.module.css'

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.about}>
          <Link href="/" className={styles.brand}>
            <Logo className={styles.logo} />
            Оазис
          </Link>
          <p>Природно-туристический комплекс: рыбалка, домики у воды и баня на дровах. Открыто круглый год.</p>
        </div>

        <nav aria-label="Разделы сайта">
          <h2 className={styles.heading}>Разделы</h2>
          <ul className={styles.list}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>Связаться</h2>
          <ul className={styles.list}>
            <li><a href={contacts.phoneHref}>{contacts.phone}</a></li>
            <li><a href={`mailto:${contacts.email}`}>{contacts.email}</a></li>
            <li>{contacts.address}</li>
          </ul>
        </div>
      </div>
      <div className={`wrap ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Оазис. Сайт сделал Даниил Ицыксон.</p>
        <p>Цены, контакты и статистика на сайте вымышлены.</p>
      </div>
    </footer>
  )
}
