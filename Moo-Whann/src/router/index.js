import { createRouter, createWebHistory } from "vue-router";
import home from '../views/home.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'


const routes = [
    {
        path: '/',
        name: '',
        component: home
    },
    {
        path: '/login',
        name: 'loginView',
        component: login
    },
    {
        path: '/register',
        name: 'registerPage',
        component: register
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router
