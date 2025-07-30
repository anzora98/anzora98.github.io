<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const slides = [
  {
    image: 'img/img.png',
    title: 'Paginas Web',
    text: 'Estaticas y dinamicas',
    link: 'https://practicaflexbox363823.netlify.app/'
  },
  {
    image: 'img/movil.png',
    title: 'Aplicasiones Moviles',
    text: '',
    link: '/'
  },
  // {
  //   image: 'https://placehold.co/1920x1080?text=Slide+3',
  //   title: 'Third slide',
  //   text: 'Description for the third slide',
  //   link: 'https://practicaflexbox363823.netlify.app/'
  // },
]

const currentIndex = ref(0)
let intervalId = null

const currentSlide = computed(() => slides[currentIndex.value])
const isValidLink = computed(() => currentSlide.value.link && currentSlide.value.link !== '/')

const nextSlide = () => currentIndex.value = (currentIndex.value + 1) % slides.length
const prevSlide = () => currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="carousel slide w-100" role="region"  style="min-height: calc(60vh - 100px);">
    <!-- Slides -->
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-item"
        :class="{ active: index === currentIndex }"
      >
        <!-- Mobile -->
        <div class="w-100 d-block d-lg-none ratio ratio-16x9">
          <img :src="slide.image" class="w-100 h-100 object-fit-cover" :alt="slide.title" />
        </div>

        <!-- Desktop -->
        <div class="d-none d-lg-block w-100 vh-100">
          <img :src="slide.image" class="w-100 h-100 object-fit-cover" :alt="slide.title" />
        </div>

        <!-- Caption -->
        <div class="carousel-caption d-block text-white bg-primary bg-opacity-75 rounded p-2">
          <h5>{{ slide.title }}</h5>
          <p>{{ slide.text }}</p>
          <a
            v-if="slide.link && slide.link !== '/'"
            :href="slide.link"
            target="_blank"
            class="btn btn-outline-light"
          >
            Ver
          </a>
          <button
            v-else
            class="btn btn-secondary"
            disabled
          >
            No disponible
          </button>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <button class="carousel-control-prev" @click="prevSlide" type="button">
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" @click="nextSlide" type="button">
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
</template>
