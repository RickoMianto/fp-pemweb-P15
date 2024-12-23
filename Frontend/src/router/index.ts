import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/news', name: 'News', component: News },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
