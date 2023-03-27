import "./assets/css/main.css";

import { createApp } from "./../node_modules/vue/dist/vue.esm-bundler.js";
import { createPinia } from "./../node_modules/pinia";

import gsap from './../node_modules/gsap';
import { ScrollTrigger } from './../node_modules/gsap/ScrollTrigger';
import { ScrollToPlugin } from './../node_modules/gsap/ScrollToPlugin';

import router from "./router";
import App from "./app.vue";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
