<template>
    <div
        class="project-card flex p-4 items-center justify-center group bg-transparent hover:bg-white hover:bg-opacity-10 transition-all duration-300 rounded-lg cursor-pointer">
        <img :src="image" alt="Project Image" class="w-30 h-16 object-cover rounded-lg flex-shrink-0" />
        <div class="p-4 flex-1">
            <div class="forward flex items-center gap-2">
                <h2
                    class="text-white text-opacity-80 text-lg font-semibold group-hover:text-[#57d9d4] transition-colors duration-300">
                    {{ title }}
                </h2>
                <MoveUpRight :size="16"
                    class="text-white group-hover:text-[#57d9d4] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>


            <p class="text-[#7787a4] text-sm">{{ description }}</p>
        </div>
    </div>
</template>



<script>
import { MoveUpRight } from 'lucide-vue-next';
export default {
    name: 'ProjectCard',
    components: {
        MoveUpRight
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            // Define your data properties here
        };
    },
    methods: {
        // Define your methods here
    }
};
</script>

<style scoped></style>