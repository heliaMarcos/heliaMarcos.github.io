import { createRouter, createWebHistory } from "vue-router";
import Portfolio from './components/PortfolioGrid.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Portfolio",
      component: Portfolio,
    },
    {
      path: "/info",
      name: "Info",
      component: () => import(/* webpackChunkName: "Info" */ "./components/InfoPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});