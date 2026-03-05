// pinia store for the cart system
import { defineStore } from "pinia";
import {ref} from 'vue'


export const cartStore = defineStore('cart', () => {
    // * state
    const cartItems = ref([])





    return{
        cartItems,
    }
})

// TODO: the cart logic such as add/increase quantity