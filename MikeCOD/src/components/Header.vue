<template>
  <nav class="w-full mx-auto flex justify-between items-center p-9">
    <div class="bg-cod-black rounded-full px-3 py-2 rotate-12">
      <p class="text-sm font-bold uppercase text-cod-white">la piscine</p>
    </div>
    <p class="text-sm text-cod-black font-semibold">{{ scrollPercentage }}%</p>
    <label class="switch rounded-3xl px-3 py-2">
      <input type="checkbox" @click="toggleButton" />
      <span class="slider"></span>
    </label>
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

const toggleButton = () => {
  console.log(`
 ▄████▄   ██▓    ▄▄▄       ▄████▄   ██░ ██     ▒█████    █████▒   ▓█████▄ ▓█████ ██▒   █▓
▒██▀ ▀█  ▓██▒   ▒████▄    ▒██▀ ▀█  ▓██░ ██▒   ▒██▒  ██▒▓██   ▒    ▒██▀ ██▌▓█   ▀▓██░   █▒
▒▓█    ▄ ▒██░   ▒██  ▀█▄  ▒▓█    ▄ ▒██▀▀██░   ▒██░  ██▒▒████ ░    ░██   █▌▒███   ▓██  █▒░
▒▓▓▄ ▄██▒▒██░   ░██▄▄▄▄██ ▒▓▓▄ ▄██▒░▓█ ░██    ▒██   ██░░▓█▒  ░    ░▓█▄   ▌▒▓█  ▄  ▒██ █░░
▒ ▓███▀ ░░██████▒▓█   ▓██▒▒ ▓███▀ ░░▓█▒░██▓   ░ ████▓▒░░▒█░       ░▒████▓ ░▒████▒  ▒▀█░  
░ ░▒ ▒  ░░ ▒░▓  ░▒▒   ▓▒█░░ ░▒ ▒  ░ ▒ ░░▒░▒   ░ ▒░▒░▒░  ▒ ░        ▒▒▓  ▒ ░░ ▒░ ░  ░ ▐░  
  ░  ▒   ░ ░ ▒  ░ ▒   ▒▒ ░  ░  ▒    ▒ ░▒░ ░     ░ ▒ ▒░  ░          ░ ▒  ▒  ░ ░  ░  ░ ░░  
░          ░ ░    ░   ▒   ░         ░  ░░ ░   ░ ░ ░ ▒   ░ ░        ░ ░  ░    ░       ░░  
░ ░          ░  ░     ░  ░░ ░       ░  ░  ░       ░ ░                ░       ░  ░     ░  
░                         ░                                        ░                 ░   
`);
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(38, 38, 37, 0.75);
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  background-image: url("../assets/Switch.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.4s;
}

input:checked + .slider {
  background-color: var(--cod-black);
}

input:focus + .slider {
  box-shadow: 0 0 2px var(--cod-black);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
