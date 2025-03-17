<template>
    <section class="skills-section">
        <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h3 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h3>
        </div>
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4 hidden lg:block">Skills</h2>
            <p class="text-gray-400 mb-6">Here are some of the technologies I work with.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillsCard title="HTML" icon="html" />
                <SkillsCard title="CSS" icon="css" />
                <SkillsCard title="JavaScript" icon="javascript" />
                <SkillsCard title="Vue" icon="vue" />
                <SkillsCard title="Tailwind CSS" icon="tailwindcss" />
                <SkillsCard title="Bootstrap" icon="bootstrap" />
                <SkillsCard title="Node.js" icon="node-js" />
                <SkillsCard title="Express" icon="express" />
                <SkillsCard title="Firebase" icon="firebase" />
                <SkillsCard title="Git" icon="git" />
                <SkillsCard title="Figma" icon="figma" />
            </div>
        </div>
    </section>
</template>

<script>
import SkillsCard from './Skills-card.vue';
export default {
    name: 'SkillsSection',
    components: {
        SkillsCard
    }
};
</script>

<style scoped>
</style>