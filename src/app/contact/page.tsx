import type { Metadata } from 'next'
import CallbackForm from '@/components/CallbackForm'
import PageIntro from '@/components/PageIntro'
import { contacts, services } from '@/lib/site'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Как добраться до базы «Оазис», телефон администратора и заявка на обратный звонок.',
}

const routes = [
  { title: 'На машине', text: 'По трассе М-10 до указателя «Заречье», затем 6 км по асфальту. Навигатор ведёт до шлагбаума у парковки.' },
  { title: 'На электричке', text: 'С Ленинградского вокзала до станции «Заречная», дальше 15 минут на такси. Можем встретить — договоритесь с администратором.' },
  { title: 'На велосипеде', text: 'От станции 11 км по грунтовке вдоль реки Полевой. Велосипед можно оставить у домика.' },
]

export default async function ContactPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const { service } = await searchParams
  const picked = services.find((item) => item.id === service)

  return (
    <>
      <PageIntro title="Контакты">
        Позвоните или оставьте номер — администратор подскажет свободные домики и расскажет, где сейчас клюёт.
      </PageIntro>

      <div className={`wrap ${styles.grid}`}>
        <section className={styles.info} aria-label="Как связаться">
          <dl className={styles.list}>
            <div>
              <dt>Телефон</dt>
              <dd><a href={contacts.phoneHref}>{contacts.phone}</a></dd>
            </div>
            <div>
              <dt>Почта</dt>
              <dd><a href={`mailto:${contacts.email}`}>{contacts.email}</a></dd>
            </div>
            <div>
              <dt>Адрес</dt>
              <dd>{contacts.address}</dd>
            </div>
            <div>
              <dt>Режим</dt>
              <dd>{contacts.hours}. {contacts.checkIn}.</dd>
            </div>
          </dl>
        </section>

        <section id="callback" className={styles.callback} aria-labelledby="callback-title">
          <h2 id="callback-title">Заказать звонок</h2>
          <CallbackForm key={picked?.id ?? 'none'} comment={picked ? `Хочу забронировать: ${picked.title.toLowerCase()}` : ''} />
        </section>
      </div>

      <section className={`section wrap ${styles.routes}`} aria-labelledby="routes-title">
        <h2 id="routes-title">Как добраться</h2>
        <div className={styles.routeGrid}>
          <ul className={styles.routeList}>
            {routes.map((route) => (
              <li key={route.title}>
                <h3>{route.title}</h3>
                <p>{route.text}</p>
              </li>
            ))}
          </ul>
          <iframe
            className={styles.map}
            title="Карта проезда до базы «Оазис»"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3cb6f157a3a8a52e5b839e28ae1ff59ef0745ac7b7da68331be2c53761f86c0b&source=constructor"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}
