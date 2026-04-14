import { createRouter, createWebHashHistory } from 'vue-router'
import UnitDetail from '../components/UnitDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/unit/:id',
      component: UnitDetail
    }
  ],
})

export default router
