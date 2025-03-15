<template>
  <div class=" w-full h-screen text-white flex items-center justify-center">
    <HomePage />
  </div>
</template>


<script>
import HomePage from './components/Home-page.vue';
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>

body {
  font-family: 'Inter', sans-serif;
  background-color: #0f172a;
  scroll-behavior: smooth;
  
}

</style>
