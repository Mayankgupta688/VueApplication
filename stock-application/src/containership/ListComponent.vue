<template>
  <div class="list-component">
    <h1>
      Below is the List of Employee in the Team
    </h1>

    <div>
      <div class="card" v-for="(employee) in filterList" :key="employee.id">
        <EmployeeDetails :employee="employee"></EmployeeDetails>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";
defineProps(['filterList'])
import EmployeeDetails from "./EmployeeDetails.vue";
</script>

<style scoped>

  .list-component {
    padding: 20px;
  }

  .card {
    width: 18rem;
    margin: 10px;
    display: inline-block;
    padding: 10px;
  }
</style>
