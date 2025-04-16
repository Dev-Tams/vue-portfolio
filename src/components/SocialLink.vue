<template>
    <div class="socialLink">
      <ul>
        <li>
          <a :href="url" target="_blank" :alt="alt" :aria-label="ariaLabel">
            {{ image }}
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  defineProps({
    url: String,
    alt: String,
    image: String,
    ariaLabel: String
  })

 
  </script>
  