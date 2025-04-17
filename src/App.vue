<template>
  <div class="mx-6">
    <NavBar />

    <div class="flex flex-col items-center justify-center mt-12 mb-5">
      <div class="my-5">
        <h1 class=" text-2xl font-mono font-bold">Hi, I am {{ name }}</h1>
        <p class="text-xs opacity-75 mt-4 ml-10">Software Developer</p>
      </div>

      <div class="">
        <small class=" text-[10px] mb-4 ml-10">MY RESUME</small>
        <div
          class=" border-2 border-[hsla(0,0%,100%,.12)] shadow-md hover:shadow-lg w-32 text-xs  h-14 rounded-xl mt-2">
          <button class=" ml-1 p-4 hover:bg-grey"><a href="{{ cv }}">DOWNLOAD</a></button>
        </div>
      </div>
    </div>


    <section class="about mt-10">
  <div class="relative w-full border-2 border-white rounded-md pt-12 pb-6 px-4">
    

    <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
      <img
        src=""
        alt="profile"
        class="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover"
      />
    </div>
    <div class="text-center mt-2">
      <h3 class="text-lg font-semibold">Tamarankuro Alemu (Tammy)</h3>
      <AboutMe
        v-for="(item, index) in aboutMeText"
        :key="index"
        :text="item.text"
      />
    </div>
    
  </div>
</section>



    <section class="flex justify-normal items-center flex-col my-4">
      <div>
        <h3 class="mt-4">SKILLS</h3>
        
        <ul class="grid grid-cols-3 gap-4">
          <skills-card v-for="(skill, index) in skills" :key="index" :url="skill.url" :image="skill.image"
          :aria-label="skill.ariaLabel" :alt="skill.alt" />
        </ul>
        
      </div>





    </section>


    <section>
      <div class="flex justify-normal items-center flex-col">
        <h3 class="text-2xl font-mono font-bold my-2"> Projects</h3>
        <div class="grid place-items-center justify-start overflow-auto mx-2">
          <div class="smm:flex smm:flex-row smm:gap-10 smm:overflow-auto">
            <ProjectCard v-for="(project, index) in projects" :key="index" :url="project.url" :srcset="project.srcset"
              :title="project.title" :description="project.description" />
          </div>
        </div>
      </div>


    </section>



  </div>
  <FooterCard />

</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import NavBar from './components/NavBar.vue'
import FooterCard from './components/FooterCard.vue'
import AboutMe from './components/AboutMe.vue'
import SkillsCard from './components/SkillsCard.vue'

const name = 'Tammy ✨'
const cv = 'https://drive.google.com/file/d/1hzHbRBZXkuYj-zRcElaqiFF-vlNe5I9_/view?usp=sharing'

const projects = [
  {
    url: 'https://brimble.app',
    srcset: 'https://api.microlink.io/?url=https://brimble.app&screenshot=true&meta=false',
    title: 'Brimble', description: 'Built with Vue'
  },
  { url: '', srcset: '', title: 'Portfolio Website', description: 'Built with Vue' },
  { url: '', srcset: '', title: 'Portfolio Website', description: 'Built with Vue' },
  { url: '', srcset: '', title: 'Portfolio Website', description: 'Built with Vue' },
  {
    url: 'https://vitejs.dev',
    srcset: 'https://api.microlink.io/?url=https://vitejs.dev&meta=false&screenshot=true',
    title: 'Vite',
    description: 'Blazing fast tooling'
  }
]

const skills = [

{
    url: 'https://www.php.net/',
    image: 'PHP',
    ariaLabel: 'PHP',
    alt: 'PHP'
  },
  {
    url: 'https://www.laravel.com/',
    image: 'Laravel',
    ariaLabel: 'Laravel',
    alt: 'Laravel'
  },
  {
    url: 'https://golang.org/',
    image: 'Golang',
    ariaLabel: 'Golang',
    alt: 'Golang'
  },

  {
    url: 'https://tailwindcss.com/',
    image: 'Tailwind CSS',
    ariaLabel: 'Tailwind CSS',
    alt: 'Tailwind CSS'
  }, 

  { 
    url: 'https://vuejs.org/', 
    image: 'Vue', ariaLabel: 'Vue.js',
     alt: 'Vue.js'
  },
  {
    url: 'https://www.javascript.org/',
    image: 'JavaScript',
    ariaLabel: 'JavaScript',
    alt: 'JavaScript'
  },
  
  
  {
    url: 'https://www.postgresql.org/',
    image: 'PostgreSQL',
    ariaLabel: 'PostgreSQL',
    alt: 'PostgreSQL'
  },
  {
    url: 'https://www.mysql.org/',
    image: 'MYSQL',
    ariaLabel: 'MYSQL',
    alt: 'MYSQL'
  },
  {
    url: 'https://docker.com/',
    image: 'Docker',
    ariaLabel: 'Docker',
    alt: 'Docker'

  }
 
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
      "and product teams to create products that are both functional and meaningful."
  }

]
</script>
