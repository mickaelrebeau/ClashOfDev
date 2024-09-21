<template>
    <section class="mx-auto h-card w-card bg-cod-orange border rounded-card p-8 relative overflow-hidden">
        <div class="flex justify-between items-center px-4">
            <div class="flex justify-between items-start p-4 mb-6 gap-20 text-sm">
                <div class="flex flex-col justify-between items-start text-cod-black opacity-80">
                    <p class="uppercase font-medium">big boss</p>
                    <p>/Infinite pts</p>
                </div>
                <h2 class="text-cod-black font-semibold uppercase">LE SUR-BOOSTED</h2>
            </div>
            <div class="flex gap-4">
                <img :src="LinaOrange" alt="">
                <img :src="ChrisOrange" alt="">
            </div>
        </div>
        <div class="flex justify-between items-start px-4">
            <img :src="SectionSix" alt="">
            <div class="p-6 text-cod-black flex flex-col gap-8 text-sm opacity-60 font-medium">
                <p>
                    Il excelle dans tous les domaines, alliant design, propreté de code, réactivité, animations fluides et créativité cachée. <span class="font-semibold text-cod-black">Un vrai prodige</span> qui a su briller dans chaque aspect du développement.
                </p>
                <p>
                    Ce dev aux <span class="font-semibold text-cod-black">multitalents</span> a reçu la standing ovation du jury.
                </p>
            </div>
        </div>
        <img class="absolute bottom-0 right-0" :src="StickerSix" alt="">
    </section>
</template>

<script setup>
import SectionSix from '../assets/sectionSix.svg';
import LinaOrange from '../assets/LinaOrange.svg';
import ChrisOrange from '../assets/ChrisOrange.svg';
import StickerSix from '../assets/stickerSix.svg';
</script>

<style scoped></style>