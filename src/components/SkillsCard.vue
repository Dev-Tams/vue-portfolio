<template>
    <li class="m-4">
        <img :srcset="srcset" :alt="alt" />
      <a :href="url" target="_blank" :aria-label="ariaLabel">
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