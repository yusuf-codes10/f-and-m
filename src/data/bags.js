// bags array is going to be here
const bags = [
  {
    id: 1,
    preview: [
      { id: 1, url: '/images/eva.jpg' },
      { id: 2, url: '/images/eva-full.jpg' },
      { id: 3, url: '/images/eva-top.jpg' },
    ],
    title: 'Eva',
    description: 'Shoulder bag - lamb nappa leather',
    color: 'Black',
    for: 'Women',
    status: 'New',
    price: 1020,
    availableColor: ['black', 'blush'],
    isFavorite: false,
    slug: 'eva',
    category: 'bag',
    // this is how many physical product are avilable
    stock: 5,

    coloredPreview: [
      { id: 1, url: '/images/hot-chick-bianco.jpg' },
      { id: 2, url: '/images/hot-chick-black.jpg' },
      { id: 3, url: '/images/hot-chick-blush.jpg' },
    ],
  },
  {
    id: 2,
    preview: [
      { id: 1, url: '/images/bettina-mini.jpg' },
      { id: 2, url: '/images/bettina-mini-full.jpg' },
      { id: 3, url: '/images/bettina-mini-top.jpg' },
    ],
    title: 'Bettina',
    description: 'Top handle bag - calf leather',
    color: 'Black',
    for: 'Women',
    status: 'New',
    price: 1150,
    availableColor: ['black', 'red'],
    isFavorite: false,
    slug: 'bettina',
    category: 'bag',
    // this is how many physical product are avilable
    stock: 5,

    coloredPreview: [
      { id: 1, url: '/images/hot-chick-bianco.jpg' },
      { id: 2, url: '/images/hot-chick-black.jpg' },
      { id: 3, url: '/images/hot-chick-blush.jpg' },
    ],
  },
  {
    id: 3,
    preview: [
      { id: 1, url: '/images/baggy.jpg' },
      { id: 2, url: '/images/baggy-full.jpg' },
      { id: 3, url: '/images/baggy-top.jpg' },
    ],
    title: 'Baggy',
    description: 'Crossbody bag - grained leather',
    color: 'Black',
    for: 'Women',
    status: 'New',
    price: 980,
    availableColor: ['black', 'white'],
    isFavorite: false,
    slug: 'baggy',
    category: 'bag',
    // this is how many physical product are avilable
    stock: 5,

    coloredPreview: [
      { id: 1, url: '/images/hot-chick-bianco.jpg' },
      { id: 2, url: '/images/hot-chick-black.jpg' },
      { id: 3, url: '/images/hot-chick-blush.jpg' },
    ],
  },
]

export default bags
