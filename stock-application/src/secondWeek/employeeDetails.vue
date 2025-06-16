<template>
  <div class="employee_details">
    <div class="image_container">
      <img src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
        alt="Mayank Gupta" title="Mayank Gupta" />
    </div>
    <div class="details_container">
      <p>Name: Mayank Gupta</p>
      <p>Age: 30</p>
      <p>Designation: Software Engineer</p>
      <p>Experience: 5 Years</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
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
