<script setup>

import { ref } from 'vue';

var employeeData = ref([{
  name: "Mayank",
  age: 10
}, {

  name: "Anshul",
  age: 10
}, {

  name: "Ankit",
  age: 10
}])

var renderData = ref(true)

function updateEmployee() {
  employeeData.value[0].name = "jsfkldhf"
};

</script>

<template>
  <h1>Following is the Employee List in TechnoFunnel</h1>
  <div v-for="(data, index) in employeeData" :key="data.age">
    <div v-if="renderData">
      <h2>Employee at Index {{index + " is " + data.name}}</h2>
      <p>Age: {{data.age}}</p>
      <input type="text" v-model="data.name" placeholder="Update Name" />
      </div>
  </div>

  <input type="button" value="Update" @click="updateEmployee" />
</template>
