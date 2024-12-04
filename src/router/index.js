import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/wind',
    name: 'Wind',
    component: () => import('@/pages/wind/index.vue'),
    meta: {
      title: '风场'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
