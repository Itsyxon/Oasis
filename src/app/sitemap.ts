import type { MetadataRoute } from 'next'
import { nav } from '@/lib/site'

const base = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({ url: `${base}${item.href === '/' ? '' : item.href}`, changeFrequency: 'monthly' }))
}
