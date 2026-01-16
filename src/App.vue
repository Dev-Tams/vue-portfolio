<template>
  <div class="smm:mx-6 md:mx-20">
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <canvas id="particles" class="w-full h-full"></canvas>
    </div>
    <NavBar />

    <section class="Tammy Alemu" data-aos="fade-up">
      <div class="flex flex-col smm:items-center md:items-start justify-center smm:mt-12 md:mt-24  mb-5">
        <div class="my-5">
          <h1 class=" Tamarankuro Alemu smm:text-2xl md:text-4xl xl:text-6xl font-mono font-bold">Hi, I am {{ name }}
          </h1>
          <p class="text-sm opacity-75 mt-4 smm:ml-14 w-fit md:-ml-0 md:text-base lg:text-lg">Software Developer</p>
        </div>

        <div class="md:my-6">
          <small class=" text-[10px] mb-4 smm:ml-5 md:ml-4 text-sm">MY RESUME</small>
          <div
            class=" border-2 border-[hsla(0,0%,100%,.12)] shadow-md hover:shadow-lg w-32 text-xs  h-14 rounded-xl mt-2
          bg-gradient-to-r from-lime-500 to-green-400 hover:from-green-400 hover:to-lime-500 transition-all duration-300 hover:scale-105">
            <button class=" ml-1 p-4 hover:bg-grey font-semibold"><a :href="cv" target="_blank">DOWNLOAD</a></button>
          </div>
        </div>
      </div>
    </section>

    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute w-[200vw] h-32 bg-[#30634E] 
            opacity-30 blur-3xl transform -rotate-[20deg] 
            -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      </div>
    </div>
    <section class="about glow mt-10 md:mt-14" ref="aboutSection">
      <div class="relative w-full pt-12 pb-6 px-4  bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">


        <div class="absolute -top-6 md:-top-14 left-1/2 md:left-1/4 transform -translate-x-1/2">
          <img src="/images/avi.png" alt="tammy alemu Tamarankuro Alemu"
            class="w-16 md:w-32 h-16 md:h-32 rounded-full border-2 border-white shadow-md object-cover" />
        </div>

        <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            class="absolute w-[200vw] h-32 bg-[#30634E] opacity-30 blur-3xl transform -rotate-[20deg] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          </div>
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

        <ul class="grid grid-cols-4 gap-4 md:grid-cols-none md:grid-flow-col overflow-x-auto">
          <skills-card v-for="(skill, index) in skills" :key="index" :url="skill.url" :src="skill.image"
            :alt="skill.alt" :aria-label="skill.ariaLabel" />

        </ul>

      </div>





    </section>

    <section data-aos="zoom-out" id="projects">
      <div class="lg:mt-20">
        <h3 class="text-xl md:text-3xl xl:text-4xl font-mono font-bold my-2">
          Work Experience & Projects
        </h3>

        <div class="grid grid-flow-col lg:grid-flow-row gap-4 overflow-auto lg:grid-cols-2 xl:grid-cols-3">
          <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
        </div>
      </div>
    </section>




  </div>
  <FooterCard />

</template>


<script setup>
import ProjectCard from './components/projectCard.vue'
import { projects } from './components/js/projects.js'
import { skills } from './components/js/skills.js'
import NavBar from './components/NavBar.vue'
import FooterCard from './components/FooterCard.vue'
import AboutMe from './components/AboutMe.vue'
import { aboutMeText } from './components/js/aboutMe.js'
import SkillsCard from './components/SkillsCard.vue'
import { onMounted } from 'vue';


const cv = import.meta.env.VITE_CV_URL
const name = 'Tammy ✨'



onMounted(() => {
  const sections = document.querySelectorAll('.glow');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  sections.forEach((section) => observer.observe(section));
});

onMounted(() => {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 25 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(117, 251, 76, 0.3)";
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  animate();
});


</script>

<style scoped>
.hover\:cursor-custom:hover {
  cursor: url('/images/cursor.svg'), auto;
}
</style>
