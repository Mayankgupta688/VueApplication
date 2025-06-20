<template>
  <div class="add_employee">
    <h1>Please add New Employee {{ timer }}</h1><br/>
    <h2>Is Employeed: {{employeeDetails.isEmployeed}}</h2>
    <h3>Count  {{ count }}</h3><br/><br/>


    <input type="button" value="UpdateCounter" @click="updateCount" /><br/><br/>



    <form @submit.prevent="saveNewEmployee" >
      <label>Employee Id:</label> <input type="text" :value="employeeDetails.id" @input="event => employeeDetails.id = event.target.value" /><br/><br/>
      <label>Employee name:</label> <input type="text" v-model="employeeDetails.name" /><br/><br/>
      <label>Employee position:</label> <input type="text" v-model="employeeDetails.position" /><br/><br/>
      <label>Employee department:</label> <input type="text" v-model="employeeDetails.department" /><br/><br/>

      <label>Is Employeed</label><input type="checkbox" v-model="employeeDetails.isEmployeed" /><br/><br/>

      <div v-if="employeeDetails.isEmployeed">
        Analyst<input type="radio" value="Analyst" v-model="employeeDetails.seniority" />
        Senior Analyst<input type="radio" value="Senior Analyst" v-model="employeeDetails.seniority" />
        Manager<input type="radio" value="Manager" v-model="employeeDetails.seniority" /><br/><br/>
        Selected: {{employeeDetails.seniority}}
      </div><br/><br/>

      <input type="submit" value="Submit" />

      <div style="margin: 10px; padding: 10px; border: 1px solid red;" @click.stop.prevent="mouseOverEvent">This is a normal Div</div>




    </form>
  </div>
</template>

<script setup>

  import {ref, defineEmits} from "vue";
  import Axios from "axios";
  import trackTimer from "./trackTimer.js";

  var emit = defineEmits(['add-employee'])
  var { timer, count, updateCount } = trackTimer()

  function mouseOverEvent() {
    alert("Div Clicked....")
  }

  function clickedEvent() {
    alert("Oter Div Clicked....")
  }

  function updateId(event) {
    event.preventDefault();
    employeeDetails.value.id = event.target.value
  }

  var employeeDetails = ref({
    id: ref("100"),
    name: ref("Mayank"),
    position: ref("Trainer"),
    department: ref("IT"),
    email: "",
    isEmployeed: true,
    seniority: ""
  });

  function saveNewEmployee() {
    Axios.post("http://localhost:3000/employeeDetails", employeeDetails.value).then(() => {
      emit("add-employee")
    })
  }

</script>


<style>

.add_employee {
   border: 1px solid grey;
   padding: 10px;
   margin: 10px;
}

label {
  min-width: 300px;
}

</style>
