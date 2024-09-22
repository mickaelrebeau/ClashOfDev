<template>
  <nav class="flex justify-between items-center p-9">
    <div class="bg-cod-black rounded-full px-3 py-2 rotate-12">
      <p class="text-sm font-bold uppercase">la piscine</p>
    </div>
    <p class="text-sm text-cod-black font-semibold">{{ scrollPercentage }}%</p>
    <div class="bg-cod-black rounded-full px-3 py-2">
      <p class="text-sm font-bold uppercase">la piscine</p>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollPercentage = ref(0);

const updateProgressBar = () => {
  const progressBar = document.getElementById("progress-bar");
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = (scrollTop / documentHeight) * 100;

  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }

  scrollPercentage.value = Math.round(percentage);
};

onMounted(() => {
  window.addEventListener('scroll', updateProgressBar);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgressBar);
});
</script>
