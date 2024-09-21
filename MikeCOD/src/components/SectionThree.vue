<template>
    <section class="mx-auto h-card w-card bg-cod-green border rounded-card p-8 relative overflow-hidden">
        <div class="flex justify-between items-center px-4">
            <div class="flex justify-between items-start p-4 mb-6 gap-20 text-sm">
                <div class="flex flex-col justify-between items-start text-cod-black opacity-80">
                    <p class="uppercase font-medium">motion</p>
                    <p>/3 pts</p>
                </div>
                <h2 class="text-cod-black font-semibold uppercase">LE MAITRE DE LA FLUIDITÉ</h2>
            </div>
            <div class="flex gap-4">
                <img :src="LinaGreen" alt="">
                <img :src="ChrisGreen" alt="">
            </div>
        </div>
        <div class="flex justify-between items-start px-4">
            <img :src="SectionThree" alt="">
            <div class="p-6 text-cod-black flex flex-col gap-8 text-sm opacity-60 font-medium">
                <p>
                    Aucun composant ne s’affiche sans une <span class="font-semibold text-cod-black">animation soignée</span>. Ses transitions sont légères, dynamiques et fluides, captivant l'utilisateur à chaque interaction.
                </p>
                <p>
                    Ce dev a l’oeil et maitrise <span class="font-semibold text-cod-black">le motion</span> mieux que n’importe qui.  
                </p>
            </div>
        </div>
        <img class="absolute bottom-0 right-0" :src="StickerThree" alt="">
    </section>
</template>

<script setup>
import SectionThree from '../assets/sectionThree.svg';
import LinaGreen from '../assets/LinaGreen.svg';
import ChrisGreen from '../assets/ChrisGreen.svg';
import StickerThree from '../assets/stickerThree.svg';
</script>

<style scoped></style>