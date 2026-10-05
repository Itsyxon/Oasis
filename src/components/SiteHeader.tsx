'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'
import { contacts, nav } from '@/lib/site'
import styles from './SiteHeader.module.css'

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <Link href="/" className={styles.brand} onClick={close}>
          <Logo className={styles.logo} />
          <span>Оазис</span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.toggleIcon} aria-hidden="true" />
          {open ? 'Закрыть' : 'Меню'}
        </button>

        <nav id="site-nav" className={styles.nav} data-open={open} aria-label="Основная навигация">
          <ul className={styles.links}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.link}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={contacts.phoneHref} className={styles.phone}>{contacts.phone}</a>
          <Link href="/contact#callback" className="button button-dark" onClick={close}>
            Заказать звонок
          </Link>
        </nav>
      </div>
    </header>
  )
}
