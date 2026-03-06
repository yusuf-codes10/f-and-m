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
    <div class="cart-flex">
      <FProduct v-for="item in myCartStore.cartItems" :key="item.product.id" :product="item.product" />
    </div>
  </div>
</template>
<style scoped>
.cart-page {
  min-height: 100dvh;
  background-color: sienna;
}

.cart-flex {
  display: flex;
  flex-direction: column;
}
</style>

<!-- TODO:  Since it serves different functionality than women/bags/favs. it should have it's own unique layout-->
<!-- TODO: delete from cart and that's it -->