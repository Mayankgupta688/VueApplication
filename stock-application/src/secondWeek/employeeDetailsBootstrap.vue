<template>
  <main>

    <div style="padding: 10px;">Search Employee:
      <input type="text" v-model="searchText" @input="updateSeachText" /><br/><br/>
    </div>

    <div class="card" v-for="(employee) in filteredByWatchEmployeeList" :key="employee.id">
      <img :src="imageUrl"
          class="card-img-top" :alt="employee.name" :title="employee.name">
      <block class="card-body">
        <h5 class="card-title">{{employee.name}}</h5>
        <section class="card-text">
          <p>Position in Company: {{employee.position}}</p>
          <p>Department: {{employee.department}}</p>
          <p>Id: {{employee.id}}</p>
        </section>
        <a href="#" class="btn btn-primary">Delete {{employee.name}}</a>
      </block>
    </div>
  </main>
</template>

<script setup>

import Axios from "axios";
import {ref, onMounted, computed, watch} from "vue";

var searchText = ref("");
var imageUrl = "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
var employeeList = ref([]);
var filteredEmployeeList = ref([]);
var filteredByWatchEmployeeList = ref([]);

var computerArray = computed(() => {
  return employeeList.value.filter((employee) => {
    return employee.name.indexOf(searchText.value) > -1;
  })
});

watch(searchText, (newValue) => {
  debugger;
  filteredByWatchEmployeeList.value = employeeList.value.filter((employee) => {
    return employee.name.indexOf(newValue) > -1;
  })
})

onMounted(() => {
  Axios.get("http://localhost:3000/employeeDetails").then((response) => {
    employeeList.value = response.data;
    filteredEmployeeList.value = response.data;
    filteredByWatchEmployeeList.value = response.data
  })
});

function updateSeachText(event) {
  var newValue = event.target.value;
  filteredEmployeeList.value = employeeList.value.filter((employee) => {
    return employee.name.indexOf(newValue) > -1;
  })
}

</script>

<style>
.card {
  width: 18rem;
  margin: 10px;
  display: inline-block;
  padding: 10px;
}
.employee_details {
  border: 1px solid grey;
  width: 200px;
  padding: 10px;
  margin: 10px;
}

.image_container {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
}

.image_container img {
  width: 100%;
  height: 90px;
}

.details_container {
  width: 100%;
  height: 100px;
}

.details_container p {
  margin: 10px;
  font-size: 10px;
}
</style>
