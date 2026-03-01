<script setup>
import { ref, defineProps } from 'vue'

const isOpen = ref(false)

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value
}

defineProps({
  title: {
    type: String,
    default: 'jake'
  }
})
</script>
<template>
  <div class="accordion">
    <div class="accordion-header">
      <div class="accordion-title">{{title}}</div>
      <button @click="toggleIsOpen">
        <i :class="isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"></i>
      </button>
    </div>
    <transition name="accordion-content">
      <div class="accordion-content" v-if="isOpen">
      </div>
    </transition>
    <hr />
  </div>
</template>
<style scoped>
.accordion {
  width: 100%;
  /* max-width: 400px; */
  height: auto;
  /* background-color: aqua; */
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.accordion-header button {
  background: none;
  border: none;
}

.accordion-title {
  margin-left: 10%;
  font-size: 1.3rem ;
}

.accordion-content {
  transition: 0.3s;
}

i {
  transition: 0.3s;
  cursor: pointer;
}

/* vue built in transition works with v-if */
.accordion-content-enter-active,
.accordion-content-leave-active {
  transition: all 0.3s ease;
}

.accordion-content-enter-from,
.accordion-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

hr {
  border: 1px solid #000; /* Solid black line, 2px thick */
  width: 80%;
  text-align: center;
  margin: 0.5rem auto auto auto;
}
</style>