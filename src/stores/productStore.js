// the pinia store for products
import { defineStore } from 'pinia'
import womenShoes from '@/data/women-shoes.js'
import womenBags from '@/data/bags.js'
import menShoes from '@/data/men-shoes.js'
import { computed, ref } from 'vue'

export const productsStore = defineStore('product', () => {
  // * state
  const shoes = ref(womenShoes)
  const bags = ref(womenBags)
  const mShoes = ref(menShoes)

  const favoriteFlag = ref(false)

  // * actions
  // toggle the favorite should be in the store
  const toggleFavoriteFilter = () => {
    favoriteFlag.value = !favoriteFlag.value
  }

  //  * getters
  //   favorite filter (computed)
  const activeFilter = computed(() => {
    // show the favorite if the favorite flag is true
    if (favoriteFlag.value) {
      // we filter favorite products
      return shoes.value.filter((shoe) => shoe.isFavorite === true)
    }
    return shoes.value
  })
    const activeMenFilter = computed(() => {
    // show the favorite if the favorite flag is true
    if (favoriteFlag.value) {
      // we filter favorite products
      return mShoes.value.filter((shoe) => shoe.isFavorite === true)
    }
    return mShoes.value
  })
  // ! this is for the favorite view
  const favoriteProducts = computed(() => {
    const allProducts = [...shoes.value, ...bags.value, ...mShoes.value]
    const fav = allProducts.filter(prod => prod.isFavorite === true)
    return fav
    })

    // * all porducts together
    const allProducts = computed(() => {
      const products = [...shoes.value, ...bags.value]
      return products
    })

  return {
    shoes,
    bags,

    // * actions
    toggleFavoriteFilter,
    favoriteProducts,

    // * getters
    activeFilter,
    allProducts,
    activeMenFilter,
  }
})

// TODO: 1- add the live search btn (search and filter shoes types (pumps, boots..))  2- add more data like men shoes and bags. 3- add select options for the filter add more filter

// TODO: next is adding the live search feature with merging every single array

// ! a note regarding live search
// 1- the live search results directly rendered in whatever page
// 2- detaild search where you have a side appear and getting the results on a search=?query