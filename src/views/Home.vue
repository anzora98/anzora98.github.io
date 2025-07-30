<script setup>
import { onMounted } from 'vue'
import TypeIt from 'typeit'

onMounted(() => {
  new TypeIt("#typing", {
    speed: 100,
    deleteSpeed: 50,
    loop: true
  })
    .type("I'm Sam")
    .pause(1500)
    .delete()
    .type("I'm a Frontend Developer")
    .pause(1500)
    .delete()
    .go();
});
</script>

<template>
  <section class="bg-secondary text-white d-flex align-items-center"
    style="min-height: calc(98vh - 100px); padding-top: 70px;">

    <div class="container py-5">
      <div class="row align-items-center justify-content-center">


        <!-- Texto -->
        <div class="col-md-6 order-2 order-md-1 text-center text-md-start">
          <h1 class="fw-bold display-4 text-primary">Welcome to my web page</h1>
          <h2 id="typing" class="fw-semibold my-4 text-info"></h2>
          <button class="btn btn-success mb-4 px-4 py-2 fw-bold">Download CV</button>

          <div class="d-flex justify-content-center justify-content-md-start gap-3">
            <a href="#"
              class="btn btn-outline-success rounded-circle d-flex align-items-center justify-content-center text-dark">
              <i class="bi bi-github"></i>
            </a>
            <a href="#"
              class="btn btn-outline-success rounded-circle d-flex align-items-center justify-content-center text-dark">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#"
              class="btn btn-outline-success rounded-circle d-flex align-items-center justify-content-center text-dark">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="#"
              class="btn btn-outline-success rounded-circle d-flex align-items-center justify-content-center text-dark">
              <i class="bi bi-youtube"></i>
            </a>
          </div>
        </div>
        <!-- Imagen primero en móviles, después en segundo plano en pantallas grandes -->
        <div class="col-md-6 order-1 order-md-2 d-flex justify-content-center  text-center mb-5">
          <img src="../../public/img/foto.jpg" alt="Profile" class="img-fluid  rounded-5" style="max-width: 300px;">
        </div>
      </div>
    </div>
  </section>
</template>
