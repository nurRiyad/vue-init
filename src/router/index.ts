import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: () => import('@/views/NotFound.vue') }
  ]
});

export default router;
