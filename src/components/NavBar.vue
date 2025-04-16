<template>
  <nav>
    <div>
  
      <ul>
        <li v-for="item in navLinks" :key="item.text">
          <a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
      <SocialLink
v-for="social in socialLinks"
:key="social.image"
:url="social.url"
:image="social.image"
:alt="social.alt"
:aria-label="social.ariaLabel"
/>
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
