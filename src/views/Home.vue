<script setup>
import { onMounted } from 'vue'
import TypeIt from 'typeit'

onMounted(() => {
  new TypeIt("#typing", {
    speed: 100,
    deleteSpeed: 50,
    loop: true
  })
    .type("I'm a Frontend Developer")
    .pause(1500)
    .delete()
    .type("Building modern web experiences")
    .pause(1500)
    .delete()
    .type("Designing intuitive interfaces")
    .pause(1500)
    .delete()
    .go();
});
</script>

<template>
  <div class="hero-section">

    <!-- CONTENEDOR DE LA IMAGEN CON EL EFECTO DE DESVANECIMIENTO -->
    <div class="hero-image-wrapper">
      <!-- Ruta corregida para la carpeta public -->
      <img src="/img/foto.png" alt="Profile" class="hero-image">
    </div>

    <!-- TEXTOS Y BOTONES -->
    <div class="content-container">
      <div class="text-content">
        
        <h1 class="outline-text">Hello</h1>
        <h1 class="solid-text">I'm sam</h1>
        
        <div class="typing-container">
          <h2 id="typing" class="typing-text"></h2>
        </div>
        
        <div class="action-area">
          <button class="cta-button">Download CV</button>
          
          <!-- Botones de redes sociales restaurados -->
          <div class="social-links">
            <a href="#" class="social-icon" aria-label="GitHub"><i class="bi bi-github"></i></a>
            <a href="#" class="social-icon" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="social-icon" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
            <a href="#" class="social-icon" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Fondo claro global */
.hero-section {
  width: 100%;
  /* Restamos los ~90px que mide el Navbar para que la pantalla no tenga scroll */
  height: calc(100vh - 90px); 
  min-height: 600px;
  position: relative;
  overflow: hidden;
  background-color: #f4f5f7;
}

.hero-image-wrapper {
  position: absolute;
  /* Volvemos a poner top: 0 y height: 100% porque el Navbar ya hizo el espacio */
  top: 0; 
  right: 0;
  width: 60%; 
  height: 100%; 
  z-index: 1;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 40%, black 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 40%, black 100%);
}

.hero-image {
  width: 100%;
  height: 100%;
  /* cover asegura que la foto llene el espacio sin deformarse */
  object-fit: cover; 
  object-position: right top; 
  filter: grayscale(100%); 
}
/* --- CONTENIDO DE TEXTO --- */
.content-container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  z-index: 10;
}

.text-content {
  width: 100%;
  max-width: 800px;
}

.outline-text {
  font-size: 8rem; 
  font-weight: 800;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #1a1a1a; 
  margin: 0;
  line-height: 0.9;
  letter-spacing: -2px;
}

.solid-text {
  font-size: 8rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #1a1a1a; 
  margin: 0;
  line-height: 0.9;
  letter-spacing: -2px;
}

.typing-container {
  margin-top: 2rem;
  min-height: 2.5rem;
}

.typing-text {
  font-size: 1.5rem;
  color: #4b5563; 
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
}

/* --- BOTONES Y REDES --- */
.action-area {
  margin-top: 3rem;
  display: flex;
  flex-direction: column; /* Agrega esto para apilarlos hacia abajo */
  align-items: flex-start; /* Cambia 'center' a 'flex-start' para que se alineen a la izquierda */
  gap: 1.5rem; /* Ajusta el espacio entre el botón y las redes */
}
.cta-button {
  padding: 1rem 2.5rem;
  background-color: #1a1a1a;
  color: #ffffff;
  border: 2px solid #1a1a1a;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.cta-button:hover {
  background-color: transparent;
  color: #1a1a1a;
}

/* Estilos de las redes sociales añadidos nuevamente */
.social-links {
  display: flex;
  gap: 1.2rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  /* AQUÍ ESTÁ EL CAMBIO: 2px de grosor y color oscuro (#1a1a1a) */
  border: 1.2px solid #1a1a1a; 
  color: #1a1a1a;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: #1a1a1a;
  color: #ffffff;
  border-color: #1a1a1a;
  transform: translateY(-3px);
}

/* --- MÓVILES --- */
/* --- MÓVILES --- */
@media (max-width: 992px) {
  .hero-image-wrapper {
    width: 100%;
    -webkit-mask-image: linear-gradient(to top, transparent 0%, black 50%, black 100%);
    mask-image: linear-gradient(to top, transparent 0%, black 50%, black 100%);
    opacity: 0.3; 
  }

  .content-container {
    padding: 0 5%;
    align-items: center;
    text-align: center;
  }

  .outline-text, .solid-text { 
    font-size: 4rem; 
  }

  /* AQUÍ ESTÁ LA MAGIA PARA CENTRAR LOS BOTONES */
  .action-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; /* Esto sobrescribe el flex-start del escritorio y los centra */
    justify-content: center;
    gap: 1.5rem;
  }
}
</style>