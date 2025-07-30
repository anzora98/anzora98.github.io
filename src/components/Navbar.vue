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

  <nav class="navbar custom-navbar bg-primary">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand logo text-light">
        <a class="h3 mb-0">
          <img src="../../public/icono1.png" alt="" width="50px">
        </a>
      </router-link>

      <!-- Botón hamburguesa personalizado -->
      <button class="hamburger bg-transparent" @click="toggleMenu" :class="{ 'active': isMenuOpen }" aria-label="Menú">
        <span class="hamburger-line bg-light"></span>
        <span class="hamburger-line bg-light"></span>
        <span class="hamburger-line bg-light"></span>
      </button>

      <!-- Menú de navegación -->
      <div class="nav-links ms-auto bg-primary" :class="{ 'active': isMenuOpen }">
        <a class="nav-item">
          <router-link to="/" class="nav-link  text-light" @click="closeMenu">Home</router-link>
        </a>
        <a class="nav-item">
          <router-link to="/about" class="nav-link  text-light" @click="closeMenu">About</router-link>
        </a>
        <a class="nav-item">
          <router-link to="/projects" class="nav-link  text-light" @click="closeMenu">Projects</router-link>
        </a>
        <!-- <a class="nav-item">
          <router-link to="/service" class="nav-link text-light" @click="closeMenu">Service</router-link>
        </a> -->
        <a class="nav-item">
          <router-link to="/contact" class="nav-link  text-light" @click="closeMenu">Contact</router-link>
        </a>
      </div>
    </div>
  </nav>
</template>


<style lang="less" scoped>
.navbar,
.logo,
.nav-links {
  padding: 1.2rem 2.5rem;
  position: relative;
}



.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
  transition: all 0.3s ease;
}





a {
  text-decoration: none;
}

.nav-item:hover{
  border-bottom: 2px solid #bac8d9;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.hamburger-line {
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
  transform-origin: center;
}

.hamburger.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(7px, 9px);
}

.hamburger.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -8px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 5;
  }



  .nav-links.active {
    transform: translateX(0);
  }


}
</style>