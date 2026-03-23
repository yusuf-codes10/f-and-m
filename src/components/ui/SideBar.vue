<script setup>
import { defineProps } from 'vue'

defineProps({
  open: Boolean,
})

import { sideBarStore } from '@/stores/sidebarStore.js'

const myStore = sideBarStore()

const close = () => {
  myStore.isOpen = false
}
</script>

<template>
  <div class="sidebar" :class="{ open: myStore.isOpen }">
    <i @click="close" class="fa-solid fa-xmark"></i>
    <ul>
      <li><RouterLink :to="{ name: 'Women' }"> Women</RouterLink></li>
      <li><RouterLink :to="{ name: 'Men' }">Men</RouterLink></li>
      <li><RouterLink :to="{ name: 'Bags' }">Bags & Accesories</RouterLink></li>
      <li><RouterLink :to="{ name: 'Favorites' }">Favorites</RouterLink></li>
    </ul>
  </div>
</template>
<style scoped>
/* transform & transition instead of the display:none for better animation later */
.sidebar {
  position: fixed;
  right: 0;
  top: 0;

  width: 70%;
  height: 100vh;
  /* background-color: red; */
  background-color: var(--bg-color);

  transform: translateX(100%); /* push it to the right */
  transition: transform 0.3s ease;
  z-index: 40;

  padding: 25px 2rem;
  border-left: 1px solid var(--text-color);
  /* position: relative; */
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar i {
  position: absolute;
  top: 25px;
  right: 10px;

  cursor: pointer;
}

.sidebar ul {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style-type: none;
}

ul li {
  text-decoration: underline;
}
 a {
  text-decoration: none;
  color: inherit;
}
</style>
