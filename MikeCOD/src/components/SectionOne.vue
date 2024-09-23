<template>
    <section class="mx-auto h-custom lg:h-card w-full lg:w-card bg-cod-blue border rounded-card p-4 lg:p-8 relative overflow-hidden">
        <div class="flex justify-between items-center px-4">
            <div class="flex justify-start lg:justify-between items-start p-4 lg:p-6 gap-8 lg:gap-20 text-sm">
                <div class="flex flex-col justify-between items-start text-cod-black opacity-80 text-xs lg:text-sm">
                    <p class="uppercase font-semibold">design</p>
                    <p class="font-semibold">/6 pts</p>
                </div>
                <h2 class="text-cod-black font-semibold uppercase">L'artiste de renom</h2>
            </div>
            <img :src="Maislina" alt="" class="hidden lg:block">
        </div>
        <div class="flex flex-col lg:flex-row justify-between items-start px-8 lg:px-4 relative">
            <img :src="Maislina" alt="" class="block lg:hidden absolute top-[-25px] right-0">
            <img :src="SectionOne" alt="">
            <div class="p-0 lg:p-4 mt-6 lg:mt-0 text-cod-black flex flex-col gap-8 text-xs lg:text-sm opacity-60 font-medium">
                <p>
                    <span class="font-semibold text-cod-black">Le design</span>, c’est son terrain de jeu. 
                    Il maîtrise et retranscrit correctement chaque pixel de la maquette.
                </p>
                <p>
                    Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing ou de border-radius ; 
                    <span class="font-semibold text-cod-black">Figma n’a aucun secret pour ce Dev de talent.</span>
                </p>
            </div>
        </div>
        <img class="absolute bottom-0 right-0 block lg:hidden w-28 h-28" :src="StickerOne" alt="">
        <img class="absolute bottom-0 right-0 hidden lg:block" :src="StickerOne" alt="">
    </section>
</template>

<script setup>
import SectionOne from '../assets/SectionOne.svg';
import Maislina from '../assets/Maislina.svg';
import StickerOne from '../assets/StickerOne.svg';
</script>

<style scoped></style>