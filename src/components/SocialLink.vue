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

  const socialLinks = [
  { image: 'Github', url: 'https://github.com/dev_tams', alt: "Github", ariaLabel: "Github profile" },
  { image: 'LinkedIn', url: 'https://linkedin.com/in/tammyalemu', alt: "LinkedIn", ariaLabel: "LinkedIn profile" },
  { image: 'X', url: 'https://x.com/tammyalemu', alt: "X", ariaLabel: "X profile" },
]
  </script>
  