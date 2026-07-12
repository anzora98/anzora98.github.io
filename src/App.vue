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

/* --- REGLAS GLOBALES PARA ARREGLAR MÓVILES --- */

html, body {
  margin: 0;
  padding: 0;
  
  /* 1. ESTO ARREGLA EL MENÚ: Corta cualquier elemento que sobresalga a los lados */
  overflow-x: hidden; 
  
  /* 2. ESTO EVITA EL HUECO BLANCO: Le da a todo el fondo tu color claro oficial */
  background-color: #f4f5f7; 
}

#app {
  /* 3. ESTO ARREGLA EL FOOTER: Obliga a tu página a usar Flexbox para empujar el footer */
  display: flex;
  flex-direction: column;
  
  /* 4. Altura dinámica: 'dvh' calcula exactamente el alto del celular incluyendo barras de navegación */
  min-height: 100vh; /* Respaldo para navegadores viejos */
  min-height: 100dvh; 
  
  /* Por seguridad, también bloqueamos el desbordamiento horizontal aquí */
  overflow-x: hidden;
}

</style>