<script setup>
import { ref, onMounted } from 'vue'

const videoRef = ref(null)
const isSound = ref(false)
const isPlaying = ref(true)

const isDesktop = ref(false)

const toggleVideo = () => {
  if (videoRef.value.paused) {
    videoRef.value.play()
    isPlaying.value = true
  } else {
    videoRef.value.pause()
    isPlaying.value = false
  }
}

const toggleSound = () => {
  videoRef.value.muted = !videoRef.value.muted
  isSound.value = !videoRef.value.muted
}

onMounted(() => {
  if (window.innerWidth >= 655) {
    isDesktop.value = true
  }
})
</script>

<template>
  <div class="vid-container">
    <video v-if="isDesktop" ref="videoRef" autoplay muted loop playsinline>
      <source src="/videos/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="hero-section">
      <div class="btn-section no-mobile">
        <button @click="toggleVideo">
          <i :class="isPlaying ? 'bi bi-pause' : 'bi bi-play'"></i>
          <!-- <i class="bi bi-pause"></i> -->
        </button>

        <button @click="toggleSound">
          <i v-bind:class="isSound ? 'bi bi-volume-mute' : 'bi bi-volume-up'"></i>
          <!-- <i class="bi bi-volume-up"></i> -->
        </button>
      </div>
      <div class="cta-section">
        <p>Elegance in Motion</p>
        <h1 class="cta-title">CASSIA COLLECTION</h1>
        <div class="discover-btn">
          <button>DISCOVER</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vid-container {
  height: calc(100vh - 81px);
  width: 100%;
  position: relative;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* like background-size: cover */
}

.hero-section {
  background-color: transparent;
  display: flex;
  gap: 20%;
  /* justify-content: center; */
  align-items: center;
  /* justify-content: space-around; */
  /* padding: 2rem 4rem; */
  position: absolute;
  bottom: 0;
  width: 100%;
}

.btn-section {
  align-self: flex-end;
  justify-self: flex-start;
  padding: 1rem 2rem;
}

.cta-section {
  padding: 2rem 4rem;
  /* border: 2px solid red; */
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

/* paly && pause btn */
button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--brand-color);
}
</style>
