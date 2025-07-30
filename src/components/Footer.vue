<!-- Footer.vue -->
<template>
  <footer class="bg-primary text-light py-3 text-center">
    <div class="container">
      <small>© {{ year }} Sam's Portfolio. All rights reserved.</small>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Año actual dinámico
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  font-size: 0.9rem;
}
</style>
