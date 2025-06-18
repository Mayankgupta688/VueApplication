<template>
  <div class="add_employee">
    <h1>Please add New Employee</h1><br/>

    <form>
      <label>Employee Id:</label> <input type="text" v-model="id" /><br/><br/>
      <label>Employee name:</label> <input type="text" v-model="name" /><br/><br/>
      <label>Employee position:</label> <input type="text" v-model="position" /><br/><br/>
      <label>Employee department:</label> <input type="text" v-model="department" /><br/><br/>
      <input type="button" value="Submit" @click="saveNewEmployee" />
    </form>
  </div>
</template>

<script setup>

  import {ref, defineEmits} from "vue";
  import Axios from "axios";

  var emit = defineEmits(['add-employee'])

  var id = ref("100")
  var name = ref("Mayank")
  var position = ref("Trainer")
  var department = ref("IT")

  function saveNewEmployee() {
    Axios.post("http://localhost:3000/employeeDetails", {
      id: id.value,
      name: name.value,
      position: position.value,
      department: department.value,
      email: "",
    }).then(() => {
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
