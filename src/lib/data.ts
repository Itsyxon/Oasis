export type LakeId = 'begloe' | 'peschanoe' | 'polevaya'

export interface Lake {
  id: LakeId
  name: string
  kind: 'озеро' | 'река'
  description: string
  depth: string
  area: string
  bottom: string
  species: string[]
}

export interface Catch {
  id: number
  species: string
  caughtAt: string
  lakeId: LakeId
  weightKg: number
  bait: string
}

export const lakes: Lake[] = [
  {
    id: 'begloe',
    name: 'Озеро Беглое',
    kind: 'озеро',
    description: 'Небольшое озеро в берёзовой чаще. Глубокая яма у северного берега держит щуку и крупного карпа.',
    depth: 'до 6 м',
    area: '4,2 га',
    bottom: 'ил, коряжник у северного берега',
    species: ['Карп', 'Щука', 'Окунь', 'Лещ'],
  },
  {
    id: 'peschanoe',
    name: 'Озеро Песчаное',
    kind: 'озеро',
    description: 'Неглубокое озеро с белым песчаным дном. Тёплая вода, пологий берег и пляж — сюда приходят с детьми.',
    depth: 'до 3 м',
    area: '2,8 га',
    bottom: 'песок, у камышей — ил',
    species: ['Карп', 'Голавль', 'Рак'],
  },
  {
    id: 'polevaya',
    name: 'Река Полевая',
    kind: 'река',
    description: 'Прозрачная речка с ровным течением. Самое разнообразное место базы: от уклейки до сома.',
    depth: 'до 4 м',
    area: '1,6 км берега',
    bottom: 'галька, на плёсах — песок',
    species: ['Сом', 'Сазан', 'Осётр', 'Карась', 'Чехонь', 'Уклейка'],
  },
]

export const catches: Catch[] = [
  { id: 1, species: 'Карп', caughtAt: '2024-09-23T04:52', lakeId: 'begloe', weightKg: 2.52, bait: 'Бойл' },
  { id: 2, species: 'Карп', caughtAt: '2024-08-19T17:22', lakeId: 'begloe', weightKg: 1.8, bait: 'Бойл' },
  { id: 3, species: 'Лещ', caughtAt: '2024-09-22T08:01', lakeId: 'begloe', weightKg: 1.2, bait: 'Кукуруза' },
  { id: 4, species: 'Щука', caughtAt: '2024-09-12T09:30', lakeId: 'begloe', weightKg: 1.5, bait: 'Блесна' },
  { id: 5, species: 'Окунь', caughtAt: '2024-09-01T20:12', lakeId: 'begloe', weightKg: 0.8, bait: 'Блесна' },
  { id: 6, species: 'Окунь', caughtAt: '2024-09-03T22:35', lakeId: 'begloe', weightKg: 0.5, bait: 'Блесна' },
  { id: 7, species: 'Щука', caughtAt: '2024-09-05T12:15', lakeId: 'begloe', weightKg: 2.12, bait: 'Джиг' },
  { id: 8, species: 'Карп', caughtAt: '2024-09-15T17:00', lakeId: 'peschanoe', weightKg: 4.5, bait: 'Бойл' },
  { id: 9, species: 'Сазан', caughtAt: '2024-09-25T23:00', lakeId: 'polevaya', weightKg: 3.4, bait: 'Кукуруза' },
  { id: 10, species: 'Щука', caughtAt: '2024-09-23T16:20', lakeId: 'begloe', weightKg: 3.5, bait: 'Блесна' },
  { id: 11, species: 'Рак', caughtAt: '2024-09-18T11:00', lakeId: 'peschanoe', weightKg: 0.1, bait: 'Чеснок' },
  { id: 12, species: 'Сом', caughtAt: '2024-09-11T11:00', lakeId: 'polevaya', weightKg: 4.2, bait: 'Червь' },
  { id: 13, species: 'Сом', caughtAt: '2024-09-17T10:30', lakeId: 'polevaya', weightKg: 6.5, bait: 'Червь' },
  { id: 14, species: 'Карась', caughtAt: '2024-09-18T07:20', lakeId: 'polevaya', weightKg: 1.5, bait: 'Опарыш' },
  { id: 15, species: 'Карась', caughtAt: '2024-09-18T06:50', lakeId: 'polevaya', weightKg: 1, bait: 'Опарыш' },
  { id: 16, species: 'Осётр', caughtAt: '2024-09-17T02:25', lakeId: 'polevaya', weightKg: 1.7, bait: 'Червь' },
  { id: 17, species: 'Сазан', caughtAt: '2024-09-13T06:50', lakeId: 'polevaya', weightKg: 3.2, bait: 'Хлеб' },
  { id: 18, species: 'Уклейка', caughtAt: '2024-09-17T12:00', lakeId: 'polevaya', weightKg: 0.2, bait: 'Опарыш' },
  { id: 19, species: 'Уклейка', caughtAt: '2024-09-17T12:05', lakeId: 'polevaya', weightKg: 0.1, bait: 'Опарыш' },
  { id: 20, species: 'Чехонь', caughtAt: '2024-09-11T15:01', lakeId: 'polevaya', weightKg: 0.27, bait: 'Опарыш' },
  { id: 21, species: 'Голавль', caughtAt: '2024-09-18T19:27', lakeId: 'peschanoe', weightKg: 1.27, bait: 'Блесна' },
]

export const isLakeId = (value: string): value is LakeId => lakes.some((lake) => lake.id === value)
