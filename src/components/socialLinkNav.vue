<template>
    <li class=" mb-4 transition-all bg-gradient-to-r duration-300 hover:scale-105 footer glow mx-4" ref="footerSection">
      <a :href="url" target="_blank" :alt="alt" :aria-label="ariaLabel">
        <img :src="src" :alt="alt" class=" w-10"/>
      </a>
    </li>
  </template>
  
  <script setup>
  defineProps({
    url: String,
    alt: String,
    src: String,
    ariaLabel: String
  })
  </script>