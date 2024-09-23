<template>
  <div id="progress-bar" class="fixed top-0 left-0 h-1 bg-black z-50"></div>
  <div class="max-w-144 h-full mx-auto overflow-hidden">
    <div class="max-w-144 w-full fixed top-0 z-10">
      <Header />
    </div>
    <section class="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center h-mobile lg:h-custom">
      <div class="p-4 lg:p-0 relative">
        <h1 class="max-w-80 lg:max-w-none font-semibold text-cod-black text-mobile lg:text-custom">Que le plus fort,</h1>
        <img :src="Vector" alt="" class="absolute top-8 right-0 block lg:hidden">
        <div class="flex justify-start items-center gap-8">
          <img :src="Vector" alt="" class="hidden lg:block">
          <h2 class="font-semibold italic text-cod-black text-mobile lg:text-custom">l'emporte!</h2>
        </div>
      </div>
      <img :src="CardHero" alt="">
    </section>
    <div class="w-3677 h-174">
      <img class="bg-cover text-move" :src="AFrontLes" alt="">
    </div>
  </div>

  <div class="sticky top-0 mt-24 mb:mt-0 px-4">
    <SectionOne />
  </div>

  <div class="sticky top-0 px-4">
    <SectionTwo />
  </div>

  <div class="sticky top-0 px-4">
    <SectionThree />
  </div>

  <div class="sticky top-0 px-4">
    <SectionFour />
  </div>

  <div class="sticky top-0 px-4">
    <SectionFive />
  </div>

  <div class="sticky top-0 px-4">
    <SectionSix />
  </div>

  <div class="sticky top-0 px-4">
    <SectionSeven />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import SectionOne from "./components/SectionOne.vue";
import SectionTwo from "./components/SectionTwo.vue";
import SectionThree from "./components/SectionThree.vue";
import SectionFour from "./components/SectionFour.vue";
import SectionFive from "./components/SectionFive.vue";
import SectionSix from "./components/SectionSix.vue";
import SectionSeven from "./components/SectionSeven.vue";

import CardHero from "./assets/CardHero.svg";
import Vector from "./assets/Vector.svg";
import AFrontLes from "./assets/AFrontLes.svg";

import { useKonamiCode } from './utils/useKonamiCode';

import { onMounted, onUnmounted } from 'vue';

const updateProgressBar = () => {
  const progressBar = document.getElementById("progress-bar");
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollTop / documentHeight) * 100;

  if (progressBar) {
    progressBar.style.width = `${scrollPercentage}%`;
  }
};

onMounted(() => {
  window.addEventListener('scroll', updateProgressBar);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgressBar);
});

useKonamiCode();
</script>

<style scope>
.text-move {
  display: inline-block;
  white-space: nowrap;
  animation: move 60s linear infinite;
  -webkit-animation: move 60s linear infinite;
  -moz-animation: move 60s linear infinite;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
