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

  <section>
    <div>
    <h3>My Projects</h3>

    <p> Here are a few projects I have laid my hands on</p>

    <div>
      <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :url="project.url"
      :srcset="project.srcset"
      :title="project.title"
      :description="project.description"
    />
    </div>
   
  </div>
  </section>
 

  <FooterCard></FooterCard>

</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import NavBar from './components/NavBar.vue'
import FooterCard from './components/FooterCard.vue'

const name = 'Tammy'

const projects = [
  { url: '#', srcset:'', title: 'Portfolio Website', description: 'Built with Vue' },
  { url: '', srcset:'', title: 'Portfolio Website', description: 'Built with Vue' },
  { url: '', srcset:'', title: 'Portfolio Website', description: 'Built with Vue' },
  { url: '', srcset:'', title: 'Portfolio Website', description: 'Built with Vue' },
] 
</script>
