import './assets/css/main.css';

import { createApp } from "vue";
import { createStore } from "vuex";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { router } from "./router";
import { store } from "./store";
import App from "./app.vue";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = createApp(App);

app.use(createStore(store));
app.use(router);

app.mount("#app");
