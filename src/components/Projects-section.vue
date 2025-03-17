<template>
    <div class="projects-section flex flex-wrap justify-center gap-6 rounded-lg">
        <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h3 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h3>
        </div>
        <ProjectCard 
            v-for="project in Projects" 
            :key="project.id" 
            :title="project.title" 
            :description="project.description" 
            :image="project.image" 
            :link="project.link" 
            @mouseover="hoveredProject = project.id"
            @mouseleave="hoveredProject = null"
            :class="{
                'opacity-50': hoveredProject !== null && hoveredProject !== project.id,
                'transition duration-300': true
            }"
        />
    </div>
</template>

<script>
import ProjectCard from './Project-card.vue';

export default {
    name: 'ProjectsSection',
    components: {
        ProjectCard
    },
    data() {
        return {
            hoveredProject: null, // Tracks the currently hovered project
            Projects: [
                {
                    id: 1,
                    title: 'Car rental website',
                    description: 'A freelance project I worked on for a car rental company, i used Vue and bootsrap to build it and used VueX for state management and axios for API calls',
                    image: require('../assets/anistour.jpeg'),
                    link: 'https://www.example.com'
                },
                {
                    id: 2,
                    title: 'Crypto chat website',
                    description: 'A chat website that talks about crypto currency and meme coins for a friend of mine, the website is built with Vue and uses openai API playgrounds bot for the chatbot',
                    image: require('../assets/aibot.jpeg'),
                    link: 'https://www.example.com'
                },
                {
                    id: 3,
                    title: 'Serenity',
                    description: 'A personal project of mine that i built as my first project to test my skills, it is a website that allows the user to book online therapy sessions with a therapist and can talk to them via chat or video call, built with Vue for the frontend and Laravel for the backend. Firebase is used for chat and WebRTC signaling for video calls.',
                    image: require('../assets/serenity.jpeg'),
                    link: 'https://www.example.com'
                }
            ]
        };
    }
};
</script>



<style scoped>

</style>