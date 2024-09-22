<template>
    <section class="mx-auto h-card w-card bg-cod-yellow border rounded-card p-8 relative overflow-hidden">
        <div class="flex justify-between items-center px-4">
            <div class="flex justify-between items-start p-4 mb-6 gap-20 text-sm">
                <div class="flex flex-col justify-between items-start text-cod-black opacity-80">
                    <p class="uppercase font-semibold">easter egg</p>
                    <p class="font-semibold">/3 pts</p>
                </div>
                <h2 class="text-cod-black font-semibold uppercase">LE MAITRE DES SECRETS</h2>
            </div>
            <div class="flex gap-4">
                <img :src="LinaYellow" alt="">
                <img :src="ChrisYellow" alt="">
            </div>
        </div>
        <div class="flex justify-between items-start px-4">
            <img :src="SectionFive" alt="">
            <div class="p-6 text-cod-black flex flex-col gap-8 text-sm opacity-60 font-medium">
                <p>
                    Derrière une ligne de code bien choisie se cache un <span class="font-semibold text-cod-black">secret bien gardé</span>. Il glisse la surprise qui surprendra les utilisateurs les plus curieux.
                </p>
                <p>
                    Dev attentif aux comportements utilisateurs il saura cacher <span class="font-semibold text-cod-black">l’Easter Egg</span> au meilleur endroit.
                </p>
            </div>
        </div>
        <img class="absolute bottom-0 right-0" :src="StickerFive" alt="">
    </section>
</template>

<script setup>
import SectionFive from '../assets/sectionFive.svg';
import LinaYellow from '../assets/LinaYellow.svg';
import ChrisYellow from '../assets/ChrisYellow.svg';
import StickerFive from '../assets/stickerFive.svg';
</script>

<style scoped></style>