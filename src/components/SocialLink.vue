<template>
  <li class="mx-4 md:mx-6 mb-4 transition-all bg-gradient-to-r duration-300 hover:scale-105 footer glow" ref="footerSection">
    <a :href="url" target="_blank" :alt="alt" :aria-label="ariaLabel">
      <img :src="src" :alt="alt"/>
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