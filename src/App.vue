<template>
  <div class="smm:mx-6 md:mx-20">
    <NavBar />

    <div class="flex flex-col smm:items-center md:items-start justify-center smm:mt-12 md:mt-24  mb-5">
      <div class="my-5">
        <h1 class=" smm:text-2xl md:text-4xl xl:text-6xl font-mono font-bold">Hi, I am {{ name }}</h1>
        <p class="text-xs opacity-75 mt-4 smm:ml-10 w-fit md:-ml-0 md:text-base lg:text-lg">Software Developer</p>
      </div>

      <div class="md:my-6">
        <small class=" text-[10px] mb-4 smm:ml-10 md:ml-4 text-sm">MY RESUME</small>
        <div
          class=" border-2 border-[hsla(0,0%,100%,.12)] shadow-md hover:shadow-lg w-32 text-xs  h-14 rounded-xl mt-2">
          <button class=" ml-1 p-4 hover:bg-grey font-semibold"><a :href="cv" target="_blank">DOWNLOAD</a></button>
        </div>
      </div>
    </div>


    <section class="about mt-10 md:mt-14">
      <div class="relative w-full border-2 border-white shadow-md hover:shadow-lg 
            hover:scale-105 rounded-md pt-12 pb-6 px-4">


        <div class="absolute -top-6 md:-top-14 left-1/2 md:left-1/4 transform -translate-x-1/2">
          <img src="/images/avi.png" alt="profile" class="w-16 md:w-32 h-16 md:h-32 rounded-full border-2 border-white shadow-md object-cover" />
        </div>
        <div class="smm:text-center mt-2 md:mt-14 md:text-left">
          <h3 class="text-lg font-semibold">Tamarankuro Alemu (Tammy)</h3>
          <AboutMe v-for="(item, index) in aboutMeText" :key="index" :text="item.text" />
        </div>

      </div>
    </section>



    <section class="flex justify-normal items-center lg:items-start flex-col my-4">
      <div>
        <h3 class="mt-4 md:mt-10 ml-4 md:text-2xl">SKILLS</h3>

        <ul class="grid grid-cols-3 gap-4 md:grid-cols-none md:grid-flow-col overflow-x-auto">
          <skills-card v-for="(skill, index) in skills" :key="index" :url="skill.url" :src="skill.image"
            :alt="skill.alt" :aria-label="skill.ariaLabel" />

        </ul>

      </div>





    </section>


    <section>
      <div class="lg:mt-20">
        <h3 class="text-2xl lg: md:text-5xl xl:text-6xl font-mono font-bold my-2"> Projects</h3>
        <div class="">
          <div class=" grid grid-flow-col lg:grid-flow-row gap-4 overflow-auto lg:grid-cols-2 xl:grid-cols-3">
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
    url: 'https://ecorenew.brimble.app',
    srcset: "https://api.microlink.io/?url=https%3A%2F%2Fwww.chem-pe.com%2F%23&overlay.browser=light&overlay." +
      "background=%23c1c1c1&screenshot=true&embed=screenshot.url",
    title: 'Ecorenew',
    description: 'Blazing fast tooling'
  },
  {
    url: 'https://Chem-Pe.com',
    srcset: "https://api.microlink.io/?url=https%3A%2F%2Fwww.chem-pe.com%2F%23&overlay.browser=light&overlay." +
      "background=%23c1c1c1&screenshot=true&embed=screenshot.url",
    title: 'Chem-Pe',
    description: "Chem-Pe powers restaurants across Africa. It enables customers to browse menus, customize orders, select order types and secure mobile payments."
  },
  {
    url: 'https://vitejs.dev',
    srcset: "https://api.microlink.io/?url=https%3A%2F%2Fwww.chem-pe.com%2F%23&overlay.browser=light&overlay." +
      "background=%23c1c1c1&screenshot=true&embed=screenshot.url",
    title: 'Vite',
    description: 'Blazing fast tooling'
  },
  {
    url: 'https://ecorenew.brimble.app',
    srcset: "https://api.microlink.io/?url=https%3A%2F%2Fwww.chem-pe.com%2F%23&overlay.browser=light&overlay." +
      "background=%23c1c1c1&screenshot=true&embed=screenshot.url",
    title: 'Ecorenew',
    description: 'Blazing fast tooling'
  },
  {
    url: 'https://Chem-Pe.com',
    srcset: "https://api.microlink.io/?url=https%3A%2F%2Fwww.chem-pe.com%2F%23&overlay.browser=light&overlay." +
      "background=%23c1c1c1&screenshot=true&embed=screenshot.url",
    title: 'Chem-Pe',
    description: "Chem-Pe powers restaurants across Africa. It enables customers to browse menus, customize orders, select order types and secure mobile payments."
  },
  {
    url: 'https://vitejs.dev',
    srcset: "https://api.microlink.io/?url=https%3A%2F%2Fwww.chem-pe.com%2F%23&overlay.browser=light&overlay." +
      "background=%23c1c1c1&screenshot=true&embed=screenshot.url",
    title: 'Vite',
    description: 'Blazing fast tooling'
  },
]

const skills = [

  {
    url: 'https://www.php.net/',
    image: '/images/php.png',
    ariaLabel: 'PHP',
    alt: 'PHP'
  },
  {
    url: 'https://www.laravel.com/',
    image: '/images/laravel.png',
    ariaLabel: 'Laravel',
    alt: 'Laravel'
  },
  {
    url: 'https://golang.org/',
    image: '/images/go.png',
    ariaLabel: 'Golang',
    alt: 'Golang'
  },

  {
    url: 'https://tailwindcss.com/',
    image: '/images/tailwind.png',
    ariaLabel: 'Tailwind CSS',
    alt: 'Tailwind CSS'
  },

  {
    url: 'https://vuejs.org/',
    image: '/images/vue.svg',
    ariaLabel: 'Vue.js',
    alt: 'Vue.js'
  },
  {
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    image: '/images/javascript.png',
    ariaLabel: 'JavaScript',
    alt: 'JavaScript'
  },


  {
    url: 'https://www.postgresql.org/',
    image: '/images/postgresql.png',
    ariaLabel: 'PostgreSQL',
    alt: 'PostgreSQL'
  },
  {
    url: 'https://www.mysql.org/',
    image: '/images/mysql.png',
    ariaLabel: 'MYSQL',
    alt: 'MYSQL'
  },
  {
    url: 'https://docker.com/',
    image: '/images/docker.png',
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
