import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '@/components/PortfolioGrid.vue';

const routes = [
  {
    path: "/",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/info",
    name: "Info",
    component: () => import('@/components/InfoPage.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});