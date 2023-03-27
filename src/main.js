import "./assets/css/main.css";

import { createApp } from "./../node_modules/vue/dist/vue.esm-bundler.js";
import { createPinia } from "pinia";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import router from "./router";
import App from "./app.vue";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
