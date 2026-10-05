import type { Metadata } from 'next'
import Link from 'next/link'
import PageIntro from '@/components/PageIntro'
import ServiceImage from '@/components/ServiceImage'
import { priceList, services } from '@/lib/site'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Услуги и цены',
  description: 'Рыбалка, домики, беседки с мангалом, баня и бассейн на базе «Оазис». Цены на путёвки и проживание.',
}

const rub = new Intl.NumberFormat('ru-RU')

export default function ServicesPage() {
  return (
    <>
      <PageIntro title="Услуги и цены">
        Приезжайте на одну рыбалку или на неделю с семьёй — всё бронируется по отдельности, без обязательных пакетов.
      </PageIntro>

      <div className="wrap">
        {services.map((service) => (
          <section key={service.id} id={service.id} className={styles.service}>
            <ServiceImage service={service} sizes="(max-width: 860px) 100vw, 55vw" className={styles.image} />
            <div className={styles.body}>
              <h2>{service.title}</h2>
              <p className={styles.summary}>{service.summary}</p>
              <ul className={styles.details}>
                {service.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <p className={styles.price}>
                от <strong>{rub.format(service.priceFrom)} ₽</strong> {service.unit}
              </p>
              <Link href={`/contact?service=${service.id}#callback`} className="button button-dark">Забронировать</Link>
            </div>
          </section>
        ))}
      </div>

      <section className={styles.pricesBlock} aria-labelledby="prices">
        <div className="section wrap">
          <h2 id="prices" className={styles.pricesTitle}>Прайс-лист</h2>
          <div className={styles.priceGroups}>
            {priceList.map((group) => (
              <table key={group.group} className={styles.table}>
                <caption>{group.group}</caption>
                <tbody>
                  {group.items.map((item) => (
                    <tr key={item.name}>
                      <th scope="row">
                        {item.name}
                        <span>{item.note}</span>
                      </th>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
          <p className={styles.note}>Цены действуют в выходные и праздники. В будни — скидка 15% на домики и баню.</p>
        </div>
      </section>
    </>
  )
}
