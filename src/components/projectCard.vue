<template>
    <div class="project-card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps(['title', 'description'])
  </script>
  
  <style scoped>
  .project-card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem 0;
  }
  </style>
  