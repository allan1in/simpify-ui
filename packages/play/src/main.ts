import { createApp } from "vue";
import App from "./App.vue";
import SimpifyUI from "simpify-ui";
import "simpify-ui/dist/index.css";

// https://cn.vuejs.org/api/application.html#app-use
createApp(App).use(SimpifyUI).mount("#app");
