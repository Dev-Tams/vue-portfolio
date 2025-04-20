import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800, // animation duration in ms
  easing: 'ease-in-out', // smooth easing
  once: true, // whether animation should happen only once - while scrolling down
});

createApp(App).mount('#app')