<template>
  <nav class="mt-20 mb-5 " data-aos="fade-down">
    <div class="flex smm:justify-center md:justify-between h-10">

      <div class="smm:bg-grey h-14 rounded-3xl items-center p-2">
        <ul class=" flex justify-center items-center w-max text-sm md:text-base mt-2">
          <li class="mx-4 duration-300 hover:scale-105" v-for="item in navLinks" :key="item.text">
            <a :href="item.href">{{ item.text }}</a>
          </li>
        </ul>
      </div>
      <div class="smm:hidden md:block">
        <ul class="flex mx-5">
          <SocialLink v-for="social in socialLinks" :key="social.image" :url="social.url" :src="social.image"
            :alt="social.alt" :aria-label="social.ariaLabel" />
        </ul>
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
  { image: '/images/git.svg', url: 'https://github.com/dev_tams', alt: "Github", ariaLabel: "Github profile" },
  { image: '/images/link1.svg', url: 'https://linkedin.com/in/tammyalemu', alt: "LinkedIn", ariaLabel: "LinkedIn profile" },
  { image: '/images/x.svg', url: 'https://x.com/tammyalemu', alt: "X", ariaLabel: "X profile" },
];
import SocialLink from '../components/SocialLink.vue';
</script>
