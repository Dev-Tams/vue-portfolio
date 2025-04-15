<template>
<footer>
    <div>
    <h3>
      Get in Touch
    </h3>

    <SocialLink
  v-for="social in socialLinks"
  :key="social.image"
  :url="social.url"
  :image="social.image"
  :alt="social.alt"
  :aria-label="social.ariaLabel"
/>


  </div>
    <div>
      <p>
        I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
      </p>

      <p>Tammy Alemu | Copyright &copy; {{ year }}</p>
    </div>
</footer>
</template>

<script setup>
const socialLinks = [
  { image: 'Github', url: 'https://github.com/dev_tams', alt: "Github", ariaLabel: "Github profile" },
  { image: 'LinkedIn', url: 'https://linkedin.com/in/tammyalemu', alt: "LinkedIn", ariaLabel: "LinkedIn profile" },
  { image: 'X', url: 'https://x.com/tammyalemu', alt: "X", ariaLabel: "X profile" },
]
import SocialLink from '../components/SocialLink.vue' 
</script>