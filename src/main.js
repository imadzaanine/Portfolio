import { createApp } from "vue";
import { createPinia } from "pinia"; // Import Pinia
import App from "./App.vue";
import "./style.css";

const app = createApp(App);

const pinia = createPinia(); // Create Pinia instance

app.use(pinia); // Use Pinia in Vue app

app.mount("#app"); // Mount the app
