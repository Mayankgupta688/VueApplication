import "bootstrap";

import SearchComponent from "./src/containership/SearchComponent.vue";
import ListComponent from "./src/containership/ListComponent.vue";
import EmployeeDetails from "./src/secondWeek/employeeDetails.vue";
import AddEmployee from "./src/containership/AddEmployee.vue";

import { createApp } from "vue";

import appComponent from "./src/sessionNine/workingWithSlots.vue";

// Application Bootstrap
var app = createApp(appComponent)

app.component("SearchComponent", SearchComponent)
app.component("ListComponent", ListComponent)
app.component("AddEmployee", AddEmployee)
app.component("EmployeeDetails", EmployeeDetails)

app.mount("#myApplication");
