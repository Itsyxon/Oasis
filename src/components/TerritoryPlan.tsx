'use client'

import Link from 'next/link'
import { useState } from 'react'
import { planObjects, type PlanKind } from '@/lib/site'
import styles from './TerritoryPlan.module.css'

const groups: { kind: PlanKind; title: string }[] = [
  { kind: 'cabin', title: 'Домики' },
  { kind: 'service', title: 'Территория' },
  { kind: 'water', title: 'Водоёмы' },
]

const cabinX = [228, 316, 404, 492, 580, 668]

export default function TerritoryPlan() {
  const [activeId, setActiveId] = useState('cabin-1')
  const active = planObjects.find((item) => item.id === activeId) ?? planObjects[0]

  const shape = (id: string) => ({
    className: styles.shape,
    'data-active': id === activeId,
    onClick: () => setActiveId(id),
  })

  return (
    <div className={styles.plan}>
      <figure className={styles.map}>
        <svg viewBox="0 0 1000 620" role="img" aria-labelledby="plan-title">
          <title id="plan-title">Схема территории базы «Оазис»</title>
          <rect width="1000" height="620" fill="var(--meadow)" />

          <g className={styles.trees} aria-hidden="true">
            {[[760, 210], [800, 180], [840, 220], [890, 190], [930, 240], [960, 200], [720, 560], [770, 590], [960, 580], [920, 600], [180, 590], [230, 600]].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="16" />
            ))}
          </g>

          <path {...shape('peschanoe')} className={`${styles.shape} ${styles.water}`} d="M0 0H1000V96C840 140 690 82 520 118 350 154 190 104 0 150Z" />
          <path {...shape('polevaya')} className={`${styles.shape} ${styles.river}`} d="M70 130C110 250 40 340 92 450S130 560 76 620" />
          <path {...shape('begloe')} className={`${styles.shape} ${styles.water}`} d="M820 300C880 268 962 300 968 372 974 448 924 520 852 512 790 506 762 456 776 408 786 366 774 326 820 300Z" />

          <path {...shape('beach')} className={`${styles.shape} ${styles.sand}`} d="M150 168C330 140 500 178 660 136 770 108 860 138 900 150L880 214C700 202 420 226 170 232Z" />

          <rect x="180" y="250" width="560" height="270" rx="18" className={styles.grounds} />
          <path className={styles.road} d="M460 620V560" />

          {cabinX.map((x) => (
            <path key={x} className={styles.path} d={`M${x + 23} 296V214`} />
          ))}

          {cabinX.map((x, index) => {
            const id = `cabin-${index + 1}`
            return (
              <g key={id} {...shape(id)}>
                <rect x={x} y="296" width="46" height="46" rx="4" />
                <text x={x + 23} y="326" textAnchor="middle">{index + 1}</text>
              </g>
            )
          })}

          <g {...shape('banya')}>
            <rect x="228" y="408" width="134" height="76" rx="4" />
            <text x="295" y="452" textAnchor="middle">Баня</text>
          </g>
          <g {...shape('cafe')}>
            <rect x="404" y="408" width="134" height="76" rx="4" />
            <text x="471" y="452" textAnchor="middle">Кафе</text>
          </g>
          <g {...shape('play')}>
            <rect x="580" y="398" width="134" height="96" rx="4" />
            <text x="647" y="452" textAnchor="middle">Игровая</text>
          </g>
          <g {...shape('parking')}>
            <rect x="380" y="540" width="160" height="44" rx="4" />
            <text x="460" y="568" textAnchor="middle">Парковка</text>
          </g>

          <g className={styles.labels} aria-hidden="true">
            <text x="520" y="62" textAnchor="middle">Озеро Песчаное</text>
            <text x="525" y="198" textAnchor="middle">пляж</text>
            <text x="866" y="414" textAnchor="middle">Озеро</text>
            <text x="866" y="438" textAnchor="middle">Беглое</text>
            <text x="134" y="372" transform="rotate(-80 134 372)" textAnchor="middle">Река Полевая</text>
          </g>
        </svg>
      </figure>

      <div className={styles.side}>
        {groups.map((group) => (
          <fieldset key={group.kind} className={styles.group}>
            <legend>{group.title}</legend>
            <div className={styles.chips} data-kind={group.kind}>
              {planObjects
                .filter((item) => item.kind === group.kind)
                .map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={styles.chip}
                    aria-pressed={item.id === activeId}
                    aria-label={item.kind === 'cabin' ? item.title : undefined}
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.short}
                  </button>
                ))}
            </div>
          </fieldset>
        ))}

        <div className={styles.details} aria-live="polite">
          <h3>{active.title}</h3>
          <p>{active.text}</p>
          {active.lakeId ? (
            <Link className="link" href={`/stats?lake=${active.lakeId}`}>Посмотреть улов на этом водоёме</Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}
