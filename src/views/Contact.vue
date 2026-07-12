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
  <section class="contact-section py-5">
    <div class="container h-100">
      <div class="row justify-content-center align-items-center g-5 min-vh-100">

        <!-- Información -->
        <div class="col-lg-5 text-center text-lg-start">
          <h1 class="contact-title outline-text-sub">
            ¿Tienes preguntas? <br />
            <span class="solid-text-sub">¡Hablemos!</span>
          </h1>
          <p class="contact-subtitle">
            Estoy disponible para nuevos proyectos y oportunidades. Llena el formulario o escríbeme directamente por WhatsApp y te responderé lo antes posible.
          </p>
        </div>

        <!-- Formulario -->
        <div class="col-lg-6 offset-lg-1">
          <div class="contact-card">
            <h5 class="card-heading">Envíame un mensaje</h5>
            
            <form @submit.prevent="sendEmail" novalidate>
              <div class="mb-4">
                <label class="custom-label">Nombre</label>
                <input v-model="name" type="text" class="custom-input" placeholder="Tu nombre" required />
              </div>
              
              <div class="mb-4">
                <label class="custom-label">Correo electrónico</label>
                <input v-model="email" type="email" class="custom-input" placeholder="tu@correo.com" required />
              </div>
              
              <div class="mb-5">
                <label class="custom-label">Mensaje</label>
                <textarea v-model="message" class="custom-input" rows="5" placeholder="¿En qué te puedo ayudar?" required></textarea>
              </div>
              
              <button type="submit" class="cta-button w-100">
                Enviar mensaje <i class="bi bi-send ms-2"></i>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- AQUÍ ESTÁ LA MAGIA: Vue teletransportará este botón fuera de tu componente -->
  <Teleport to="body">
    <a href="https://wa.me/50371933516" target="_blank" class="whatsapp-fab" aria-label="WhatsApp">
      <i class="bi bi-whatsapp"></i>
    </a>
  </Teleport>
</template>

<style scoped>
/* --- FONDO GENERAL --- */
.contact-section {
  background-color: #f4f5f7; 
  color: #1a1a1a;
  position: relative;
}

/* --- TEXTOS --- */
.contact-title {
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 1.5rem;
}

.outline-text-sub {
  font-weight: 800;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1.5px #1a1a1a; 
  letter-spacing: -1px;
}

.solid-text-sub {
  font-weight: 900;
  color: #1a1a1a; 
  -webkit-text-stroke: 0; 
}

.contact-subtitle {
  color: #4b5563; 
  font-size: 1.15rem;
  line-height: 1.6;
  font-weight: 500;
}

/* --- TARJETA DEL FORMULARIO --- */
.contact-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); 
  border: 1px solid #e5e7eb;
}

.card-heading {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: -0.5px;
}

/* --- INPUTS PERSONALIZADOS --- */
.custom-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.custom-input {
  width: 100%;
  background-color: #f4f5f7;
  border: 1px solid #d1d5db;
  color: #1a1a1a;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.custom-input::placeholder {
  color: #9ca3af;
}

.custom-input:focus {
  outline: none;
  border-color: #1a1a1a;
  background-color: #ffffff;
  box-shadow: 0 0 0 2px rgba(26, 26, 26, 0.1);
}

/* --- BOTÓN DE ENVIAR --- */
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
  text-transform: uppercase;
}

.cta-button:hover {
  background-color: transparent;
  color: #1a1a1a;
}

/* --- WHATSAPP FLOTANTE --- */
.whatsapp-fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #25d366; 
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;
  z-index: 999999; /* Extra seguridad */
  animation: pulse 2s infinite;
}

.whatsapp-fab:hover {
  transform: scale(1.1);
  color: white;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

/* --- RESPONSIVE --- */
@media (max-width: 992px) {
  .contact-title { font-size: 3rem; }
  .contact-card { padding: 1.5rem; }
  
  .whatsapp-fab {
    /* Mantenemos un buen espacio inferior para que Safari/Chrome móvil no lo tapen */
    bottom: 5rem; 
    right: 1.5rem;
    width: 55px;
    height: 55px;
    font-size: 1.5rem;
  }
}
</style>