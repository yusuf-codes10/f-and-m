<script setup>
import { defineProps, ref, computed } from 'vue'
// import shoes from '@/data/women-shoes.js'
// import { productsStore } from '@/stores/productStore'

// we have to set the store
// const myStore = productsStore()

const isHoverd = ref(false)

const props = defineProps({
  product: {
    type: Object,
  },
})


// hoverin on the preview img
const currentImageIndex = ref(0)

const isShowingArrows = ref(false)

const showArrowButton = () => {
  isShowingArrows.value = !isShowingArrows.value
}

// arrow click events
const nextImage = () => {
  if (currentImageIndex.value < currentColor.value.images.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0
  }
}

// *fix: we have to fix this
const previousImage = () => {
  if (currentImageIndex.value > 1) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = currentColor.value.images.length - 1
  }
}

// add to favorite functionality
// const isFavorite = ref(false)
const addToFavorite = (product) => {
  product.isFavorite = !product.isFavorite
  console.log(product.isFavorite)
}


// ! tracking the selected color
const selectedColor = ref(props.product.defaultColor)

// computed property for the current color, later we will change the color only
const currentColor = computed(() => 
  props.product.colors.find(c => c.name === selectedColor.value)
)
</script>

<template>
  <div class="product">
    <div class="preview" @mouseenter="showArrowButton" @mouseleave="showArrowButton">
      <img :src="currentColor?.images[currentImageIndex]" alt="" />
      <!-- <img :src="product.image" :alt="product.title" /> -->

      <!-- arrow buttons here that will only show when hovering -->
      <button class="leftBtn" v-show="isShowingArrows" @click="previousImage">
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <button class="rightBtn" v-show="isShowingArrows" @click="nextImage">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
    <div class="content">
      <p>{{ product.status }}</p>
      <i
        :class="['bi', isHoverd || product.isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart']"
        @mouseenter="isHoverd = true"
        @mouseleave="isHoverd = false"
        @click="addToFavorite(product)"
      ></i>
      <h3>
        <RouterLink :to="{ name: 'Product', params: { slug: product.slug } }">{{
          product.title
        }}</RouterLink>
      </h3>
      <div class="disceiption">
        <p>{{ product.description.slice(0, 80) + '...' }}</p>
      </div>
      <div class="price">
        <h3>${{ product.price }}.00</h3>
      </div>
      <div class="available-colors">
        <div
          class="color"
          v-for="color in product.colors.map(color => color.name)"
          :key="color"
          :class="color"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product {
  /* border: 2px solid red; */
  overflow: hidden;
}

/* styling the img and its container */
.preview {
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-bottom: 1.5rem;
  position: relative;
}

.preview img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block; /* removes weird gaps */

  border-radius: 50% 50% 0 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  /* display: none; */
}

.black {
  background-color: #000;
}

.blush {
  background-color: burlywood;
}

.bianco {
  background-color: #fff;
}

.lin-platin {
  background-color: rgba(192, 192, 192, 0.796);
}

.silver {
  background-color: silver;
}

.available-colors {
  display: inline-flex;
  gap: 0.5rem;
}

.color {
  border-radius: 50%;
  /* padding: 1rem; */
  height: 20px;
  width: 20px;
  border: 2px solid var(--text-color);
}

.content {
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.3rem;

  position: relative;
}

.content p {
  color: var(--secondary-text);
  /* margin: 0.5rem 1rem; */
}

i {
  position: absolute;
  top: 15px;
  right: 5px;
  color: red;
  font-size: 2rem;
  cursor: pointer;

  transition: all 0.6s;
}

button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--brand-color);
  z-index: 9999;
  position: absolute;
}

.leftBtn {
  top: 50%;
  left: 10%;
  /* transform: translateY(-50%); */
}

.rightBtn {
  top: 50%; /* not bottom */
  right: 0;
  /* transform: translateY(-50%); */
}

h3 a {
  text-decoration: none;
  font-weight: 600;
  color: var(--text-color);
}
</style>

<!-- TODO: computed syncing for price times quantiy -->