import { makeInstaller } from "@simpify-ui/utils";
import components from "./components";
import "@simpify-ui/theme/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// https://docs.fontawesome.com/web/use-with/vue/add-icons#several-icon-in-different-styles
library.add(fas);
const installer = makeInstaller(components);

export * from "@simpify-ui/components";
export default installer;
