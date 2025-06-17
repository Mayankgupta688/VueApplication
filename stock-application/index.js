import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";

import appComponent from "./src/secondWeek/reactiveComponent.vue";

// Application Bootstrap
createApp(appComponent).mount("#myApplication");
