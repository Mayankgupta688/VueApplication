<template>
  <div>
    <h1>
      This is Main Container {{timer}}
    </h1>

    <h2>The Counter Value is {{count}}</h2>

    <SearchComponent
      ref="elementReference"
      class="search-component"
      id="searchComponent"
      style="color: red"
      :searchText="searchText"
      @update-searchText="updateSearchData">
    </SearchComponent>

    <input type="button" value="UpdateCounter" @click="updateCount" /><br/><br/>

    <ListComponent
      @delete-employee="deleteEmployee"></ListComponent>

      <AddEmployee @add-employee="fetchData"></AddEmployee>
    </div>

</template>

<script setup>

import Axios from "axios";
import { ref, onMounted, watch, provide, defineAsyncComponent } from "vue";
import { storeToRefs } from "pinia";

import useEmployeeStore from "../stores/employeeStore";

var ListComponent = defineAsyncComponent(() => {
  return import("../containership/ListComponent.vue");
});

var AddEmployee = defineAsyncComponent(() => {
  return import("../containership/AddEmployee.vue");
});

var SearchComponent = defineAsyncComponent(() => {
  return import("../containership/SearchComponent.vue");
});

import trackTimer from "./trackTimer.js"

var { employeeList } = storeToRefs(useEmployeeStore());

debugger;

var filterList = ref([]);
var searchText = ref("");
var elementReference = ref(null);
var { timer, count, updateCount } = trackTimer()

function observeElementRef() {
  console.dir(elementReference);
}

provide("filterList", filterList)

function updateSearchData(newSearchText) {
  searchText.value = newSearchText;
}

watch(searchText, (newValue) => {
  filterList.value = employeeList.value.filter((employee) => {
    return employee.name.indexOf(newValue) > -1;
  })
})


watch(employeeList, () => {
  debugger;
  filterList.value = employeeList.value
})


function deleteEmployee(employeeId) {
  Axios.delete("http://localhost:3000/employeeDetails/" + employeeId).then(() => {
    fetchData();
  });
}


function fetchData() {
  // Axios.get("http://localhost:3000/employeeDetails").then((response) => {
  //   employeeList.value = response.data;
  //   filterList.value = response.data;
  // })
}

onMounted(() => {
  filterList.value = employeeList.value;
});
</script>
