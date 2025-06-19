import "bootstrap";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "./src/singlePage/HomeComponent.vue";
import HelpComponent from "./src/singlePage/HelpComponent.vue";
import AboutComponent from "./src/singlePage/AboutComponent.vue";
import EmployeeList from "./src/singlePage/EmployeeList.vue";

import appComponent from "./src/singlePage/App.vue";

var appRoutes = [
  {path: "/", name: "Home", component: HomeComponent},
  {path: "/help", name: "Help", component: HelpComponent},
  {path: "/about", name: "About", component: AboutComponent},
  {path: "/employee/:employeeId", name: "EmployeeList", component: EmployeeList}
]

var router = createRouter({
  history: createWebHistory(),
  routes: appRoutes
})

createApp(appComponent).use(router).mount("#myApplication");
