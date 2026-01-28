<template>
  <div class="min-h-screen bg-zinc-950 text-white">
    <!-- Background: subtle gradient + particles -->
    <div class="pointer-events-none fixed inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-zinc-950 to-zinc-950"></div>
      <div class="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <canvas id="particles" class="absolute inset-0 h-full w-full opacity-70"></canvas>
      <div class="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12]"></div>
    </div>

    <NavBar />

    <main class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <!-- HERO -->
      <section class="pt-12 sm:pt-16 lg:pt-24">
        <div class="grid items-center gap-10 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <p class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Backend • Infrastructure • Finance Systems
            </p>

            <h1 class="mt-4 font-mono text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
              Hi, I am <span class="text-emerald-300">{{ name }}</span>
            </h1>

            <p class="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Software Developer building production systems — APIs, services, and infrastructure that hold up under real-world load.
            </p>

            <div class="mt-7 flex flex-wrap items-center gap-3">
              <a
                :href="cv"
                target="_blank"
                class="inline-flex items-center justify-center rounded-xl bg-emerald-400/90 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-400/10 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
              >
                Download CV
              </a>

              <a
                href="#projects"
                class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                See projects
              </a>
            </div>

            <div class="mt-8 flex flex-wrap gap-2 text-xs text-white/60">
              <span class="rounded-lg border border-white/10 bg-white/5 px-3 py-1">Golang</span>
              <span class="rounded-lg border border-white/10 bg-white/5 px-3 py-1">PostgreSQL</span>
              <span class="rounded-lg border border-white/10 bg-white/5 px-3 py-1">Docker</span>
              <span class="rounded-lg border border-white/10 bg-white/5 px-3 py-1">Microservices</span>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div class="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl"></div>

              <div class="flex items-center gap-4">
                <img
                  src="/images/avi.png"
                  alt="Tamarankuro Alemu (Tammy)"
                  class="h-16 w-16 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <h2 class="text-base font-semibold">Tamarankuro Alemu (Tammy)</h2>
                  <p class="mt-1 text-xs text-white/60">Backend Engineer • Systems Builder</p>
                </div>
              </div>

              <div class="mt-6 space-y-3 text-sm leading-7 text-white/75">
                <p class="text-pretty">
                  I like building the “real deal”  infrastructure-level systems, especially in finance and logic-heavy domains.
                </p>
                <p class="text-pretty">
                  Most of my work is with firms, so what you’ll see are non-NDA projects or experiments where I tried new approaches.
                </p>
              </div>

              <div class="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div class="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p class="text-white/60">Focus</p>
                  <p class="mt-1 font-semibold">Backend & Infra</p>
                </div>
                <div class="rounded-xl border border-white/10 bg-white/5 p-3">
                  <p class="text-white/60">Currently</p>
                  <p class="mt-1 font-semibold">Building systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT -->
      <section class="mt-10 sm:mt-14 lg:mt-20">
        <div class="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div class="flex items-end justify-between gap-6">
            <div>
              <h3 class="text-lg font-semibold sm:text-xl">About</h3>
              <p class="mt-2 text-sm text-white/60">A quick story and what I like building.</p>
            </div>
          </div>

          <div class="mt-6 grid gap-6 lg:grid-cols-12">
            <!-- Narrative -->
            <div class="lg:col-span-8">
              <AboutMe :texts="aboutMeText" :collapsedCount="3" />
            </div>

    
            <aside class="lg:col-span-4">
              <div class="space-y-4">
                <div class="rounded-2xl border border-white/10 bg-zinc-950/40 p-5">
                  <p class="text-xs text-white/60">I’m best used for</p>
                  <ul class="mt-3 space-y-2 text-sm text-white/80">
                    <li class="flex items-start gap-2">
                      <span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Banking/finance systems and payments logic
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      APIs, architecture, and service design
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Infrastructure mindset (reliability & scale)
                    </li>
                  </ul>
                </div>

                <div class="rounded-2xl border border-white/10 bg-zinc-950/40 p-5">
                  <p class="text-xs text-white/60">Current favorite</p>
                  <p class="mt-2 text-sm font-semibold text-emerald-200">Golang</p>
                  <p class="mt-1 text-xs text-white/60">Clean tooling, fast builds, strong concurrency story.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- SKILLS -->
      <section class="mt-10 sm:mt-14 lg:mt-20">
        <div class="flex items-end justify-between gap-6">
          <div>
            <h3 class="text-lg font-semibold sm:text-xl">Skills</h3>
            <p class="mt-2 text-sm text-white/60">Tools I reach for when building production systems.</p>
          </div>
        </div>

        <div class="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
          <ul class="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            <SkillsCard
              v-for="(skill, index) in skills"
              :key="index"
              :url="skill.url"
              :src="skill.image"
              :alt="skill.alt"
              :aria-label="skill.ariaLabel"
            />
          </ul>
        </div>
      </section>

      <!-- PROJECTS -->
      <section id="projects" class="mt-10 sm:mt-14 lg:mt-20 pb-16">
  <div class="flex items-end justify-between gap-6">
    <div>
      <h3 class="text-xl font-mono font-bold sm:text-2xl lg:text-4xl">Work Experience & Projects</h3>
      <p class="mt-2 text-sm text-white/60">Selected work, experiments, and non-NDA builds.</p>
    </div>
  </div>

  <!-- Mobile: Horizontal scroll -->
  <div class="mt-6 sm:hidden">
    <div class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.title" 
        v-bind="project"
        class="min-w-[280px] snap-start"
      />
    </div>
  </div>

  <!-- Tablet and up: Grid layout -->
  <div class="mt-6 hidden sm:grid gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
    <ProjectCard 
      v-for="project in projects" 
      :key="project.title" 
      v-bind="project"
    />
  </div>
</section>

    </main>

    <FooterCard />
  </div>
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
import { onMounted, onBeforeUnmount } from 'vue'

const cv = import.meta.env.VITE_CV_URL
const name = 'Tammy ✨'

onMounted(() => {
  // Particles (optimized + responsive)
  const canvas = document.getElementById('particles')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let rafId = 0
  let w = 0
  let h = 0

  const DPR = Math.min(window.devicePixelRatio || 1, 2)

  const resize = () => {
    w = window.innerWidth
    h = window.innerHeight
    canvas.width = Math.floor(w * DPR)
    canvas.height = Math.floor(h * DPR)
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
  }

  resize()

  const particles = Array.from({ length: 28 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.8 + 0.6,
    dx: (Math.random() - 0.5) * 0.35,
    dy: (Math.random() - 0.5) * 0.35,
    a: Math.random() * 0.18 + 0.05
  }))

  const animate = () => {
    ctx.clearRect(0, 0, w, h)
    for (const p of particles) {
      p.x += p.dx
      p.y += p.dy
      if (p.x < -10 || p.x > w + 10) p.dx *= -1
      if (p.y < -10 || p.y > h + 10) p.dy *= -1

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(52, 211, 153, ${p.a})` // emerald-ish
      ctx.fill()
    }
    rafId = requestAnimationFrame(animate)
  }

  animate()
  window.addEventListener('resize', resize, { passive: true })

  onBeforeUnmount(() => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('resize', resize)
  })
})
</script>

<style scoped>
/* Keep your custom cursor if you want it on key interactive elements */
.hover\:cursor-custom:hover {
  cursor: url('/images/cursor.svg'), auto;
}


/* Hide scrollbar but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Optional: Add scroll indicators on mobile */
.scrollbar-hide::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  background: linear-gradient(to left, rgba(10, 10, 15, 0.8), transparent);
  pointer-events: none;
}
</style>
