<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'TypeScript', icon: 'bi-filetype-tsx' },
  { name: 'JavaScript', icon: 'bi-filetype-js' },
  { name: 'React', icon: 'bi-filetype-jsx' },
  { name: 'Vue', icon: 'bi-filetype-js' },
  { name: 'HTML / CSS', icon: 'bi-code-slash' },
  { name: 'Node.js', icon: 'bi-terminal-fill' },
  { name: 'SQL Server', icon: 'bi-database-fill-gear' },
  { name: 'MySQL / Oracle', icon: 'bi-database-fill' },
  { name: 'Jet Compose', icon: 'bi-android2' },
  { name: 'C++', icon: 'bi-braces' },
  { name: 'Java', icon: 'bi-filetype-java' },
  { name: 'Office', icon: 'bi-microsoft' },
  { name: 'Linux', icon: 'bi-ubuntu' },
  { name: 'Server / Deploy', icon: 'bi-hdd-stack' }
])
</script>

<template>
  <section class="skills-section">
    <div class="container text-center">
      
      <h2 class="section-title">Mi Stack <span class="outline-text-sub">Tecnológico</span></h2>
      <p class="section-subtitle">Herramientas y tecnologías que uso para construir cosas increíbles.</p>

      <!-- Grid de Bootstrap -->
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 mt-4">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="col"
        >
          <!-- Tarjeta de la habilidad -->
          <div class="skill-card">
            <div class="icon-wrapper">
              <i class="bi" :class="skill.icon"></i>
            </div>
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
/* --- FONDO GENERAL (IGUAL AL HOME Y CONTACTO) --- */
.skills-section {
  background-color: #f4f5f7 !important; 
  /* Patrón de puntos adaptado a la versión clara */
  background-image: radial-gradient(#d1d5db 1.5px, transparent 1.5px);
  background-size: 28px 28px;
  
  padding: 5rem 0;
  min-height: 100vh;
}

/* --- TÍTULOS CONSISTENTES --- */
.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #1a1a1a; 
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: -1px;
}

/* El mismo efecto de texto transparente con borde del Home */
.outline-text-sub {
  color: transparent;
  -webkit-text-stroke: 1.5px #1a1a1a; 
}

.section-subtitle {
  color: #4b5563; /* Gris medio igual al de Contacto */
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 3rem;
}

/* --- TARJETAS PROFESIONALES --- */
.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 4px; /* Bordes menos redondeados para igualar los botones */
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  cursor: default;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: #f4f5f7;
  transition: all 0.3s ease;
}

.icon-wrapper i {
  font-size: 2rem;
  color: #1a1a1a; 
  transition: all 0.3s ease;
}

.skill-name {
  font-weight: 700;
  color: #1a1a1a;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* --- EFECTO HOVER ESTILO "HOME" --- */
.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  border-color: #1a1a1a; /* El borde se pone negro, igual que tus botones */
}

.skill-card:hover .icon-wrapper {
  background-color: #1a1a1a; /* Fondo se invierte a negro */
}

.skill-card:hover .icon-wrapper i {
  color: #ffffff; /* Icono se vuelve blanco */
  transform: scale(1.1);
}

/* --- RESPONSIVE --- */
@media (max-width: 992px) {
  .section-title { font-size: 2.5rem; }
}
</style>