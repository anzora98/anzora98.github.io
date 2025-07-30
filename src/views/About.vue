

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'TypeScript', icon: 'bi-filetype-tsx', bg: 'bg-primary' },
  { name: 'JavaScript', icon: 'bi-filetype-js', bg: 'bg-warning' },
  { name: 'React', icon: 'bi bi-filetype-jsx', bg: 'bg-info' },
  { name: 'Vue', icon: 'bi bi-filetype-js', bg: 'bg-success' },
  { name: 'Html/Css', icon: 'bi bi-code-slash', bg: 'bg-info' },
  { name: 'Node.js', icon: 'bi-terminal-fill', bg: 'bg-success' },
  { name: 'SQL Server', icon: 'bi-database-fill-gear', bg: 'bg-success' },
  { name: 'MySQL/Oracle DB', icon: 'bi-database-fill', bg: 'bg-primary' },
  { name: 'Jetpack Compose', icon: 'bi bi-android2', bg: 'bg-danger' },
  { name: 'C++', icon: 'bi bi-braces', bg: 'bg-dark' },
  { name: 'Java', icon: 'bi bi-filetype-java', bg: 'bg-primary' },
  { name: 'Office', icon: 'bi bi-microsoft', bg: 'bg-info' },
  { name: 'Linux', icon: 'bi bi-tux', bg: 'bg-info' },
  { name: 'Server & Deployment', icon: 'bi bi-hdd-stack', bg: 'bg-purple' }
])
</script>


<template>
  <section class="bg-secondary text-primary py-3" style="min-height: calc(98vh - 100px); padding-top: 70px;">
    <div class="container text-center">
      <h2 class="display-5 fw-bold mb-4">Skill Set</h2>

      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="col d-flex flex-column align-items-center justify-content-center"
        >
          <div
            class="rounded-3 d-flex align-items-center justify-content-center mb-2"
            :class="skill.bg"
            style="width: 70px; height: 70px;"
          >
            <i :class="skill.icon" class="fs-3 text-white"></i>
          </div>
          <small class="text-primary-50">{{ skill.name }}</small>
        </div>
      </div>
    </div>
  </section>
</template>
