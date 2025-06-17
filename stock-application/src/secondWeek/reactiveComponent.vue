<template>
  <h1>The User Name is {{employeeDetails.userName}}</h1>
  <input type="text" v-model="employeeDetails.userName" />
  <input type="button" @click="updateReactiveData" value="Update" />
</template>

<script setup>

import {reactive} from "vue";

var userName = reactive("Mayank Gupta")

var employeeDetails = reactive({
  userName: "Mayank"
})

function updateReactiveData() {
  employeeDetails.userName = "Anshul"
}
</script>
