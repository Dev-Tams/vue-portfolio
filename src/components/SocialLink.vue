<template>
        <li class="m-4">
          <a :href="url" target="_blank" :alt="alt" :aria-label="ariaLabel">
            {{ image }}
          </a>
        </li>
  </template>
  
  <script setup>
  defineProps({
    url: String,
    alt: String,
    image: String,
    ariaLabel: String
  })
  </script>
  