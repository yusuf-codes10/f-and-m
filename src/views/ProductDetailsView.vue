<!-- this is the product view page -->
<script setup>
// we have to import the route here
// ! there are two ways to access the url params
// ! 1- useing the route params
// import { useRoute } from 'vue-router'

// const route = useRoute()
// console.log(route.params.slug)

// now lets's pass it as an arg
import { defineProps, ref, computed, watch } from 'vue'
const { slug } = defineProps({
  slug: {
    type: String,
    required: true,
  },
})
console.log(slug)

// importing the pinia store
import { productsStore } from '@/stores/productStore'
import AccordionComp from '@/components/AccordionComp.vue'

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
  return allProducts.find((el) => el.slug === slug)
})

// properties for img opacity
// const isActive = ref(false)

// const toggleActiveState = () => {
//   isActive.value = !isActive.value
// }

// * handle the quantity vs stock
const quantity = ref(1)
const showError = ref(false)
// const computedQuantity = computed(() => {
//   if (quantity.value > product.value.stock) console.log('out of stock');
//   return 1}
// )
watch(quantity, (newVal) => {
  if (!product.value) return

  const stock = product.value.stock

  if (newVal > stock) {
    console.log('out of stock')
    showError.value = true
  } else {
    showError.value = false
  }
})

// we need current color
// ! tracking the selected color
const selectedColor = ref(product.value.defaultColor)

// computed property for the current color, later we will change the color only
const currentColor = computed(() =>
  product.value.colors.find(c => c.name === selectedColor.value)
)
</script>
<template>
  <div class="details">
    <!-- <h1>Product details</h1>

    <p>Your product is: {{ findTheProduct().title }}</p>
    {{ $route.params.slug }} -->
    <div class="product-preview">
      <div class="images-section">
        <div class="img">
          <img :src="currentColor?.images[currentImageIndex]" alt="" />
        </div>
        <div class="img-gallery">
          <img
            @click="switchPreview(m)"
            v-for="m in currentColor.images"
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
        <AccordionComp :title="'Quantity'">
          <!-- TODO: we better use computed property to not get out of stock -->
          <input
            type="number"
            min="1"
            :max="product.stock + 1"
            v-model="quantity"
            :class="{ errorInput: showError }"
          />
          <p v-if="showError" class="errorPopup">Only {{ product.stock }} available!!!</p>
        </AccordionComp>
        <AccordionComp :title="'Colors'" v-if="product?.availableColor?.length > 1">
          <!-- we going to use an array of images here -->
          <div class="img-gallery-colors">
            <img
              v-for="m in product.coloredPreview"
              :key="m.id"
              :src="m.url"
              alt="m.id"
            />
          </div>
        </AccordionComp>
        <AccordionComp :title="'Shoe size'" v-if="product.category==='women-shoes'" />
      </div>
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

input {
  margin-left: 10%;
  padding: 0.5rem 1rem;
  outline: var(--brand-color);
  width: 80%; /* same width as hr */
  font-size: 1.3rem;
}

/* * minimal styling for the popup */
.errorInput {
  border: 2px solid red;
  background-color: #ffe6e6;
}

.errorPopup {
  margin-left: 10%;
  margin-top: 0.5rem;
  color: red;
  font-weight: 600;
}

.img-gallery-colors {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-left: 10%;
}

.img-gallery-colors  img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  cursor: pointer;
}
</style>