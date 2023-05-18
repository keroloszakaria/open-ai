import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

// Main Scss
import "./scss/main.scss";

createApp(App).use(store).use(router).mount("#app");
