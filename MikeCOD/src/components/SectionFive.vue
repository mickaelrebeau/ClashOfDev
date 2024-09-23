<template>
    <section class="mx-auto h-custom lg:h-card w-full lg:w-card bg-cod-yellow border rounded-card p-4 lg:p-8 relative overflow-hidden">
        <div class="flex justify-between items-center px-4">
            <div class="flex justify-start lg:justify-between items-start p-4 lg:p-6 gap-8 lg:gap-20 text-sm">
                <div class="flex flex-col justify-between items-start text-cod-black opacity-80 text-xs lg:text-sm">
                    <p class="uppercase font-semibold">easter egg</p>
                    <p class="font-semibold">/3 pts</p>
                </div>
                <h2 class="text-cod-black font-semibold uppercase">LE MAITRE DES SECRETS</h2>
            </div>
            <div class="hidden lg:flex gap-4">
                <img :src="ChrisYellow" alt="">
                <img :src="LinaYellow" alt="">
            </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-between items-start px-8 lg:px-4 relative">
            <div class="block lg:hidden absolute top-[-25px] right-0">
                <img :src="LinaYellow" alt="">
                <img :src="ChrisYellow" alt="">
            </div>
            <img :src="SectionFive" alt="">
            <div class="p-0 lg:p-4 mt-6 lg:mt-0 text-cod-black flex flex-col gap-8 text-xs lg:text-sm opacity-60 font-medium">
                <p>
                    Derrière une ligne de code bien choisie se cache un <span class="font-semibold text-cod-black">secret bien gardé</span>. Il glisse la surprise qui surprendra les utilisateurs les plus curieux.
                </p>
                <p>
                    Dev attentif aux comportements utilisateurs il saura cacher <span class="font-semibold text-cod-black">l’Easter Egg</span> au meilleur endroit.
                </p>
            </div>
        </div>
        <img class="absolute bottom-0 right-0 block lg:hidden w-28 h-28" :src="StickerFive" alt="">
        <img class="absolute bottom-0 right-0 hidden lg:block" :src="StickerFive" alt="">
    </section>
</template>

<script setup>
import SectionFive from '../assets/SectionFive.svg';
import LinaYellow from '../assets/LinaYellow.svg';
import ChrisYellow from '../assets/ChrisYellow.svg';
import StickerFive from '../assets/StickerFive.svg';
</script>

<style scoped></style>