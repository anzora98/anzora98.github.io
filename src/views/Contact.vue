<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const sendEmail = () => {
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert('Por favor, completa todos los campos.')
    return
  }

  if (!isValidEmail(email.value)) {
    alert('Por favor, ingresa un correo electrónico válido.')
    return
  }

  const subject = encodeURIComponent(`Nuevo mensaje de ${name.value}`)
  const body = encodeURIComponent(`${message.value}\n\nCorreo de contacto: ${email.value}`)

  window.location.href = `mailto:samuelanzora98@gmail.com?subject=${subject}&body=${body}`
}
</script>

<template>
  <section class="container-fluid min-vh-100 d-flex align-items-center bg-secondary py-5 px-3">
    <div class="container">
      <div class="row justify-content-center align-items-center g-5">

        <!-- Información -->
        <div class="col-lg-6 text-center text-lg-start">
          <h1 class="display-4 fw-bold mb-4">
            ¿Tienes preguntas? <br />
            <span class="text-primary">¡Hablemos!</span>
          </h1>
          <p class="lead text-muted">
            Estamos disponibles para ayudarte. Llena el formulario y te contactaremos lo antes posible, o
            escríbenos por WhatsApp.
          </p>
        </div>

        <!-- Formulario -->
        <div class="col-lg-6">
          <div class="card shadow border-0 bg-primary text-light">
            <div class="card-body p-4">
              <h5 class="card-title mb-4 text-center">Formulario de Contacto</h5>
              <form @submit.prevent="sendEmail" class="needs-validation" novalidate>
                <div class="mb-3">
                  <label class="form-label">Nombre</label>
                  <input v-model="name" type="text" class="form-control bg-secondary" placeholder="Tu nombre" required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Correo electrónico</label>
                  <input v-model="email" type="email" class="form-control bg-secondary" placeholder="Tu correo" required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Mensaje</label>
                  <textarea v-model="message" class="form-control bg-secondary" rows="5" placeholder="Tu mensaje"
                    required></textarea>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-outline-secondary">Enviar correo</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- WhatsApp -->
    <a href="https://wa.me/50371933516" target="_blank" class="position-fixed bottom-0 end-0 m-4 text-success fs-2"
      aria-label="WhatsApp">
      <i class="bi bi-whatsapp"></i>
    </a>
  </section>
</template>
