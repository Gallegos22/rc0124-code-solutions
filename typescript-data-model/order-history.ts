interface HistoryProps {
  placedOn: string,
  total: number,
  shipTo: string,
  deliveredOn: string,
  title?: string,
  author?: string,
  returnWindow: string,
  items?: Stuff[]
};

interface Stuff {
  type: string,
  name: string,
  price: number,
}

const orderHistory: HistoryProps[] = [
  {
    placedOn: 'August 4, 2020',
    total: 34.0,
    shipTo: 'JS Masher',
    deliveredOn: 'August 8, 2020',
    title: 'Javascript for Impatient programmers',
    author: 'Rauschmayer Dr. Axel',
    returnWindow: 'Sep 7, 2020',
  },
  {
    placedOn: 'July 19, 2020',
    total: 44.53,
    shipTo: 'JS Masher',
    deliveredOn: 'Jul 20, 2020',
    title: 'The Timeless Way Of Building',
    author: 'Alexander Christopher',
    returnWindow: 'Aug 19, 2020',
  },
  {
    placedOn: 'July 4, 2020',
    total: 17.22,
    shipTo: 'JS Masher',
    deliveredOn: 'Jul 7, 2020',
    title: 'GameCube Controller Adapter',
    returnWindow: 'Aug 5, 2020',
  },
  {
    placedOn: 'July 3, 2020',
    total: 138.93,
    shipTo: 'JS Masher',
    deliveredOn: 'Jul 5, 2020',
    author: 'Alexander Christopher',
    returnWindow: 'Aug 19, 2020',
    items: [
      {
        type: 'Hardware',
        name: 'GameCube Controller',
        price: 94.95,
      },
      {
        type: 'Book',
        name: 'The Art Of Sql',
        price: 33.99,
      },
    ],
  },
];

console.log(orderHistory)
