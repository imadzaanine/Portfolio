<template>
  <section class="hero-section flex flex-col justify-between lg:fixed lg:h-[80vh] gap-y-10">
    <div class="text-menu-section flex flex-col items-start justify-center space-y-14 w-2/3">
      <div class="text-section space-y-4">
        <a href="#" class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Zaanine Imad Eddine</a>
        <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front End Developer</h2>
        <p class="text-[#7787a4]">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>
      <div class="menu-section space-y-4 hidden lg:block">
        <div class="inline-flex flex-col items-start space-y-4">
          <div @click="scrollToSection('About')" class="inline-flex items-center space-x-4 cursor-pointer group">
            <div class="w-8 h-[1px] mt-0.5 bg-slate-500 transition-all duration-300 group-hover:w-20 group-hover:bg-white"
                 :class="{ '!w-20 bg-white': section === 'About' }"></div>
            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  :class="{ 'text-white': section === 'About' }">About</span>
          </div>
          <div @click="scrollToSection('Projects')" class="inline-flex items-center space-x-4 cursor-pointer group">
            <div class="w-8 h-[1px] mt-0.5 bg-slate-500 transition-all duration-300 group-hover:w-20 group-hover:bg-white"
                 :class="{ '!w-20 bg-white': section === 'Projects' }"></div>
            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  :class="{ 'text-white': section === 'Projects' }">Projects</span>
          </div>
          <div @click="scrollToSection('Skills')" class="inline-flex items-center space-x-4 cursor-pointer group">
            <div class="w-8 h-[1px] mt-0.5 bg-slate-500 transition-all duration-300 group-hover:w-20 group-hover:bg-white"
                 :class="{ '!w-20 bg-white': section === 'Skills' }"></div>
            <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  :class="{ 'text-white': section === 'Skills' }">Skills</span>
          </div>
        </div>
      </div>
    </div>
    <div class="contacts flex items-center space-x-8 mb-8">
      <a href="https://github.com/imadzaanine" target="_blank"><Github/></a>
      <a href="https://www.linkedin.com/in/imad-zaanine-059794323/" target="_blank"><Linkedin/></a>
    </div>
  </section>
</template>

<script>
import { useSectionStore } from "../stores/Section";
import { storeToRefs } from "pinia";
import { Github, Linkedin } from "lucide-vue-next";

export default {
  name: "HeroSection",
  components: {
    Github,
    Linkedin,
  },
  props: {
    scrollToSection: Function, // 
  },
  setup() {
    const sectionStore = useSectionStore();
    const { section } = storeToRefs(sectionStore);
    return { section };
  },
};
</script>
