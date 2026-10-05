import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/news', destination: '/services', permanent: true },
      { source: '/statistic', destination: '/stats', permanent: true },
    ]
  },
}

export default nextConfig
