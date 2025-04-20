<template>
  <div class="project-card h-[23rem] w-[23rem] md:text-sm bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl transition-transform duration-300 hover:scale-[1.01] hover:-rotate-[.3deg] ">
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
  