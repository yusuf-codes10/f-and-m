// ! pinia store for the sidebar and the mobile menu
import { defineStore } from 'pinia'
import {ref} from 'vue'

export const cartStore = defineStore('sidebar', () => {

    const isOpen = ref(true)



    return {
        isOpen,
    }
})