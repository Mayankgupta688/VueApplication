import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";

import appComponent from "./src/containership/MainContainer.vue";

// Application Bootstrap
createApp(appComponent).mount("#myApplication");
