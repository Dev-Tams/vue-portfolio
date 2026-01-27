<template>
    <p class="AboutMe my-8 text-sm/7 
    
     text-pretty
     
      md:text-base md:leading-8
      lg:text-lg lg:leading-9

      text-white/80
      selection:bg-emerald-400/30 selection:text-white
    ">{{ text }}</p>
  </template>
  
  <script setup>
  defineProps({
    text: String
  })
  </script>
  