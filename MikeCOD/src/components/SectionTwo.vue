<template>
    <section class="mx-auto h-card w-card bg-cod-pink border rounded-card p-8 relative overflow-hidden">
        <div class="flex justify-between items-center px-4">
            <div class="flex justify-between items-start p-4 mb-6 gap-20 text-sm">
                <div class="flex flex-col justify-between items-start text-cod-black opacity-80">
                    <p class="uppercase font-semibold">code</p>
                    <p class="font-semibold">/6 pts</p>
                </div>
                <h2 class="text-cod-black font-semibold uppercase">LE BÂTISSEUR DE CODE</h2>
            </div>
            <img :src="ChrisPink" alt="">
        </div>
        <div class="flex justify-between items-start px-4">
            <img :src="SectionTwo" alt="">
            <div class="p-6 text-cod-black flex flex-col gap-8 text-sm opacity-60 font-medium">
                <p>
                    Ses lignes de code sont des fondations solides. C’est <span class="font-semibold text-cod-black">un maître du front</span>, capable de structurer les systèmes les plus complexes sans se casser la tête.
                </p>
                <p> 
                    <span class="font-semibold text-cod-black">Maitre de VSCode</span>, il a surement fini le challenge en s’assurant d’avoir le code le plus clair et le plus propre des 36 participants.
                </p>
            </div>
        </div>
        <img class="absolute bottom-0 right-0" :src="StickerTwo" alt="">
    </section>
</template>

<script setup>
import SectionTwo from '../assets/sectionTwo.svg';
import ChrisPink from '../assets/ChrisPink.svg';
import StickerTwo from '../assets/stickerTwo.svg';
</script>

<style scoped></style>