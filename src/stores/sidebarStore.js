// ! pinia store for the sidebar and the mobile menu
import { defineStore } from 'pinia'
import {ref} from 'vue'

export const sideBarStore = defineStore('sidebar', () => {

    const isOpen = ref(false)

    // * actions
    const toggleSideBar = () => {
        isOpen.value = !isOpen.value
    }
    const closeSidebar = () => {
      isOpen.value = false
    }

    return {
        isOpen,

        toggleSideBar,
        closeSidebar,
    }
})
