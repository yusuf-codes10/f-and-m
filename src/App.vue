<script setup>
import FHeader from './components/FHeader.vue'
import FFooter from './components/FFooter.vue'
import SideBar from './components/ui/SideBar.vue';
// import HomeView from './views/HomeView.vue'

import {cartStore} from '@/stores/sidebarStore.js'

const myStore = cartStore()
</script>

<template>
  <FHeader />
  <!-- this is where the viewRouter component is going to be -->
  <!-- <HeroSection />
  <ProducsContainer />
  <PublishSection /> -->
  <!-- <HomeView /> -->
   <SideBar :open="myStore.isOpen"/>
  <RouterView />
  <FFooter />
  <!--  -->
</template>

<style scoped></style>

<!--TODO 1-more products (men, women in the women view...) -->
<!--TODO 2- live search feature and syncing with different views -->
<!--TODO 3- dynamic routes & product details page -->
