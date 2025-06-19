<template>
  <div>
    <h1>
      This is Main Container {{searchText}}
    </h1>

    <SearchComponent
      class="search-component"
      id="searchComponent"
      style="color: red"
      :searchText="searchText"
      @update-searchText="updateSearchData">
    </SearchComponent>

    <ListComponent
      @delete-employee="deleteEmployee"></ListComponent>

      <AddEmployee @add-employee="fetchData"></AddEmployee>
    </div>

</template>

<script setup>

import Axios from "axios";
import { ref, onMounted, watch, provide } from "vue";

var employeeList = ref([]);
var filterList = ref([]);
var searchText = ref("");

provide("filterList", filterList)

function updateSearchData(newSearchText) {
  searchText.value = newSearchText;
}

watch(searchText, (newValue) => {
  filterList.value = employeeList.value.filter((employee) => {
    return employee.name.indexOf(newValue) > -1;
  })
})


function deleteEmployee(employeeId) {
  Axios.delete("http://localhost:3000/employeeDetails/" + employeeId).then(() => {
    fetchData();
  });
}


function fetchData() {
  Axios.get("http://localhost:3000/employeeDetails").then((response) => {
    employeeList.value = response.data;
    filterList.value = response.data;
  })
}

onMounted(() => {
  Axios.get("http://localhost:3000/employeeDetails").then((response) => {
    employeeList.value = response.data;
    filterList.value = response.data;
  })
});
</script>
