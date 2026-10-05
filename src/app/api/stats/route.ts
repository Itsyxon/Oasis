import type { NextRequest } from 'next/server'
import { isLakeId, lakes } from '@/lib/data'
import { getStats } from '@/lib/stats'

export function GET(request: NextRequest) {
  const lake = request.nextUrl.searchParams.get('lake') ?? 'all'

  if (lake !== 'all' && !isLakeId(lake)) {
    return Response.json(
      { error: `Неизвестный водоём «${lake}». Допустимые значения: all, ${lakes.map((item) => item.id).join(', ')}.` },
      { status: 400 },
    )
  }

  return Response.json(getStats(lake), {
    headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
  })
}
