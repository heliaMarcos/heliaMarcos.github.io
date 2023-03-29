import { createRouter, createWebHistory } from "vue-router";
import Portfolio from "@/components/PortfolioGrid.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
});


export default router;
