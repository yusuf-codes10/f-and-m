<script setup>
    import { cartStore } from '@/stores/cartStore'
import FProduct from '@/components/FProduct.vue'


    const myCartStore = cartStore()
    console.log(myCartStore)
</script>
<template>
    <div class="cart-page">
    This is the cart 
    <h3>The products in cart</h3>
    <div class="products">
      <FProduct v-for="item in myCartStore.cartItems" :key="item.product.id" :product="item.product" />
    </div>
  </div>
</template>
<style scoped>
.cart-page {
  height: 100dvh;
  background-color: sienna;
}
</style>