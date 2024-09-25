export interface Lake {
  id: number
  lakeName: string
  lakeDescription: string
}

export interface Fish {
  id: number
  fishName: string
  catchDate: string
  lakeName: string
  fishWeight: number
  bait: string
}

const lakesList: Lake[] = [
  {
    id: 1,
    lakeName: 'Озеро Беглое',
    lakeDescription: 'Небольшое озеро, окружённое берёзовой чащей',
  },
  {
    id: 2,
    lakeName: 'Озеро Песчаное',
    lakeDescription: 'Неглубокое озеро с белым песком',
  },
  {
    id: 3,
    lakeName: 'Река Полевая',
    lakeDescription: 'Прозрачная речка с небольшим течением. Мечта любой рыбы!',
  },
]

const fishesList: Fish[] = [
  {
    id: 1,
    fishName: 'Карп',
    catchDate: '23.09.2024 04:52',
    lakeName: 'Озеро Беглое',
    fishWeight: 2.52,
    bait: 'Бойл',
  },
  {
    id: 2,
    fishName: 'Карп',
    catchDate: '19.08.2024 17:22',
    lakeName: 'Озеро Беглое',
    fishWeight: 1.8,
    bait: 'Бойл',
  },
  {
    id: 3,
    fishName: 'Лещ',
    catchDate: '22.09.2024 08:01',
    lakeName: 'Озеро Беглое',
    fishWeight: 1.2,
    bait: 'Кукуруза',
  },
  {
    id: 4,
    fishName: 'Щука',
    catchDate: '12.09.2024 09:30',
    lakeName: 'Озеро Беглое',
    fishWeight: 1.5,
    bait: 'Блесна',
  },
  {
    id: 5,
    fishName: 'Окунь',
    catchDate: '01.09.2024 20:12',
    lakeName: 'Озеро Беглое',
    fishWeight: 0.8,
    bait: 'Блесна',
  },
  {
    id: 6,
    fishName: 'Окунь',
    catchDate: '03.09.2024 22:35',
    lakeName: 'Озеро Беглое',
    fishWeight: 0.5,
    bait: 'Блесна',
  },
  {
    id: 7,
    fishName: 'Щука',
    catchDate: '05.09.2024 12:15',
    lakeName: 'Озеро Беглое',
    fishWeight: 2.12,
    bait: 'Джиг',
  },
  {
    id: 8,
    fishName: 'Карп',
    catchDate: '15.09.2024 17:00',
    lakeName: 'Озеро Песчаное',
    fishWeight: 4.5,
    bait: 'Бойл',
  },
  {
    id: 9,
    fishName: 'Сазан',
    catchDate: '25.09.2024 23:00',
    lakeName: 'Река Полевая',
    fishWeight: 3.4,
    bait: 'Кукуруза',
  },
  {
    id: 10,
    fishName: 'Щука',
    catchDate: '23.09.2024 16:20',
    lakeName: 'Озеро Беглое',
    fishWeight: 3.5,
    bait: 'Блесна',
  },
  {
    id: 11,
    fishName: 'Рак',
    catchDate: '18.09.2024 11:00',
    lakeName: 'Озеро Песчаное',
    fishWeight: 0.1,
    bait: 'Чеснок',
  },
  {
    id: 12,
    fishName: 'Сом',
    catchDate: '11.09.2024 11:00',
    lakeName: 'Река Полевая',
    fishWeight: 4.2,
    bait: 'Червь',
  },
  {
    id: 13,
    fishName: 'Сом',
    catchDate: '17.09.2024 10:30',
    lakeName: 'Река Полевая',
    fishWeight: 6.5,
    bait: 'Червь',
  },
  {
    id: 14,
    fishName: 'Карась золотой',
    catchDate: '18.09.2024 07:20',
    lakeName: 'Река Полевая',
    fishWeight: 1.5,
    bait: 'Опарыш',
  },
  {
    id: 15,
    fishName: 'Карась золотой',
    catchDate: '18.09.2024 06:50',
    lakeName: 'Река Полевая',
    fishWeight: 1,
    bait: 'Опарыш',
  },
  {
    id: 16,
    fishName: 'Осётр',
    catchDate: '17.09.2024 02:25',
    lakeName: 'Река Полевая',
    fishWeight: 1.7,
    bait: 'Червь',
  },
  {
    id: 17,
    fishName: 'Сазан',
    catchDate: '13.09.2024 06:50',
    lakeName: 'Река Полевая',
    fishWeight: 3.2,
    bait: 'Хлеб',
  },
  {
    id: 18,
    fishName: 'Уклейка',
    catchDate: '17.09.2024 12:00',
    lakeName: 'Река Полевая',
    fishWeight: 0.2,
    bait: 'Опарыш',
  },
  {
    id: 19,
    fishName: 'Уклейка',
    catchDate: '17.09.2024 12:05',
    lakeName: 'Река Полевая',
    fishWeight: 0.1,
    bait: 'Опарыш',
  },
  {
    id: 20,
    fishName: 'Чехонь',
    catchDate: '11.09.2024 15:01',
    lakeName: 'Река Полевая',
    fishWeight: 0.27,
    bait: 'Опарыш',
  },
  {
    id: 21,
    fishName: 'Голавль',
    catchDate: '18.09.2024 19:27',
    lakeName: 'Озеро Песчаное',
    fishWeight: 1.27,
    bait: 'Блесна',
  },
]

export { lakesList, fishesList }
