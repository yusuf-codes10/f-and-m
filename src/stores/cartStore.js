// pinia store for the cart system
import { defineStore } from "pinia";
import {ref} from 'vue'


export const cartStore = defineStore('cart', () => {
    // * state
    const cartItems = ref([])


    // * actions
    const addToCart = () => {
        console.log('has been added');
    }


    return{
        cartItems,


        addToCart,
    }
})

// TODO: the cart logic such as add/increase quantity