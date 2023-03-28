import { createRouter, createWebHistory } from "vue-router";
import Portfolio from "@/components/PortfolioGrid.vue";
import Info from '@/components/InfoPage.vue';

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
      component: Info,
    },
  ],
});


export default router;
