<template>
    <section class="mx-auto h-card w-card bg-cod-dark-blue border rounded-card p-8 relative overflow-hidden">
        <div class="flex justify-between items-center px-4">
            <div class="flex justify-between items-start p-4 mb-6 gap-20 text-sm">
                <div class="flex flex-col justify-between items-start text-cod-black opacity-80">
                    <p class="uppercase font-medium">responsive</p>
                    <p>/2 pts</p>
                </div>
                <h2 class="text-cod-black font-semibold uppercase">LE CHERCHEUR DE BREAKPOINT</h2>
            </div>
            <div class="flex gap-4">
                <img :src="LinaDarkBlue" alt="">
                <img :src="ChrisDarkBlue" alt="">
            </div>
        </div>
        <div class="flex justify-between items-start px-4">
            <img :src="SectionFour" alt="">
            <div class="p-6 text-cod-black flex flex-col gap-8 text-sm opacity-60 font-medium">
                <p>
                    Quelle que soit la taille de l’écran, il garantit une expérience utilisateur sans faille. Chaque site <span class="font-semibold text-cod-black">s’adapte à tous les supports</span>, du mobile au grand écran.
                </p>
                <p>
                    Il fait attention à <span class="font-semibold text-cod-black">chaque breakpoint</span> attentivement, on ne pourra pas le reprendre à l’inspection!
                </p>
            </div>
        </div>
        <img class="absolute bottom-0 right-0" :src="StickerFour" alt="">
    </section>
</template>

<script setup>
import SectionFour from '../assets/sectionFour.svg';
import LinaDarkBlue from '../assets/LinaDarkBlue.svg';
import ChrisDarkBlue from '../assets/ChrisDarkBlue.svg';
import StickerFour from '../assets/stickerFour.svg';
</script>

<style scoped></style>