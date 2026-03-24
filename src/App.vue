<script setup>
import FHeader from './components/FHeader.vue'
import FFooter from './components/FFooter.vue'
import SideBar from './components/ui/SideBar.vue';
// import HomeView from './views/HomeView.vue'

import {sideBarStore} from '@/stores/sidebarStore.js'

const myStore = sideBarStore()
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

<!-- TODO: fix the item cart style and logic -->
<!-- TODO: add toast notifications -->
