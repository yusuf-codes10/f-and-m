<script setup>
// import FProduct from './FProduct.vue'
// import shoes from '@/data/women-shoes.js'
import FProduct from '@/components/FProduct.vue';
import { productsStore } from '@/stores/productStore'

// we have to set the store
const myStore = productsStore()
console.log(myStore.shoes)

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
  <div class="products women">
    <FProduct v-for="shoe in myStore.activeFilter" :key="shoe.id" :product="shoe" />
  </div>
</template>

<style scoped>
.women {
  min-height: 100dvh;
  /* background-color: seagreen; */
}
</style>
