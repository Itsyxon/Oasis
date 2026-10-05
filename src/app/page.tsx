import Image from 'next/image'
import Link from 'next/link'
import BiteCalendar from '@/components/BiteCalendar'
import ServiceImage from '@/components/ServiceImage'
import TerritoryPlan from '@/components/TerritoryPlan'
import heroLake from '@/assets/hero-lake.webp'
import { lakes } from '@/lib/data'
import { contacts, faq, rules, services } from '@/lib/site'
import styles from './page.module.css'

const facts = [
  { term: 'Водоёмы', value: 'два озера и река, зарыбляем весной и осенью' },
  { term: 'Проживание', value: 'шесть домиков, до 28 гостей одновременно' },
  { term: 'Сезон', value: 'круглый год, зимой — подлёдный лов' },
  { term: 'Дорога', value: 'полтора часа на машине от МКАД' },
]

const rub = new Intl.NumberFormat('ru-RU')

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src={heroLake}
          alt="Ельник и жёлтые берёзы отражаются в озере на закате"
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={`wrap ${styles.heroInner}`}>
          <h1 className={styles.heroTitle}>Два озера, река и домик в двух минутах от воды</h1>
          <p className={styles.heroText}>
            База отдыха и рыбалки «Оазис» в 120 км от Москвы. Зарыбляем водоёмы каждый сезон, топим баню на дровах
            и готовим ваш улов в кафе.
          </p>
          <div className={styles.heroActions}>
            <Link href="/services#cabins" className="button button-primary">Выбрать домик</Link>
            <Link href="/stats" className="button button-ghost">Посмотреть улов</Link>
          </div>
        </div>
        <p className={styles.caption}>Озеро Беглое, сентябрь</p>
      </section>

      <section className={`section wrap ${styles.about}`}>
        <div>
          <h2 className={styles.title}>Тихое место, куда возвращаются за рыбой и за тишиной</h2>
          <p className="lead">
            «Оазис» стоит в стороне от трасс и посёлков. Вокруг ельник и берёзы, по ночам слышно только воду.
            Сюда приезжают на выходные с семьёй, на рыбалку с друзьями и просто выспаться.
          </p>
          <p className={styles.aboutText}>
            Мы держим водоёмы в порядке: чистим берега, делаем мостки и дважды в год выпускаем молодь карпа,
            щуки и сазана. Поэтому клюёт не только у тех, кому повезло.
          </p>
        </div>
        <dl className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.term} className={styles.fact}>
              <dt>{fact.term}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.waters}>
        <div className="section wrap">
          <header className={styles.head}>
            <h2 className={styles.title}>Три водоёма с разным характером</h2>
            <p className="lead">Глубокое лесное озеро для хищника, тёплое песчаное для карпа и река для тех, кто любит течение.</p>
          </header>
          <ul className={styles.lakeList}>
            {lakes.map((lake) => (
              <li key={lake.id} className={styles.lake}>
                <h3>{lake.name}</h3>
                <p>{lake.description}</p>
                <dl className={styles.lakeMeta}>
                  <div><dt>Глубина</dt><dd>{lake.depth}</dd></div>
                  <div><dt>{lake.kind === 'река' ? 'Протяжённость' : 'Площадь'}</dt><dd>{lake.area}</dd></div>
                  <div><dt>Дно</dt><dd>{lake.bottom}</dd></div>
                </dl>
                <ul className={styles.species} aria-label="Рыба в водоёме">
                  {lake.species.map((name) => <li key={name}>{name}</li>)}
                </ul>
                <Link href={`/stats?lake=${lake.id}`} className="link">Улов на этом водоёме</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="plan-heading">
        <header className={styles.head}>
          <h2 id="plan-heading" className={styles.title}>План базы</h2>
          <p className="lead">Нажмите на домик, баню или водоём на схеме, чтобы узнать, что там и как далеко до воды.</p>
        </header>
        <TerritoryPlan />
      </section>

      <section className={styles.calendar}>
        <div className="section wrap">
          <header className={styles.head}>
            <h2 className={styles.title}>Когда что клюёт</h2>
            <p className="lead">
              Календарь собран по журналам наших гостей за три сезона. Щука и окунь берут лучше весной и осенью,
              карп и сом — в тёплые месяцы.
            </p>
          </header>
          <BiteCalendar />
        </div>
      </section>

      <section className="section wrap">
        <header className={`${styles.head} ${styles.headRow}`}>
          <h2 className={styles.title}>Чем заняться кроме рыбалки</h2>
          <Link href="/services" className="link">Все услуги и цены</Link>
        </header>
        <ul className={styles.services}>
          {services.map((service) => (
            <li key={service.id} className={styles.service}>
              <ServiceImage service={service} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 300px" className={styles.serviceImage} />
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <p className={styles.price}>от {rub.format(service.priceFrom)} ₽ {service.unit}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.rulesBlock}>
        <div className={`section wrap ${styles.split}`}>
          <div>
            <h2 className={styles.title}>Правила на берегу</h2>
            <ul className={styles.rules}>
              {rules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </div>
          <div>
            <h2 className={styles.title}>Частые вопросы</h2>
            <div className={styles.faq}>
              {faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`wrap ${styles.ctaInner}`}>
          <div>
            <h2>Забронируйте домик на выходные</h2>
            <p>{contacts.checkIn}. Перезвоним, подберём домик под вашу компанию и расскажем, где сейчас клюёт.</p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact#callback" className="button button-primary">Заказать звонок</Link>
            <a href={contacts.phoneHref} className={styles.ctaPhone}>{contacts.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
