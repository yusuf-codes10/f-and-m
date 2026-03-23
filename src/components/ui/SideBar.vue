<script setup>

import { defineProps } from 'vue';

defineProps(
    {
        open: Boolean,
    }
)

import {sideBarStore} from '@/stores/sidebarStore.js'

const myStore = sideBarStore()
</script>

<template>
    <div class="sidebar"  :class="{ open: myStore.isOpen }">
        this is the side bar
    </div>
</template>
<style scoped>
/* transform & transition instead of the display:none for better animation later */
.sidebar {
  position: fixed;
  right: 0;
  top: 0;

  width: 280px;
  height: 100vh;
  /* background-color: red; */
  background-color: var(--bg-color);

  transform: translateX(100%); /* push it to the right */
  transition: transform 0.3s ease;
  z-index: 999;
}

.sidebar.open {
  transform: translateX(0);
}
</style>
