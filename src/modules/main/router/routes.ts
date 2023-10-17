// Composables
import { CustomRouteRecordRaw } from 'vue-router'

const routes: CustomRouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
    name: 'HomeView',
    meta: {
      title: 'Home',
      requiresAuth: false,
    },
  },
  {
    path: '/vee',
    component: () => import('../views/VeeView.vue'),
    name: 'VeeView',
    meta: {
      title: 'Vee Validate',
      requiresAuth: false,
    }
},
  {
    path: '/vuelidate',
    component: () => import('../views/VuelidateView.vue'),
    name: 'VuelidateView',
    meta: {
      title: 'VuelidateView',
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue'),
    name: 'AboutView',
    meta: {
      title: 'Sobre',
      requiresAuth: false,
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 - Página não encontrada',
      requiresAuth: false,
    },
  },
]

export default routes
