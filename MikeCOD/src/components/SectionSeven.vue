<template>
    <section class="mx-auto h-card w-card bg-cod-black border rounded-card p-12 flex flex-col justify-center items-center -z-20">
        <p class="w-full text-sm font-bold uppercase text-cod-white opacity-80">/final02</p>
        <p class="p-8 text-justify font-semibold text-cod-white text-custom relative">
            Click Me ? Might enter the finals
            <img :src="VectorSeven" alt="" class="absolute bottom-[60px] right-44">
        </p>
        <button class="bg-cod-white border rounded-full px-12 py-5 mt-24 relative z-0">
            <p class="text-sm font-bold text-cod-black">Enter Next Level</p>
            <img :src="VectorDev" alt="" class="absolute bottom-8 right-[-25px] -z-10">
            <img :src="VectorFlash" alt="" class="absolute bottom-[-20px] right-2">
            <img :src="VectorStar" alt="" class="absolute top-[-20px] left-[-10px]">
        </button>
    </section>
</template>

<script setup>
import VectorDev from '../assets/VectorDev.svg';
import VectorFlash from '../assets/VectorFlash.svg';
import VectorSeven from '../assets/VectorSeven.svg';
import VectorStar from '../assets/VectorStar.svg';
</script>

<style scoped></style>