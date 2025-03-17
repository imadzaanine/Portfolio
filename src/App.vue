<template>
  <div class="relative w-full h-screen text-white flex items-center justify-center" @mousemove="handleMouseMove">
    <HomePage />
    <!-- Cursor Effect -->
    <div class="absolute pointer-events-none transition-all duration-75 transform -translate-x-1/2 -translate-y-1/2"
      :style="cursorStyle">
      <div class="w-96 h-96 bg-blue-700/15 opacity-50 rounded-full blur-3xl"></div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import HomePage from "./components/Home-page.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
  setup() {
    const mouseX = ref(0);
    const mouseY = ref(0);

    const handleMouseMove = (event) => {
      mouseX.value = event.pageX;
      mouseY.value = event.pageY;
    };

    const cursorStyle = computed(() => ({
      left: `${mouseX.value}px`,
      top: `${mouseY.value}px`,
    }));

    return { handleMouseMove, cursorStyle };
  },
};
</script>

<style>
body {
  font-family: "Inter", sans-serif;
  background-color: #0f172a;
  scroll-behavior: smooth;
}
</style>
