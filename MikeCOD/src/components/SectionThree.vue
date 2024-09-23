<template>
    <section class="mx-auto h-custom lg:h-card w-full lg:w-card bg-cod-green border rounded-card p-4 lg:p-8 relative overflow-hidden">
        <div class="flex justify-between items-center px-4">
            <div class="flex justify-start lg:justify-between items-start p-4 lg:p-6 gap-8 lg:gap-20 text-sm">
                <div class="flex flex-col justify-between items-start text-cod-black opacity-80 text-xs lg:text-sm">
                    <p class="uppercase font-semibold">motion</p>
                    <p class="font-semibold">/3 pts</p>
                </div>
                <h2 class="text-cod-black font-semibold uppercase">LE MAITRE DE LA FLUIDITÉ</h2>
            </div>
            <div class="hidden lg:flex gap-4">
                <img :src="ChrisGreen" alt="">
                <img :src="LinaGreen" alt="">
            </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-between items-start px-8 lg:px-4 relative">
           <div class="block lg:hidden absolute top-[-25px] right-0">
                <img :src="ChrisGreen" alt="" class="mb-4">
                <img :src="LinaGreen" alt="">
            </div>
            <img :src="SectionThree" alt="">
            <div class="p-0 lg:p-4 mt-6 lg:mt-0 text-cod-black flex flex-col gap-8 text-xs lg:text-sm opacity-60 font-medium">
                <p>
                    Aucun composant ne s’affiche sans une <span class="font-semibold text-cod-black">animation soignée</span>. Ses transitions sont légères, dynamiques et fluides, captivant l'utilisateur à chaque interaction.
                </p>
                <p>
                    Ce dev a l’oeil et maitrise <span class="font-semibold text-cod-black">le motion</span> mieux que n’importe qui.  
                </p>
            </div>
        </div>
        <img class="absolute bottom-0 right-0 block lg:hidden w-28 h-28" :src="StickerThree" alt="">
        <img class="absolute bottom-0 right-0 hidden lg:block" :src="StickerThree" alt="">
    </section>
</template>

<script setup>
import SectionThree from '../assets/SectionThree.svg';
import LinaGreen from '../assets/LinaGreen.svg';
import ChrisGreen from '../assets/ChrisGreen.svg';
import StickerThree from '../assets/StickerThree.svg';
</script>

<style scoped></style>