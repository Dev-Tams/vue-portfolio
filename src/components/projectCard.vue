<template>
  <div class="project-card">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <h3>{{ title }}</h3>
      <div>
        <img :src="srcset" :alt="title + ' image'">
      </div>
      <p>{{ description }}</p>
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
  