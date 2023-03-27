import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import router from "@/router";
import App from "@/App.vue";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
