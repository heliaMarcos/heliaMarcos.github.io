import { createApp } from 'vue'

import './assets/css/main.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import App from './App.vue'
import router from '@/router'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const app = createApp(App)

app.use(router)

app.mount('#app')
