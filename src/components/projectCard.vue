<template>
  <div class="project-card w-56 h-80  md:h-[23rem] md:w-[23rem] md:text-sm bg-white/5 backdrop-blur-md border
     border-white/10 p-6 rounded-xl transition-transform duration-300 hover:scale-[1.01] hover:-rotate-[.3deg] ">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <h3 class="text-sm opacity-80 font-semibold">{{ title }}</h3>
      <div class="mb-4 mt-2 md:m-0">
        <img :src="srcset" :alt="title + ' image'">
      </div>
      <p class="text-sm/4 sm:text-sm mt-2  opacity-75">{{ description }}</p>
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
  