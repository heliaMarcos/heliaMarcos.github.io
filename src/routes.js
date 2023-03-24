import NotFound from '@/pages/not-found.vue';
import Portfolio from '@/components/Portfolio.vue';
import Info from '@/components/Info.vue';

export const routes = [
  { path: '/', component: Portfolio },
  { path: '/:path(.*)', component: NotFound },
  { path: '/info', component: Info },
];

export default routes;
