import { createRouter, createWebHistory } from "vue-router";
import home from '../views/home.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import basket from '../views/basket.vue'
import accessory from '../views/accessory.vue'
import paper from '../views/paper.vue'
import decoration from '../views/decoration.vue'
import tool from '../views/tool.vue'

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
    },
    {
        path: '/basket',
        name: 'basketPage',
        component: basket
    },
    {
        path: '/accessory',
        name: 'AccessoryPage',
        component: accessory
    },
    {
        path: '/paper',
        name: 'PaperPage',
        component: paper
    },
    {
        path: '/decoration',
        name: 'DecorationPage',
        component: decoration
    },
    {
        path: '/tool',
        name: 'ToolPage',
        component : tool
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router
