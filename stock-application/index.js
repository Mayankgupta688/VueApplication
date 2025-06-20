import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";

import AppComponent from "./src/containership/MainContainer.vue";
import { createPinia } from "pinia";

var app = createApp(AppComponent);

// app.config.errorHandler = (err) => {
//   var errorDetails = JSON.parse(err.message)
//   console.log(errorDetails.name);
//   console.log("This application has got error.... Just log this error data")
// }

app.use(createPinia()).mount("#myApplication");
