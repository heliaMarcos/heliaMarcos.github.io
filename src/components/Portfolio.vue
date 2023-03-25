<script setup>
import { onUnmounted, ref, watch } from 'vue';
import gsap from 'gsap';

import images from './src/static/portfolio.json';
import { useTransitionComposable } from './src/composables/transition-composable.js';
</script>
<template>
  <main class="mx-auto flex flex-col items-center justify-center py-16 pt-24">
    <div id="portfolio">
      <!-- T O P -->
      <div
        id="portfolioTop"
        :key="images.portfolio.phototop"
        class="sm:max-w-[85%] md:max-w-[81%]"
      >
        <img
          :src="images.portfolio.phototop.src"
          :alt="images.portfolio.phototop.alt"
          :class="images.portfolio.phototop.class"
        >
      </div>
    <!-- I M A G E S -->
    </div>
    <div
      id="portfolioImages"
      ref="main"
      class="pt-4 sm:columns-1 md:columns-2"
    >
      <div class="w-1/2 md:h-52" />
      <div
        v-for="photo in images.portfolio.photos"
        :key="photo"
        class="relative"
        :class="photo.class"
      >
        <img
          :id="photo.no"
          :src="photo.src"
          :class="photo.imgclass"
          :alt="photo.alt"
        >
      </div>
    </div>
  </main>
</template>
<script>

const { transitionState } = useTransitionComposable();
const main = ref();
const ctx = ref();

watch(
  [() => transitionState.transitionComplete, main],
  (newValue) => {
    if (newValue && main.value) {
      ctx.value = gsap.context((self) => {
        const portfolioImages = self.selector('#portfolioImages img');
        portfolioImages.forEach((image) => {
          gsap.to(image, {
            y: '-=83',
            stagger: 0.6,
            duration: 0.5,
            scrollTrigger: {
              trigger: image,
              toggleAction: 'restart none reverse none',
              start: 'top 70%',
              end: 'bottom 20%',
              scrub: 0.8,
              markers: false,
            },
          });
        });
      }, main.value); // <- Scope!
    }
  },
  {
    immediate: true,
  },
);

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});

export default {
  props: {
  },
  data() {
    return {
      images,
    };
  },
};
</script>
