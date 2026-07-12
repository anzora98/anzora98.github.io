<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar custom-navbar">
    <div class="container d-flex justify-content-between align-items-center w-100">
      
      <!-- Logo: Símbolo 'A' Estilizado en SVG -->
      <router-link to="/" class="navbar-brand logo" aria-label="Inicio">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-symbol">
          <!-- Pata izquierda -->
          <path d="M20 6 L8 34" stroke="#e2e8f0" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Pata derecha (Acento Cian) -->
          <path d="M20 6 L32 34" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Línea central cruzada -->
          <path d="M12 24 L28 24" stroke="#e2e8f0" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
          <!-- Punto superior para toque tech -->
          <circle cx="20" cy="6" r="3" fill="#38bdf8" />
        </svg>
      </router-link>

      <!-- Botón hamburguesa -->
      <button class="hamburger bg-transparent" @click="toggleMenu" :class="{ 'active': isMenuOpen }" aria-label="Menú">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Menú de navegación -->
      <div class="nav-links ms-auto" :class="{ 'active': isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
        <router-link to="/about" class="nav-link" @click="closeMenu">About</router-link>
        <router-link to="/projects" class="nav-link" @click="closeMenu">Portfolio</router-link>
        <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
      </div>
      
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  /* --- LA SOLUCIÓN HARAGANA PERO PERFECTA --- */
  /* sticky hace que ocupe espacio (no tapa el contenido) pero se quede pegado al hacer scroll */
  position: sticky; 
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 5%;
  
  /* --- ESTILO DE COLOR: Negro Profundo --- */
  background-color: rgba(5, 5, 5, 0.85); 
  backdrop-filter: blur(12px); 
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05); 
  
  /* Subimos el z-index para asegurar que siempre flote sobre tus proyectos o vistas */
  z-index: 1000; 
}

/* Animación sutil para el logo al pasar el mouse */
.logo-symbol {
  transition: transform 0.3s ease;
}
.logo-symbol:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #38bdf8; 
  transform: translateY(-2px);
}

.router-link-active {
  color: #38bdf8;
  font-weight: 700;
}

/* --- Botón Hamburguesa --- */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1110;
}

.hamburger-line {
  width: 2rem;
  height: 0.15rem;
  background-color: #38bdf8;
  border-radius: 10px;
  transition: all 0.3s ease;
  transform-origin: center;
}

/* --- Responsive --- */
@media (max-width: 992px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: #050505; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    transform: translateX(100%);
    transition: transform 0.4s ease;
  }

  .nav-links.active {
    transform: translateX(0);
  }

  .nav-link {
    font-size: 1.5rem;
  }

  .hamburger.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .hamburger.active .hamburger-line:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
}
</style>