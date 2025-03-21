import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.css";
// preview
// import SimpifyUI from "simpify-ui";
// import "simpify-ui/dist/index.css";

// dev
import { makeInstaller } from "@simpify-ui/utils";
import "@simpify-ui/theme/index.css";
import { SpButton } from "@simpify-ui/components";

// preview
// https://cn.vuejs.org/api/application.html#app-use
// createApp(App).use(SimpifyUI).mount("#app");

// dev
const components = [SpButton];
const installer = makeInstaller(components);
createApp(App).use(installer).mount("#app");
