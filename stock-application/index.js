import { createApp } from "vue";

import App from "./src/components/App.vue";

// Application Bootstrap
createApp(App).mount("#myApplication");


function abc() {
  console.log("Hello World!");
}

var myFunction = () => {
  console.log("This is Arrow Function")
}
