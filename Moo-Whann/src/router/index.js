import { createRouter, createWebHistory } from "vue-router";
import navbar from '../components/navbar.vue'
import login from '../views/login.vue'


const routes = [
    {
        path: '/',
        name: '',
        component: navbar
    },
    {
        path: '/login',
        name: 'loginView',
        component: login
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router
