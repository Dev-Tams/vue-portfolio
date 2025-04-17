<template>
  <nav class="mt-20 mb-5">
    <div class=" flex justify-center
         h-10">
        
         <div class="smm:bg-grey h-14 rounded-3xl items-center p-2">
      <ul class=" flex justify-center items-center w-max text-sm mt-2">
        <li class="mx-4" v-for="item in navLinks" :key="item.text">
          <a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
    </div>
      <div class="smm:hidden md:block">
        <SocialLink v-for="social in socialLinks" :key="social.image" :url="social.url" :image="social.image"
          :alt="social.alt" :aria-label="social.ariaLabel" />
      </div>

    </div>
  </nav>
</template>

<script setup>
const navLinks = [
  { text: 'Projects', href: '#projects' },
  { text: 'Contact Me', href: '#contact' }
]

const socialLinks = [
  { image: 'Github', url: 'https://github.com/dev_tams', alt: "Github", ariaLabel: "Github profile" },
  { image: 'LinkedIn', url: 'https://linkedin.com/in/tammyalemu', alt: "LinkedIn", ariaLabel: "LinkedIn profile" },
  { image: 'X', url: 'https://x.com/tammyalemu', alt: "X", ariaLabel: "X profile" },
];
import SocialLink from '../components/SocialLink.vue';
</script>
