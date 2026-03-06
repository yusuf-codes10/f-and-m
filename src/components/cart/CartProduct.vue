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

// computed property for inStock
const inStock = computed(() => {
    if (props.item.product.stock !==0) {
        return 'In Stock'
    } else {
        return 'Sold Out'
    }
})
</script>
<template>
  <div class="item">
    <div class="image">
      <img :src="currentColor?.images[0]" :alt="props.item.product.title" />
    </div>
    <div class="content">
      <h1 class="title">{{ props.item.product.title }}</h1>
      <p class="inStock">{{ inStock }}</p>
      
      <p>{{ props.item.quantity }}</p>
    </div>
    <div class="price">
        ${{ props.item.product.price }}.00
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
  /* justify-content: space-between; */
  gap: 1rem;
}

.image img {
  width: 100%;
  height: 100%;
}

.content {
    text-align: start;
}
.price {
    justify-self: flex-end;
    margin-left: auto;
}
</style>