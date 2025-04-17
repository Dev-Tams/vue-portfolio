<template>
  <NavBar />

  <div class="flex flex-col items-center justify-center mt-12 mb-5">
    <div class="my-5">
      <h1 class=" text-2xl font-mono font-bold">Hi, I am {{ name }}</h1>
      <p class="text-xs opacity-75 mt-4 ml-10">Software Developer</p>
    </div>

    <div class="">
      <small class=" text-[10px] mb-4 ml-10">MY RESUME</small>
      <div class=" border-2 border-[hsla(0,0%,100%,.12)] shadow-md hover:shadow-lg w-32 text-xs  h-14 rounded-xl mt-2">
        <button class=" ml-1 p-4 hover:bg-grey"><a href="{{ cv }}">DOWNLOAD</a></button>
      </div>
    </div>
  </div>


  <section class="about">
    <div class=" w-full border-2 border:bg-white">
      <img src="" alt="profile" />
      <div class="mx-2">
        <h3>Tamarankuro Alemu (Tammy)</h3>
        <AboutMe v-for="(item, index) in aboutMeText" :key="index" :text="item.text" />
      </div> 
    </div>
  </section>


  <section>
    <div>
    <h3>SKILLS</h3>
  </div>

  </section>
 

  <section>

      <div> Porjects</div>
      <div>
        <ProjectCard v-for="(project, index) in projects" :key="index" :url="project.url" :srcset="project.srcset"
          :title="project.title" :description="project.description" />
      </div>


  </section>


  <FooterCard></FooterCard>

</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import NavBar from './components/NavBar.vue'
import FooterCard from './components/FooterCard.vue'
import AboutMe from './components/AboutMe.vue'

const name = 'Tammy ✨'
const cv = 'https://drive.google.com/file/d/1hzHbRBZXkuYj-zRcElaqiFF-vlNe5I9_/view?usp=sharing'

const projects = [
  { url: 'https://brimble.app', srcset: 'https://brimble.app', title: 'Brimble', description: 'Built with Vue' },
  { url: '', srcset: '', title: 'Portfolio Website', description: 'Built with Vue' },
  { url: '', srcset: '', title: 'Portfolio Website', description: 'Built with Vue' },
  { url: '', srcset: '', title: 'Portfolio Website', description: 'Built with Vue' },
]


const aboutMeText = [
  {
    text: "I'm naturally drawn to complexity and love turning challenges into clean, efficient solutions" +
      " Over the years, I’ve worked on everything from passion projects to startup-scale applications, each " +
      "one sharpening my ability to build with purpose."
  },

  {
    text: "While I'm comfortable implementing designs and functionality for web apps," +
      " my true passion lies in mastering the behind-the-scenes of server development, " +
      "understanding design patterns, conventional architectures, and efficient" +
      " approaches to handling server requests and API management!"
  },
  {
    text: "I thrive in fast-paced environments and enjoy collaborating with designers, engineers," + 
    "and product teams to create products that are both functional and meaningful"
  }

]
</script>
