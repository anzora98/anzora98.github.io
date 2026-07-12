<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
    <div>
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>


<style>
/* Agrégalo en tu App.vue en la sección de <style> */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Obliga a la página a medir al menos el 100% de la pantalla */
}

html, body {
  /* Bloquea el efecto elástico y no te deja jalar más allá del límite */
  overscroll-behavior: none; 
}

</style>