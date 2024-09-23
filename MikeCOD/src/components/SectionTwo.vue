<template>
    <section class="mx-auto h-custom lg:h-card w-full lg:w-card bg-cod-pink border rounded-card p-4 lg:p-8 relative overflow-hidden">
        <div class="flex justify-between items-center px-4">
            <div class="flex justify-start lg:justify-between items-start p-4 lg:p-6 gap-8 lg:gap-20 text-sm">
                <div class="flex flex-col justify-between items-start text-cod-black opacity-80 text-xs lg:text-sm">
                    <p class="uppercase font-semibold">code</p>
                    <p class="font-semibold">/6 pts</p>
                </div>
                <h2 class="text-cod-black font-semibold uppercase">LE BÂTISSEUR DE CODE</h2>
            </div>
            <img :src="ChrisPink" alt="" class="hidden lg:block">
        </div>
        <div class="flex flex-col lg:flex-row justify-between items-start px-4 relative">
            <img :src="ChrisPink" alt="" class="block lg:hidden absolute top-[-25px] right-0">
            <img :src="SectionTwo" alt="">
            <div class="p-0 lg:p-6 mt-6 lg:mt-0 text-cod-black flex flex-col gap-8 text-xs lg:text-sm opacity-60 font-medium">
                <p>
                    Ses lignes de code sont des fondations solides. C’est <span class="font-semibold text-cod-black">un maître du front</span>, capable de structurer les systèmes les plus complexes sans se casser la tête.
                </p>
                <p> 
                    <span class="font-semibold text-cod-black">Maitre de VSCode</span>, il a surement fini le challenge en s’assurant d’avoir le code le plus clair et le plus propre des 36 participants.
                </p>
            </div>
        </div>
        <img class="absolute bottom-0 right-0 block lg:hidden w-28 h-28" :src="StickerTwo" alt="">
        <img class="absolute bottom-0 right-0 hidden lg:block" :src="StickerTwo" alt="">
    </section>
</template>

<script setup>
import SectionTwo from '../assets/SectionTwo.svg';
import ChrisPink from '../assets/ChrisPink.svg';
import StickerTwo from '../assets/StickerTwo.svg';
</script>

<style scoped></style>