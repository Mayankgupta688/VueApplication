<template>
  <img :src="imageUrl" class="card-img-top" :alt="employee.name" :title="employee.name">
  <block class="card-body">
    <h5 class="card-title">{{employee.name}}</h5>
    <section class="card-text">
      <p>Position in Company: {{employee.position}}</p>
      <p>Department: {{employee.department}}</p>
      <p>Id: {{employee.id}}</p>
    </section>
    <input type="button" :id="'btn_' + employee.id" class="btn btn-primary" :value='"Delete " + employee.name' />
  </block>
</template>

<script setup>
var imageUrl = "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=";
import {defineProps} from "vue";
defineProps(['employee'])
</script>

<style scoped>
  .employee-details {
    padding: 20px;
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
