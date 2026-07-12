<script setup>
import { ref } from 'vue'

// Ahora puedes agregar todos los proyectos que quieras a esta lista
const projects = ref([
  {
    id: 1,
    title: 'Páginas Web',
    category: 'Desarrollo Web',
    image: '/img/img.png', // Tu imagen real
    text: 'Creación de sitios web estáticos y dinámicos enfocados en el rendimiento y la experiencia de usuario.',
    link: 'https://practicaflexbox363823.netlify.app/',
    repo: '#' // Opcional: enlace a GitHub
  },
  {
    id: 2,
    title: 'Aplicaciones Móviles',
    category: 'Desarrollo Móvil',
    image: '/img/movil.png', // Tu imagen real
    text: 'Interfaces adaptables y aplicaciones nativas con alto rendimiento para dispositivos Android e iOS.',
    link: '', // Sin link disponible
    repo: '#'
  },
  {
    id: 3,
    title: 'Sistema de Gestión',
    category: 'Software a Medida',
    // Imagen de prueba temporal para que veas cómo se acomoda la cuadrícula
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
    text: 'Panel administrativo completo con conexión a bases de datos y análisis en tiempo real.',
    link: '#',
    repo: '#'
  }
])
</script>

<template>
  <section class="portfolio-section">
    <div class="container">
      
      <!-- Encabezado de la sección -->
      <div class="text-center mb-5">
        <h2 class="section-title">Mis <span class="outline-text-sub">Proyectos</span></h2>
        <p class="section-subtitle">Una selección de mis mejores trabajos y herramientas.</p>
      </div>

      <!-- Cuadrícula de Proyectos (Grid) -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="col"
        >
          <!-- Tarjeta Individual -->
          <div class="project-card">
            
            <!-- Contenedor de la Imagen con efecto Zoom -->
            <div class="img-wrapper">
              <span class="category-badge">{{ project.category }}</span>
              <img :src="project.image" :alt="project.title" class="project-img" />
            </div>

            <!-- Contenido de la Tarjeta -->
            <div class="card-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.text }}</p>
              
              <!-- Botones de Acción -->
              <div class="action-buttons">
                <a 
                  v-if="project.link && project.link !== ''" 
                  :href="project.link" 
                  target="_blank" 
                  class="btn-primary-custom"
                >
                  Ver Proyecto <i class="bi bi-box-arrow-up-right ms-1"></i>
                </a>
                <button 
                  v-else 
                  class="btn-disabled-custom" 
                  disabled
                >
                  No disponible
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* --- FONDO GENERAL (IGUAL AL HOME Y SKILLS) --- */
.portfolio-section {
  background-color: #f4f5f7 !important;
  padding: 5rem 0;
  min-height: 100vh;
}

/* --- TÍTULOS --- */
.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: -1px;
}

.outline-text-sub {
  color: transparent;
  -webkit-text-stroke: 1.5px #1a1a1a;
}

.section-subtitle {
  color: #4b5563;
  font-size: 1.15rem;
  font-weight: 500;
}

/* --- TARJETAS DE PROYECTO --- */
.project-card {
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  overflow: hidden; /* Mantiene la imagen dentro de los bordes redondeados */
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: #1a1a1a;
}

/* --- IMAGEN Y ZOOM --- */
.img-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: #e5e7eb; /* Color de carga mientras aparece la imagen */
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.1); /* Efecto de zoom al pasar el mouse */
}

/* Insignia de categoría flotante */
.category-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 2;
  letter-spacing: 0.5px;
}

/* --- CONTENIDO --- */
.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Empuja los botones hacia abajo */
}

.project-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.project-desc {
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

/* --- BOTONES --- */
.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.btn-primary-custom {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 0.75rem 1rem;
  background-color: #1a1a1a;
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  border: 2px solid #1a1a1a;
}

.btn-primary-custom:hover {
  background-color: transparent;
  color: #1a1a1a;
}

.btn-disabled-custom {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #f4f5f7;
  color: #9ca3af;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: not-allowed;
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .section-title { font-size: 2.8rem; }
  .img-wrapper { height: 200px; }
}
</style>