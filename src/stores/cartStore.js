// pinia store for the cart system
import { defineStore } from "pinia";
import {ref} from 'vue'


export const cartStore = defineStore('cart', () => {
    // * state
    const cartItems = ref([])


    // * actions
    const addToCart = (product, q) => {
            // we have to find the product that matches our id again
            const item = cartItems.value.find(obj => obj.product.id === product.id)
            if (item) {
                // increase qty
                // here we gonna make the item.quantity does not go past the product stock, we have all the data
                if (item.quantity + q > product.stock) {
                    console.log(`out of stock, no can do`);
                }
                else {
                    item.quantity += q
                    // product.stock -= q  

                }
                console.log(`this is the item qty ${item.quantity }`);
            } else {
                // push the product
                cartItems.value.push({product, quantity: q})
                console.log(`this is your cart ${cartItems.value[cartItems.value.length - 1].product.title} and the qty is ${cartItems.value[cartItems.value.length - 1].quantity}`);
            }
        }

    const checkProduct = (id) => {
        console.log(`this is it ${cartItems.value.find(obj => obj.id === id)}`);
        return cartItems.value.find(obj => obj.product.id === id)
    }

    const deleteItem = () => {
        // find the item


        // delete the item
    }


    return{
        cartItems,


        addToCart,
        checkProduct,
    }
})

// TODO: the cart logic such as add/increase quantity