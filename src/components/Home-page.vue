<template>
    <div class="container h-full flex flex-col lg:pt-20 lg:pl-40 lg:pr-20 space-y-10 lg:space-y-0 p-10">
        <HeroSection :scrollToSection="scrollToSection" />
        <div ref="scrollContainer" class="Scroll-section flex flex-col justify-between align-start md:w-full gap-32 lg:w-1/2 lg:ml-auto">
            <section ref="about" data-section="About">
                <AboutSection />
            </section>
            <section ref="projects" data-section="Projects">
                <ProjectsSection />
            </section>
            <section ref="skills" data-section="Skills">
                <SkillsSection />
                <ContactSection />
            </section>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useSectionStore } from "../stores/Section";
import HeroSection from "./Hero-section.vue";
import AboutSection from "./About-section.vue";
import ProjectsSection from "./Projects-section.vue";
import SkillsSection from "./Skills-section.vue";
import ContactSection from "./Contact-section.vue";

export default {
    name: "HomePage",
    components: {
        HeroSection,
        AboutSection,
        ProjectsSection,
        SkillsSection,
        ContactSection,
    },
    setup() {
        const sectionStore = useSectionStore();

        // Section refs
        const about = ref(null);
        const projects = ref(null);
        const skills = ref(null);

        // Scroll to section function
        const scrollToSection = (sectionName) => {
            const sectionMap = {
                About: about.value,
                Projects: projects.value,
                Skills: skills.value,
            };

            const sectionElement = sectionMap[sectionName];
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
                sectionStore.setSection(sectionName); // Update store
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        sectionStore.setSection(entry.target.dataset.section);
                    }
                });
            },
            { threshold: 0.6 }
        );

        onMounted(() => {
            [about.value, projects.value, skills.value].forEach((section) => {
                if (section) {
                    observer.observe(section);
                }
            });
        });

        onUnmounted(() => {
            observer.disconnect();
        });

        return { about, projects, skills, scrollToSection };
    }
};
</script>
