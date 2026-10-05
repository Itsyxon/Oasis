import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <section className={`wrap ${styles.page}`}>
      <p className={styles.code}>404</p>
      <h1>Такой страницы нет</h1>
      <p className="lead">Возможно, ссылка устарела или в адресе опечатка. Вернитесь на главную или посмотрите услуги.</p>
      <div className={styles.actions}>
        <Link href="/" className="button button-dark">На главную</Link>
        <Link href="/services" className="link">Услуги и цены</Link>
      </div>
    </section>
  )
}
