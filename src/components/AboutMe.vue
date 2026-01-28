<template>
  <div>
    <!-- Base (always visible) -->
    <div class="space-y-6">
      <p
        v-for="(item, index) in texts.slice(0, collapsedCount)"
        :key="'base-' + index"
        class="
          text-sm leading-7
          md:text-base md:leading-8
          lg:text-lg lg:leading-9
          text-pretty 
          tracking-[0.01em]
          text-white/80
          selection:bg-emerald-400/30 selection:text-white
        "
      >
        {{ item.text }}
      </p>
    </div>

    <!-- Toggle -->
    <div v-if="texts.length > collapsedCount" class="mt-5 flex items-center gap-3">
      <button
        @click="toggle"
        class="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2
               text-xs font-semibold text-white/80 hover:bg-white/10 transition"
        :aria-expanded="expanded"
      >
        <span class="relative">
          {{ expanded ? "Show less" : "Read more" }}
          <span
            class="absolute -bottom-1 left-0 h-px w-full bg-white/30 origin-left scale-x-0
                   transition-transform duration-300 group-hover:scale-x-100"
          ></span>
        </span>
        <span class="opacity-70 transition-transform duration-300" :class="expanded ? 'rotate-180' : ''">↓</span>
      </button>

      <span class="text-xs text-white/50">
        {{ expanded ? "Full story" : `Showing ${collapsedCount} of ${texts.length}` }}
      </span>
    </div>

    <!-- Hanging panel container (animates height) -->
    <div
      class="relative mt-6 overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(.22,1.2,.36,1)]"
      :style="{ maxHeight: expanded ? panelHeight + 'px' : '0px' }"
    >
      <!-- HINGE / STRAP -->
      <div class="absolute left-6 top-0 h-6 w-px bg-white/15"></div>
      <div class="absolute left-6 top-6 h-2 w-10 rounded-full bg-white/10 blur-[0.3px]"></div>

      <!-- Panel body (falls in) -->
      <div
        ref="panelRef"
        class="
          mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6
          shadow-lg shadow-emerald-500/5
          origin-top-left
          transition-all duration-700 ease-[cubic-bezier(.22,1.2,.36,1)]
        "
        :class="expanded
          ? 'opacity-100 translate-y-0 rotate-0'
          : 'opacity-0 -translate-y-6 -rotate-2'"
      >
        <div class="space-y-6">
          <p
            v-for="(item, index) in texts.slice(collapsedCount)"
            :key="'extra-' + index"
            class="
              text-sm leading-7
              md:text-base md:leading-8
              lg:text-lg lg:leading-9
              text-pretty
              tracking-[0.01em]
              text-white/80
              selection:bg-emerald-400/30 selection:text-white
            "
          >
            {{ item.text }}
          </p>

          <!-- Clap card (at end of expanded content) -->
          <button
            @click="clap"
            class="
              relative w-full overflow-hidden
              rounded-2xl border border-white/10 bg-zinc-950/30
              p-5 text-left
              hover:bg-white/10 transition
            "
          >
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-sm font-semibold text-white/90">👏 Clap for me</p>
                <p class="mt-1 text-xs text-white/60">
                  If you enjoyed the story.
                </p>
              </div>

              <div class="flex items-center gap-2 text-xs text-white/70">
                <span class="rounded-lg border border-white/10 bg-white/5 px-2 py-1">
                  {{ claps }}
                </span>
                <span class="opacity-70">claps</span>
              </div>
            </div>

            <!-- Burst overlay -->
            <div class="pointer-events-none absolute inset-0">
              <span
                v-for="b in bursts"
                :key="b.id"
                class="burst"
                :style="{
                  left: b.x + 'px',
                  top: b.y + 'px',
                  '--dx': b.dx + 'px',
                  '--dy': b.dy + 'px',
                  '--rot': b.rot + 'deg',
                  '--dur': b.dur + 'ms'
                }"
              >
                {{ b.emoji }}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  texts: { type: Array, required: true }, // array of { text: string }
  collapsedCount: { type: Number, default: 3 }
});

const expanded = ref(false);

// panel height animation
const panelRef = ref(null);
const panelHeight = ref(0);

function measure() {
  if (!panelRef.value) return;
  panelHeight.value = panelRef.value.scrollHeight + 40; // small buffer
}

// toggle panel
async function toggle() {
  expanded.value = !expanded.value;
  await nextTick();
  measure();
}

// clap + burst
const claps = ref(0);
const bursts = ref([]);
let burstId = 0;
let clearTimer = null;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function makeBurst(x, y) {
  const emojis = ["💚", "✨", "🫶", "💫", "💖", "🔥"];
  const count = 10;

  for (let i = 0; i < count; i++) {
    bursts.value.push({
      id: ++burstId,
      x,
      y,
      dx: randomBetween(-80, 80),
      dy: randomBetween(-120, -30),
      rot: randomBetween(-45, 45),
      dur: Math.floor(randomBetween(600, 1000)),
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    });
  }

  // clear after animation
  if (clearTimer) clearTimeout(clearTimer);
  clearTimer = setTimeout(() => {
    bursts.value = [];
  }, 1100);
}

function clap(e) {
  claps.value += 1;

  const rect = e.currentTarget.getBoundingClientRect();
  const x = rect.width * randomBetween(0.25, 0.75);
  const y = rect.height * randomBetween(0.2, 0.7);

  makeBurst(x, y);

  // close panel after a beat
  setTimeout(() => {
    expanded.value = false;
  }, 450);
}

onMounted(() => {
  measure();
  window.addEventListener("resize", measure, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", measure);
  if (clearTimer) clearTimeout(clearTimer);
});
</script>

<style scoped>
.burst {
  position: absolute;
  font-size: 16px;
  opacity: 0;
  transform: translate(0, 0) rotate(0deg) scale(0.9);
  animation: pop var(--dur) ease-out forwards;
  will-change: transform, opacity;
}

@keyframes pop {
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg) scale(0.85);
  }
  12% {
    opacity: 1;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(var(--dx), var(--dy)) rotate(var(--rot)) scale(1.15);
  }
}
</style>
