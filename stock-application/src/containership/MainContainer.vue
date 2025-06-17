<template>
  <h1>
    This is Main Container {{searchText}}
  </h1>

  <SearchComponent
    :searchText="searchText"
    @update-searchText="updateSearchData">
  </SearchComponent>

  <ListComponent :filterList="filterList"></ListComponent>

</template>

<script setup>
import SearchComponent from "./SearchComponent.vue";
import ListComponent from "./ListComponent.vue";
import Axios from "axios";
import { ref, onMounted, watch } from "vue";

var employeeList = ref([]);
var filterList = ref([]);
var searchText = ref("");

function updateSearchData(newSearchText) {
  searchText.value = newSearchText;
}

watch(searchText, (newValue) => {
  filterList.value = employeeList.value.filter((employee) => {
    return employee.name.indexOf(newValue) > -1;
  })
})

onMounted(() => {
  Axios.get("http://localhost:3000/employeeDetails").then((response) => {
    employeeList.value = response.data;
    filterList.value = response.data;
    filterList.value = response.data
  })
});
</script>
