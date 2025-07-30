import { createRouter, createWebHashHistory } from 'vue-router'


import Home from './views/Home.vue'
import About from './views/About.vue'
import Portfolio from './views/Projects.vue'
import Service from './views/Service.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Portfolio },
  { path: '/service', component: Service },
  { path: '/contact', component: Contact },
]

const router = createRouter({
history: createWebHashHistory(),
  routes,
})

export default router
