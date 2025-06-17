<template>
  <h1>The User Name is {{userName}}</h1>
  <input type="text" v-model="employeeDetails.userName" />
  <input type="text" v-model="employeeDetails.userAge" />
  <input type="text" v-model="employeeDetails.userDesignation" />
  <input type="button" @click="updateReactiveData" value="Update" />
</template>

<script setup>

// Reactive Keyword do not work with Primitive Data Types
// You need not to use 'value' keyword
// Cannot update the reference of the Reactive Variable

import {reactive, ref} from "vue";

var userName = ref("Mayank Gupta")

var employeeDetails = reactive({
  userName: "Technofunnel",
  userAge: 10,
  userDesignation: "develop"
})

function updateReactiveData() {
  employeeDetails = {
    userName: "Anshul",
    userAge: 100,
    userDesignation: "Product"
  }
}
</script>
