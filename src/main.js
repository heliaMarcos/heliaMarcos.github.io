import './assets/styles/fonts.css';
import './assets/styles/main.css';
import './assets/styles/tailwind.css';

import { createApp } from '../../node_modules/vue/';
import { createRouter, createWebHistory } from 'vue-router';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { routes } from './routes.js';

import App from './app.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
});

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = createApp(App);
app.use(router);

app.mount('#app');
