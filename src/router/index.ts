import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

console.log('process.env.VITE_APP_BASE_URL', import.meta.env.VITE_APP_BASE_URL);

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL || '/'), // Use the environment variable for production, fallback to '/' for development
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
