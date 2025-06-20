<template>
  <div>
    <h2>This is the Stock Application</h2>
  </div>

  <b>Enter Employee</b><input type="text" v-model="employeeName" />
  <input type="button" value="Redirect to User" @click="redirectApplication" />

  <nav>
    <router-link class="anchor-links" to="/">Home</router-link>
    <router-link class="anchor-links" to="/help">Help</router-link>
    <router-link class="anchor-links" to="/about">About</router-link>
  </nav>

  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>

import { useRouter } from "vue-router";
import {ref } from "vue"

var employeeName = ref("");
var router = useRouter();

function redirectApplication() {
  alert("Application Re-directing....")
  router.push({name: "EmployeeList", params: { employeeId: employeeName.value}});
}

</script>

<style scoped>
  h2 {
    color: white;
    background-color: grey;
    padding:30px;
    width: 100%
  }


.anchor-links {
  margin-right: 10px;
}
</style>
