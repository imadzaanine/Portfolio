<template>
    <div class="skills-card">
        <div class="flex items-center gap-2">
            <img :src="require(`../assets/${icon}.svg`)" alt="Skill Icon" class="w-8 h-8 object-cover" />
            <h3 class="text-lg font-semibold">{{ title }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillsCard',
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
       
    }
}
</script>

<style scoped>

</style>