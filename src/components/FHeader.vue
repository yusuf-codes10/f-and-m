<script setup>
import { productsStore } from '@/stores/productStore'

// we have to set the store
const myStore = productsStore()
console.log(myStore.shoes)

// import the cart store
import { cartStore } from '@/stores/cartStore'

const myCartStore = cartStore()
console.log(myCartStore)

// the ruter for the search
import { useRouter } from 'vue-router'

const route = useRouter()

// search functionality
import { ref } from 'vue'
const isSearchMode = ref(false)

const searchQuery = ref('')
const toggleSearch = () => {
  isSearchMode.value = !isSearchMode.value
}

// we are going to use the key events since the button toggles the search bar
const submitSearch = () => {
  if (!searchQuery.value) return
  // here we push to the router of search
  route.push({
    name: 'Search',
    query: { q: searchQuery.value },
  })
  // TODO: all we need to do is to render the result on the search vue
}
</script>

<template>
  <nav>
    <h2 class="logo">
      <RouterLink to="/"> F&M</RouterLink>
    </h2>
    <ul class="no-mobile">
      <li><RouterLink class="a" :to="{ name: 'Women' }">Women</RouterLink></li>
      <li><RouterLink class="a" :to="{ name: 'Men' }">Men</RouterLink></li>
      <li><RouterLink class="a" :to="{ name: 'Bags' }">Bags & Accesories</RouterLink></li>
      <!-- <li @click="myStore.toggleFavoriteFilter">Favorites</li> -->
      <li><RouterLink class="a" :to="{ name: 'Favorites' }">Favorites</RouterLink></li>
    </ul>
    <div class="btns">
      <div class="search-section">
        <button @click="toggleSearch" class="search-btn">
          <i class="fa-brands fa-sistrix"></i>
        </button>
        <!-- TODO we should probably use the slide effect instead -->
        <input
          v-show="isSearchMode"
          type="search"
          v-model="searchQuery"
          placeholder="Watcha looking for?"
          @keydown.enter="submitSearch"
        />
      </div>
      <div class="cart-section">
        <button class="cart-btn">
          <RouterLink class="a" :to="{ name: 'Cart' }">
            <i class="fa-brands fa-opencart"></i>
          </RouterLink>
        </button>
        <div class="cart-items-number">{{ myCartStore.cartItems.length }}</div>
      </div>
      <button class="hidden">Sign Up</button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  position: sticky;
  top: 0;
  z-index: 9999;
}

.logo {
  color: var(--brand-color);
  font-size: clamp(1.5rem, 4vw + 1rem, 2.3rem);
  font-weight: 900;
}

.logo a {
  transition: all 0.6s;
  text-decoration: none;
  color: var(--brand-color);
  font-family: inherit;
}

ul {
  list-style-type: none;
  display: inline-flex;
  gap: 1rem;
  font-size: 1.2rem;
}

.a {
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.6s;
}

.a:hover {
  color: var(--brand-color);
}

button {
  background-color: var(--brand-color);
  color: var(--bg-color);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 12px 16px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.6s;
}

button:hover {
  background-color: var(--brand-hover);
}

.search-btn,
.cart-btn {
  background: none;
  color: var(--black);
  transition: all 0.6s;
}

.search-btn:hover,
.cart-btn:hover {
  background: none;
  color: var(--brand-color);
}

.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.search-section {
  position: relative; /* Acts as the anchor for the input */
  display: flex;
  align-items: center;
}

input {
  position: absolute;
  right: 100%; /* Spawns to the left of the button */
  margin-right: 10px;
  padding: 10px 12px;
  z-index: 10;
  /* Optional: Add a simple fade-in */
  transition: opacity 0.3s ease;
}

.cart-section {
  position: relative;
}

.cart-items-number {
  position: absolute;
  top: 0;
  right: 0;

  background-color: var(--brand-color);
  color: var(--bg-color);
  font-size: 0.7rem;
  border-radius: 50%;
  padding: 2px;
}
</style>
