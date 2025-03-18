import { makeInstaller } from "@simpify-ui/utils";
import components from "./components";
import "@simpify-ui/theme/index.css";

const installer = makeInstaller(components);

export * from "../components";
export default installer;
