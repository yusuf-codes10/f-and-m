<script setup>
import images from '@/data/pub-images.js'
</script>

<template>
  <div class="publish">
    <div class="images-section">
      <div class="img-container" v-for="img in images" :key="img.id">
        <img :src="img.url" alt="" />
      </div>
    </div>
    <div class="cta-section">
      <p>New arrivals</p>
      <h1>LATEST CREATIONS</h1>
      <div class="discover-btn">
        <button>DISCOVER</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.publish {
  height: 100vh;
  padding: 3rem;
}

.cta-section {
  padding: 2rem 4rem;
  /* border: 2px solid red; */
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3rem 0;
}

.cta-section h1 {
  font-size: clamp(1.3rem, 4vw + 1rem, 2.8rem);
  font-weight: 900;
  color: var(--brand-color);
  text-align: center;
}

.cta-section p {
  text-align: center;
  color: var(--brand-color);
}

.discover-btn {
  display: flex;
  justify-content: center;
}
.discover-btn button {
  background-color: transparent;
  border-color: var(--bg-color);
  border: 2px solid;
  padding: 12px 16px;
  cursor: pointer;
  color: var(--brand-color);
  font-size: 1.2rem;
  font-weight: 600;
  transform: all 0.6s;
}

.discover-btn button:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

/* styling the images */
.images-section {
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
}

@media (min-width: 768px) {
  .images-section {
    flex-direction: row;
  justify-content: space-evenly;

  }
}

.img-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  /* margin: 1.5rem; */
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
