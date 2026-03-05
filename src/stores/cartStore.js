// pinia store for the cart system
import { defineStore } from "pinia";
import {ref} from 'vue'


export const cartStore = defineStore('cart', () => {
    // * state
    const cartItems = ref([])


    // * actions
    const addToCart = (product) => {
        cartItems.value.push({product, quantity: 1})
        console.log(`this is your cart ${cartItems.value[0].product.title}`);
    }


    return{
        cartItems,


        addToCart,
    }
})

// TODO: the cart logic such as add/increase quantity