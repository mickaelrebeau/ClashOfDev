import confetti from "canvas-confetti";
import { onMounted, onUnmounted } from "vue";

export function useKonamiCode() {
  const konamiCode =
    "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,KeyB,KeyQ".split(
      ","
    );
  let konamiCodePosition = 0;

  const handleKeydown = (event) => {
    const key = event.code;

    if (key === konamiCode[konamiCodePosition]) {
      konamiCodePosition++;

      if (konamiCodePosition === konamiCode.length) {
        triggerConfetti();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
  });
}
