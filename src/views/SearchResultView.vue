<script setup>
// Access the search query from the route itself
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { productsStore } from '@/stores/productStore'
import FProduct from '@/components/FProduct.vue'

// we have to set the store
const myStore = productsStore()

const route = useRoute()

// better way to access the query is with computed
const searchQuery = computed(() => {
  return route.query.q?.toLowerCase() || ''
})

// filterd products here
const filterdProducts = computed(() => {
  return myStore.allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.value)
  )
})

console.log(myStore.allProducts.map((e) => e.title))
</script>
<template>
  <div class="search">
    <h1 class="title">Search results for "{{ searchQuery }}"</h1>
    <div class="result products" v-if="filterdProducts.length">
        <FProduct v-for="product in filterdProducts" :key="product.id" :product="product"/>
    </div>
    <div class="not-found" v-else>Page not found</div>
  </div>
</template>
<style scoped>
.search {
  min-height: 100vh;
  /* background-color: aqua; */
}
</style>

<!-- TODO: the professional way is to render all the search results from the navbar to the new searchResilt view using router queries -->
