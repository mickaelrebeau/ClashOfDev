<template>
  <div id="progress-bar" class="fixed top-0 left-0 h-1 bg-black z-50"></div>
  <div class="max-w-144 h-screen mx-auto overflow-hidden">
    <div class="w-144 fixed top-0 z-10">
      <Header />
    </div>
    <section class="flex justify-between items-center h-custom">
      <div>
        <h1 class="font-semibold text-cod-black text-custom">Que le plus fort,</h1>
        <div class="flex justify-start items-center gap-8">
          <img :src="Vector" alt="">
          <h2 class="font-semibold italic text-cod-black text-custom">l'emporte!</h2>
        </div>
      </div>
      <img :src="CardHero" alt="">
    </section>
    <div class="w-[3677px] h-[174px]">
      <img class="bg-cover text-move" :src="AFrontLes" alt="">
    </div>
  </div>

  <div class="sticky top-0">
    <SectionOne />
  </div>

  <div class="sticky top-0">
    <SectionTwo />
  </div>

  <div class="sticky top-0">
    <SectionThree />
  </div>

  <div class="sticky top-0">
    <SectionFour />
  </div>

  <div class="sticky top-0">
    <SectionFive />
  </div>

  <div class="sticky top-0">
    <SectionSix />
  </div>

  <div class="sticky top-0">
    <SectionSeven />
  </div>
  <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import SectionOne from "./components/SectionOne.vue";
import SectionTwo from "./components/SectionTwo.vue";
import SectionThree from "./components/SectionThree.vue"
import SectionFour from "./components/SectionFour.vue";
import SectionFive from "./components/SectionFive.vue";
import SectionSix from "./components/SectionSix.vue";
import SectionSeven from "./components/SectionSeven.vue";
import Footer from "./components/Footer.vue";


import CardHero from "./assets/CardHero.svg";
import Vector from "./assets/Vector.svg";
import AFrontLes from "./assets/AFrontLes.svg";

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
</script>

<style scope>
.text-move {
  animation: move 60s linear infinite;
}

@keyframes move {
  to { transform: translateX(-100%); }
}
</style>