<script setup>
import { ref, defineProps, computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
  },
})

const selectedColor = ref(props.item.product.defaultColor)

// computed property for the current color, later we will change the color only
const currentColor = computed(() =>
  props.item.product.colors.find((c) => c.name === selectedColor.value)
)

console.log(currentColor)
</script>
<template>
  <div class="item">
    <div class="image">
      <img :src="currentColor?.images[0]" :alt="props.item.product.title" />
    </div>
    <div class="content">
      <h1>{{ props.item.product.title }}</h1>
      <p>{{ props.item.quantity }}</p>
    </div>
  </div>
</template>
<style scoped>
.item {
  background-color: red;
  /* padding: 5rem; */
  height: 100px;
  width: 80%;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
}

.image img {
  width: 100%;
  height: 100%;
}
</style>