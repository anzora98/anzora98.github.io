<!-- Footer.vue -->
<template>
  <footer class="custom-footer text-light py-3 text-center mt-auto">
    <div class="container">
      <small>© {{ year }} Sam's Portfolio. All rights reserved.</small>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.custom-footer {
  /* El MISMO negro profundo del Navbar */
  background-color: #050505; 
  font-size: 0.9rem;
  /* El mismo borde sutil, pero ahora en la parte de arriba */
  border-top: 1px solid rgba(255, 255, 255, 0.05); 
}
</style>