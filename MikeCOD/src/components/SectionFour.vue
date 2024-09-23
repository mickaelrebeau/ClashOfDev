<template>
    <section class="mx-auto h-custom lg:h-card w-full lg:w-card bg-cod-dark-blue border rounded-card p-4 lg:p-8 relative overflow-hidden">
        <div class="flex justify-between items-center px-4">
            <div class="flex justify-start lg:justify-between items-start p-4 lg:p-6 gap-8 lg:gap-20 text-sm">
                <div class="flex flex-col justify-between items-start text-cod-black opacity-80 text-xs lg:text-sm">
                    <p class="uppercase font-semibold">responsive</p>
                    <p class="font-semibold">/2 pts</p>
                </div>
                <h2 class="text-cod-black font-semibold uppercase">LE CHERCHEUR DE BREAKPOINT</h2>
            </div>
            <div class="hidden lg:flex gap-4">
                <img :src="ChrisDarkBlue" alt="">
                <img :src="LinaDarkBlue" alt="">
            </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-between items-start px-8 lg:px-4 relative">
            <div class="block lg:hidden absolute top-[-25px] right-0">
                <img :src="LinaDarkBlue" alt="">
                <img :src="ChrisDarkBlue" alt="">
            </div>
            <img :src="SectionFour" alt="">
            <div class="p-0 lg:p-4 mt-6 lg:mt-0 text-cod-black flex flex-col gap-8 text-xs lg:text-sm opacity-60 font-medium">
                <p>
                    Quelle que soit la taille de l’écran, il garantit une expérience utilisateur sans faille. Chaque site <span class="font-semibold text-cod-black">s’adapte à tous les supports</span>, du mobile au grand écran.
                </p>
                <p>
                    Il fait attention à <span class="font-semibold text-cod-black">chaque breakpoint</span> attentivement, on ne pourra pas le reprendre à l’inspection!
                </p>
            </div>
        </div>
        <img class="absolute bottom-0 right-0 block lg:hidden w-28 h-28" :src="StickerFour" alt="">
        <img class="absolute bottom-0 right-0 hidden lg:block" :src="StickerFour" alt="">
    </section>
</template>

<script setup>
import SectionFour from '../assets/SectionFour.svg';
import LinaDarkBlue from '../assets/LinaDarkBlue.svg';
import ChrisDarkBlue from '../assets/ChrisDarkBlue.svg';
import StickerFour from '../assets/StickerFour.svg';
</script>

<style scoped></style>