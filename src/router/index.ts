import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import AppLayout from '@/views/AppLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AppLayout',
    component: AppLayout,
  },

  // Redirects all routes to '/' as there is only one route for the moment
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    redirect: () => '/',
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
