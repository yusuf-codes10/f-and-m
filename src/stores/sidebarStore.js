// ! pinia store for the sidebar and the mobile menu
import { defineStore } from 'pinia'
import {ref} from 'vue'

export const cartStore = defineStore('sidebar', () => {

    const isOpen = ref(false)

    // * actions
    const toggleSideBar = () => {
        isOpen.value = !isOpen.value
    }

    return {
        isOpen,

        toggleSideBar,
    }
})