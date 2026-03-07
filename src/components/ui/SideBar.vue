<script setup>
</script>

<template>
    <div class="sidebar">
        this is the side bar
    </div>
</template>
<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 280px;
  height: 100vh;

  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.sidebar.open {
  transform: translateX(0);
}
</style>