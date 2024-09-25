<template>
  <section class="bg-cod-white top-rounded mx-auto max-w-card h-custom lg:h-card mb-[215px] lg:mb-0">
    <div class="mx-auto h-custom lg:h-card w-full lg:w-card bg-cod-black rounded-card p-4 lg:p-12 flex flex-col justify-center items-center -z-20">
      <p class="px-6 mt-8 lg:mt-24 w-full text-xs lg:text-sm font-bold uppercase text-cod-white opacity-80">/final02</p>
      <p class="p-6 pt-24 lg:pt-0 text-justify font-semibold text-cod-white text-cod lg:text-custom relative">
        Click Me ? Might enter the finals
        <img :src="VectorSeven" alt="" class="icon-move absolute bottom-[230px] lg:bottom-[60px] right-8 lg:right-44">
      </p>
      <div class="relative">
        <button class="btn-hover bg-cod-white border rounded-full px-12 py-5 mt-24 relative z-10" @click="OnClick">
          <p class="text-sm font-bold text-cod-black">Enter Next Level</p>
          <img :src="VectorFlash" alt="" class="icon-move absolute bottom-[-20px] right-2">
          <img :src="VectorStar" alt="" class="icon-move-two absolute top-[-20px] left-[-10px]">
        </button>
        <img :src="VectorDev" alt="" class="icon-move-three absolute bottom-8 right-[-25px]">
        <img :src="Trophy" alt="" class="trophy-icon absolute bottom-[60px] right-[40px]">
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import VectorDev from '../assets/VectorDev.svg';
import VectorFlash from '../assets/VectorFlash.svg';
import VectorSeven from '../assets/VectorSeven.svg';
import VectorStar from '../assets/VectorStar.svg';
import Trophy from '../assets/Trophy.svg';

import Footer from "./Footer.vue";

const OnClick = () => {
  console.log('Rick Rolled ! :p');
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}
</script>

<style scoped>
.icon-move,
.icon-move-two,
.icon-move-three {
  transition: transform 0.3s ease;
}

.btn-hover {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.btn-hover:hover {
  background-color: var(--cod-black);
  border-color: var(--cod-white);
}

.btn-hover:hover > p {
  color: var(--cod-white);
}

.btn-hover:hover .icon-move {
  transform: translateX(10px) translateY(10px);
}

.btn-hover:hover .icon-move-two {
  transform: translateX(-5px) translateY(-5px);
}

.btn-hover:hover ~ .icon-move-three {
  transform: translateX(10px) translateY(-10px);
}

.top-rounded {
  border-radius: 60px 60px 0 0;
}

.trophy-icon {
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.btn-hover:hover ~ .trophy-icon {
  opacity: 1;
  transform: translateY(0);
}
</style>