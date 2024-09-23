<template>
    <section class="mx-auto h-custom lg:h-card w-full lg:w-card bg-cod-orange border rounded-card p-4 lg:p-8 relative overflow-hidden">
        <div class="flex justify-between items-center px-4">
            <div class="flex justify-start lg:justify-between items-start p-4 lg:p-6 gap-8 lg:gap-20 text-sm">
                <div class="flex flex-col justify-between items-start text-cod-black opacity-80 text-xs lg:text-sm">
                    <p class="uppercase font-semibold">big boss</p>
                    <p class="font-semibold">/Infinite pts</p>
                </div>
                <h2 class="text-cod-black font-semibold uppercase">LE SUR-BOOSTED</h2>
            </div>
            <div class="hidden lg:flex gap-4">
                <img :src="ChrisOrange" alt="">
                <img :src="LinaOrange" alt="">
            </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-between items-start px-8 lg:px-4 relative">
            <div class="block lg:hidden absolute top-[-25px] right-0">
                <img :src="LinaOrange" alt="">
                <img :src="ChrisOrange" alt="">
            </div>
            <img :src="SectionSix" alt="">
            <div class="p-0 lg:p-4 mt-6 lg:mt-0 text-cod-black flex flex-col gap-8 text-xs lg:text-sm opacity-60 font-medium">
                <p>
                    Il excelle dans tous les domaines, alliant design, propreté de code, réactivité, animations fluides et créativité cachée. <span class="font-semibold text-cod-black">Un vrai prodige</span> qui a su briller dans chaque aspect du développement.
                </p>
                <p>
                    Ce dev aux <span class="font-semibold text-cod-black">multitalents</span> a reçu la standing ovation du jury.
                </p>
            </div>
        </div>
        <img class="absolute bottom-0 right-0 block lg:hidden w-28 h-28" :src="StickerSix" alt="">
        <img class="absolute bottom-0 right-0 hidden lg:block" :src="StickerSix" alt="">
    </section>
</template>

<script setup>
import SectionSix from '../assets/SectionSix.svg';
import LinaOrange from '../assets/LinaOrange.svg';
import ChrisOrange from '../assets/ChrisOrange.svg';
import StickerSix from '../assets/StickerSix.svg';
</script>

<style scoped></style>