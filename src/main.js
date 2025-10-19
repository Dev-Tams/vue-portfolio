import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import AOS from 'aos'
import 'aos/dist/aos.css'

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

createApp(App).mount('#app')

AOS.init({
  duration: 800, // animation duration in ms
  easing: 'ease-in-out', // smooth easing
  once: true, // whether animation should happen only once - while scrolling down
});
