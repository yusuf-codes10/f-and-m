<script setup>

import { defineProps } from 'vue';

defineProps(
    {
        open: Boolean,
    }
)

import {cartStore} from '@/stores/sidebarStore.js'

const myStore = cartStore()
</script>

<template>
    <div class="sidebar" v-show="myStore.isOpen">
        this is the side bar
    </div>
</template>
<style scoped>
/* transform & transition instead of the display:none for better animation later */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 280px;
  height: 100vh;
  background-color: red;

  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.sidebar.open {
  transform: translateX(0);
}
</style>