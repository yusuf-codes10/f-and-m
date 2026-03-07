<script setup>
import { ref, defineProps, computed } from 'vue'
import { cartStore } from '@/stores/cartStore'

const myCartStore = cartStore()

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
  // FIXME: Backend related issue
  if (props.item.product.stock !== 0) {
    return 'In Stock'
  } else {
    return 'Sold Out'
  }
})
</script>
<template>
  <div class="item">
    <div class="image">
      <!-- this is the issue -->
      <img :src="currentColor?.name = myCartStore.colorToPass" :alt="props.item.product.title" />
    </div>
    <div class="content">
      <h1 class="title">{{ props.item.product.title }}</h1>
      <p class="inStock">{{ inStock }}</p>
      <p>{{ props.item.product.stock }}</p>

      <p>{{ props.item.quantity }}</p>
      <div class="remove-btn">
        <button @click="myCartStore.deleteItem(props.item.product.id)">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
    <div class="price">${{ props.item.product.price }}.00</div>
  </div>
</template>
<style scoped>
.item {
  /* background-color: red; */
  /* padding: 5rem; */
  height: 100%;
  max-height: 200px;
  width: 80%;
  margin: 1rem 0;
  display: flex;
  /* justify-content: space-between; */
  gap: 1rem;
}

.image {
  width: 20%;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.content {
  text-align: start;
}
.price {
  justify-self: flex-end;
  margin-left: auto;
}

.remove-btn button {
  background: none;
  border-radius: 3rem;
  border-color: var(--brand-color);
  padding: 4px 8px;
  font-size: 0.9rem;
  cursor: pointer;
}
</style>