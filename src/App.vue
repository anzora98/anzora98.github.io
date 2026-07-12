<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
    <!-- Quitamos el <div> extra. Vue 3 soporta múltiples elementos raíz sin problemas -->
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
</template>
<style>
/* --- REGLAS GLOBALES PARA ARREGLAR MÓVILES --- */

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #f4f5f7; 
  
  /* 1. Bloqueamos el scroll horizontal para arreglar el menú */
  overflow-x: hidden; 
  
  /* 2. FORZAMOS el scroll vertical explícitamente */
  overflow-y: auto; 
  
  /* 3. ESTA ES LA MAGIA: Devuelve el control de un solo dedo y el deslizamiento suave */
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y; 
}

/* Flexbox para empujar el footer hacia abajo */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}
</style>