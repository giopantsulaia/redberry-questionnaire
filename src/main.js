import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/router.js";
import "@/index.css";
import "@vee-validate/rules";
import "@/config/vee-validate/rules.js";
import "@/config/vee-validate/messages";
const app = createApp(App);
app.use(router);
app.mount("#app");
