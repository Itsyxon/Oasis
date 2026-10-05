import type { Metadata } from 'next'
import PageIntro from '@/components/PageIntro'
import StatsView from '@/components/StatsView'
import { isLakeId, lakes } from '@/lib/data'
import { getStats } from '@/lib/stats'

export const metadata: Metadata = {
  title: 'Статистика улова',
  description: 'Что, где и на что ловят на базе «Оазис»: улов по водоёмам, видам рыбы, наживкам и времени суток.',
}

export default async function StatsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const { lake } = await searchParams
  const filter = typeof lake === 'string' && isLakeId(lake) ? lake : 'all'

  return (
    <>
      <PageIntro title="Статистика улова">
        Гости записывают улов в журнал у кафе, а мы переносим его сюда. Выберите водоём, чтобы узнать, кто там клюёт,
        на что и в какое время.
      </PageIntro>
      <StatsView key={filter} lakes={lakes} initial={getStats(filter)} />
    </>
  )
}
