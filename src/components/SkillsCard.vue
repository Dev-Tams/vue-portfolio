<template>
    <li class="m-4">
      <a :href="url" target="_blank" :aria-label="ariaLabel">
        <img :src="src" :alt="alt" class="w-10 h-10 object-contain bg-gradient-to-r duration-300 hover:scale-105" />
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