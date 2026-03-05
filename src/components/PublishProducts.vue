<script setup>
import FProduct from './FProduct.vue'
// import shoes from '@/data/women-shoes.js'
import { productsStore } from '@/stores/productStore'

// we have to set the store
const myStore = productsStore()
console.log(myStore.shoes)

// slice to only 5 products
import {computed} from 'vue'

const slicedProducts = computed(() => {
  const sliced = myStore.shoes.slice(0, 6)
  return sliced

})


// import { ref, onMounted } from 'vue'

// fetch data from an api
// const array = ref([])
// onMounted(async () => {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products')
//     const data = await response.json()
//     array.value = data

//     console.log(array.value)
//   } catch (error) {
//     console.log(error)
//   }
// })

// search by name feature
</script>

<template>
  <div class="products">
    <FProduct v-for="shoe in slicedProducts" :key="shoe.id" :product="shoe" />
  </div>
</template>

<style scoped></style>