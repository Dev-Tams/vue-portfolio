<template>
  <NavBar />

  <div>
    <h1>Hi, I am {{ name }}</h1>
    <p>Software Developer</p>
  </div>

  <div>
    <p>MY RESUME</p>
    <div>
      <button>DOWNLOAD</button>
    </div>
  </div>

  <div>
    <img src="" alt="" />
    <h3></h3>
    <p></p>
  </div>

  <div>
    <h3>SKILLS</h3>
  </div>

  <div>
    <h3>My Projects</h3>
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :description="project.description"
    />
  </div>

<FooterCard />

</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import NavBar from './components/NavBar.vue'
import SocialLink from './components/SocialLink.vue'
import NavBar from './components/FooterCard.vue' 

const name = 'Tammy'

const projects = [
  { title: 'Portfolio Website', description: 'Built with Vue' },
  { title: 'To-do App', description: 'Simple CRUD app' },
  { title: 'Blog Platform', description: 'Markdown-based content system' },
]
const socialLinks = [
  { image: 'Github', url: 'https://github.com/dev_tams', alt: "Github", ariaLabel: "Github profile" },
  { image: 'LinkedIn', url: 'https://linkedin.com/in/tammyalemu', alt: "LinkedIn", ariaLabel: "LinkedIn profile" },
  { image: 'X', url: 'https://x.com/tammyalemu', alt: "X", ariaLabel: "X profile" },
]

  

</script>
