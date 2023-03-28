import { createRouter, createWebHistory } from "vue-router";
import navbar from '../components/navbar'


const routes = [
    {
        path: '/',
        name: '',
        component: navbar
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
