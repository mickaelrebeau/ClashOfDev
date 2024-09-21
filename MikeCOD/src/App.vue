<template>
  <div class="max-w-144 mx-auto overflow-hidden h-screen">
    <div class="sticky top-0">
      <Header />
    </div>
    <section class="flex justify-between items-center h-custom">
      <div>
        <h1 class="font-semibold text-cod-black text-custom">Que le plus fort,</h1>
        <div class="flex justify-start items-center gap-8">
          <img :src="Vector" alt="">
          <h2 class="font-semibold text-cod-black text-custom">l'emporte!</h2>
        </div>
      </div>
      <img :src="CardHero" alt="">
    </section>
    <div class="w-[3677px] h-[174px]">
      <img class="bg-cover text-move" :src="AFrontLes" alt="">
    </div>
  </div>
  <SectionOne />
  <SectionTwo />
  <SectionThree />
  <SectionFour />
  <SectionFive />
  <SectionSix />
  <SectionSeven />
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
</script>

<style scope>
.text-move {
  animation: move 60s linear infinite;
}

@keyframes move {
  to { transform: translateX(-100%); }
}
</style>