<!-- this is the product view page -->
<script setup>
// we have to import the route here
// ! there are two ways to access the url params
// ! 1- useing the route params
// import { useRoute } from 'vue-router'

// const route = useRoute()
// console.log(route.params.slug)

// now lets's pass it as an arg
import { defineProps, ref, computed } from 'vue'
const { slug } = defineProps({
  slug: {
    type: String,
    required: true,
  },
})
console.log(slug)

// importing the pinia store
import { productsStore } from '@/stores/productStore'
import AccordionComp from '@/components/AccordionComp.vue';

// we have to set the store
const myStore = productsStore()
console.log(myStore.shoes)

// const findTheProduct = () => myStore.shoes.find((shoe) => shoe.slug === slug)
// console.log(findTheProduct)

// * switch preview function
const currentImageIndex = ref(0)
const switchPreview = (img) => {
  currentImageIndex.value = img.id - 1
  // toggleActiveState()
  console.log(`the id is ${currentImageIndex.value}`)
}

// best approach is to merge the two array in a computed property
const product = computed(() => {
  const allProducts = [...myStore.bags, ...myStore.shoes]
  return allProducts.find(el => el.slug === slug)
})

// properties for img opacity
// const isActive = ref(false)

// const toggleActiveState = () => {
//   isActive.value = !isActive.value
// }
</script>
<template>
  <div class="details">
    <!-- <h1>Product details</h1>

    <p>Your product is: {{ findTheProduct().title }}</p>
    {{ $route.params.slug }} -->
    <div class="product-preview">
      <div class="images-section">
        <div class="img">
          <img :src="product.preview[currentImageIndex].url" alt="" />
        </div>
        <div class="img-gallery">
          <img
            @click="switchPreview(m)"
            v-for="m in product.preview"
            :key="m.id"
            :src="m.url"
            alt="m.id"
            :class="{ active: currentImageIndex === m.id - 1 }"
          />
        </div>
      </div>
      <div class="product-details">
        <p>{{ product.status }}</p>
        <h2 class="title">{{ product.title }}</h2>
        <p class="product-discription">{{ product.description }}</p>
        <h3>${{ product.price }}.00</h3>
        <button>Add to Cart</button>
        <AccordionComp :title="'Heel Height'" />
        <AccordionComp  :title="'Colors'"/>
        <AccordionComp :title="'Shoe size'"/>
      </div>
      <!-- TODO: have to build accorsion component for more details -->
    </div>
  </div>
</template>
<style scoped>
.details {
  min-height: calc(100vh - 80px);
  /* background-color: burlywood; */
}

.product-preview {
  width: 100%;
  /* background-color: tomato; */
  display: flex;
  gap: 0.5rem;
}

.img {
  flex: 0 0 80%; /* takes 80% of container height */
  overflow: hidden;
  width: 100%;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* or cover */
}

.images-section {
  width: 60%; /* because product-details is 30% */
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-details {
  /* background-color: green; */
  width: 40%;
  padding: 2rem;
  margin: 2rem 0;
}

.product-details h3 {
  font-size: clamp(1.1rem, 3vw + 0.5rem, 1.8rem);
}

.product-details button {
  background-color: var(--brand-color);
  cursor: pointer;
  padding: 1rem 1.8rem;
  color: var(--bg-color);
  font-size: 1.3rem;
  font-weight: 600;
  width: 100%;
  margin: 2rem 0;
  border: none;
  border-radius: 2rem;
}

.product-discription {
  margin: 0.25rem 0;
}

.img-gallery {
  flex: 0 0 20%;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  overflow-x: auto; /* horizontal scroll */
  overflow-y: hidden;
  align-items: center;
  margin: 0 auto;
}

.img-gallery img {
  height: 100%;
  aspect-ratio: 1 / 1; /* square thumbnails */
  object-fit: cover;
  flex-shrink: 0; /* prevents shrinking */

  /* make a little grayish overlay */
  opacity: 0.5;
  transition: 0.3s;
  cursor: pointer;
}

p {
  color: var(--secondary-text);
  /* margin: 0.5rem 1rem; */
}

/* we better bind classes instead */
.active {
  opacity: 1 !important;
  transition: 0.3s;
}
</style>

<!-- TODO optimization: use computed property instead of the called function -->
<!-- TODO: clickable image gallery for preview -->
<!-- TODO: more details for the product-->


<!-- TODO: right now this view handles only the women shoes I have to make it handle the other products -->