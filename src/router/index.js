import frontRoutes from '@zems/Front/frontRoutes';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...frontRoutes
  ]
})
export default router;
