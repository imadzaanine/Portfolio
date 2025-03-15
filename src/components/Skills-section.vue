<template>
    <section class="skills-section">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4">Skills</h2>
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