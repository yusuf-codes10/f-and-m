// men shoes array is going to be here
const menShoes = [
  {
    id: 1,
    title: 'Air Jordan 1 mid',
    description: 'This iteration of the AJ1 reimagines Mike\'s first signature model with a fresh mix of colors. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all.',
    defaultColor: 'blue',
    for: 'Mem',
    status: 'BestSeller',
    price: 75,
    isFavorite: false,
    slug: 'air-jordan-1-mid',
    category: 'men-shoes',
    stock: 5,

    colors: [
      {
        name: 'black',
        images: [
          '/images/air-jordan-1-mid.avif',
          '/images/air-jordan-1-mid-profile.avif',
          '/images/air-jordan-1-mid-back.avif',
          '/images/air-jordan-1-mid-top.avif',
        ],
      },
      {
        name: 'blue',
        images: [
          '/images/air-jordan-1-mid-blue.avif',
          '/images/air-jordan-1-mid-blue-profile.avif',
          '/images/air-jordan-1-mid-blue-back.avif',
          '/images/air-jordan-1-mid-blue-top.avif',
        ],
      },
    ],
  },
]

export default menShoes