<template>
  <div class="project-card bg-grey rounded-lg shadow-md h-[23rem] w-[23rem] md:text-sm">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <h3 class="text-base  md:text-sm opacity-80 font-semibold">{{ title }}</h3>
      <div>
        <img :src="srcset" :alt="title + ' image'">
      </div>
      <p class="text-sm mt-2  opacity-75">{{ description }}</p>
    </a>
  </div>
</template>

  
  <script setup>
  defineProps(['url', 'srcset','title', 'description'])
  </script>
  
  <style scoped>
  .project-card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem 0;
  }
  </style>
  