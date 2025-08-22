import auth_routes from '@/zems/Auth/auth_routes';
import user_routes from '@/zems/User/user_routes';
import frontRoutes from '@zems/Front/frontRoutes';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...frontRoutes,
    ...user_routes,
    ...auth_routes
  ]
})
export default router;
