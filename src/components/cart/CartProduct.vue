<script setup>
    import {cartStore} from '@/stores/cartStore'

    const myCartStore = cartStore()
</script>
<template>
    <div class="item" v-for="item in myCartStore.cartItems" :key="item.product.id">
        <h1>{{item.product.title}}</h1>
        <p>{{ item.quantity }}</p>
        
    </div>
</template>
<style scoped>
    .item {
        background-color: red;
        padding: 5rem;
        height: 100px;
        width: 100px;
        margin: 1rem 0;
    }
</style>