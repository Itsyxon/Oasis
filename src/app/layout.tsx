import type { Metadata, Viewport } from 'next'
import { Alegreya, Golos_Text } from 'next/font/google'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import './globals.css'

const display = Alegreya({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '700'],
  variable: '--font-display',
})

const text = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-text',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'),
  title: {
    default: 'Оазис — база отдыха и рыбалки',
    template: '%s — Оазис',
  },
  description: 'Природно-туристический комплекс «Оазис»: два озера и река, деревянные домики у воды, баня, бассейн и беседки с мангалом.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Оазис',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a2f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${text.variable}`}>
      <body>
        <a className="skip-link" href="#content">Перейти к содержанию</a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
