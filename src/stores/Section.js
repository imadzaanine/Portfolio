import { defineStore } from "pinia";

export const useSectionStore = defineStore("section", {
  state: () => ({
    section: "About",
  }),
  actions: {
    setSection(newSection) {
      this.section = newSection;
    },
  },
});
