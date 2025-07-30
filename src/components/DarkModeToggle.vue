<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const savedMode = localStorage.getItem('darkMode')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = savedMode ? JSON.parse(savedMode) : systemPrefersDark
  updateDarkMode()
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  localStorage.setItem('darkMode', isDark.value)
  updateDarkMode()
}

const updateDarkMode = () => {
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<template>
  <button @click="toggleDarkMode" class="dark-mode-toggle"
    :aria-label="`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`">
    <span v-if="isDark">☀</span>
    <span v-else>🌒</span>
  </button>
</template>

<style>
.dark-mode-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  transition: all 0.2s ease;
  color: var(--dark);
  margin-left: 1rem;
}

.dark-mode-toggle:hover {
  transform: scale(1.1);
  color: var(--success);
}

.dark .dark-mode-toggle {
  color: var(--light);
}
</style>
