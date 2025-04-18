<template>
  <footer>
    <div class="flex flex-col items-center md:items-start justify-center md:mt-4 md:ml-20">
      <h3 class=" text-2xl md:text-5xl lg:text-6xl font-mono font-bold mt-4 md:mt-8" id="contact">
        Get in Touch
      </h3>
      <div>
        <ul class="flex md:mt-6">
          <SocialLink v-for="social in socialLinks" :key="social.image" :url="social.url" :image="social.image"
            :alt="social.alt" :aria-label="social.ariaLabel" />
        </ul>
      </div>
      <p class="text-xs/5 mx-4 items-center opacity-75">
        I am open to creative ideas or opportunities to be part of your vision.
      </p>
    </div>


    <div class="flex flex-col items-center justify-center my-8 text-xs opacity-75 ">
      <hr class="w-full my-4">
      <p>Tammy Alemu | Copyright &copy; {{ year }}</p>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  { image: 'Mail', url: 'Mailto:tammyalemu@gmail.com', alt: "Github", ariaLabel: "Github profile" },
  { image: 'LinkedIn', url: 'https://linkedin.com/in/tammyalemu', alt: "LinkedIn", ariaLabel: "LinkedIn profile" },
  { image: 'X', url: 'https://x.com/tammyalemu', alt: "X", ariaLabel: "X profile" },
]
import SocialLink from '../components/SocialLink.vue' 
const year = new Date().getFullYear()
</script>