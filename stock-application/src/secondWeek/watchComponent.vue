<template>
  <h1>The Usert Name is {{userName}}</h1>
  <h1>The Usert Age is {{userAge}}</h1>
  <label>Update Name: </label>
  <input type="text" v-model="userName" />
  <input type="text" v-model="userAge" />
  <input type="text" v-model="userDesignation" />
  <input type="text" v-model="userSalary" /><hr/><hr/><br/>
  <input type="text" v-model="otherInfo.otherName" />
</template>

<script setup>
import {ref, watch } from "vue";
var userName = ref("TechnoFunnel")
var userAge = ref(0);
var userDesignation = ref("Developer")
var userSalary = ref(0);

var otherInfo = ref({
  otherName: "hgshd",
  othrAge: 23
})

watch([userName, userAge, userDesignation, () => otherInfo.value.otherName], ([newName, newAge, newDesignation, newOtherName], [oldName, oldAge, oldDesignation, oldOtherName]) => {
  debugger;
  alert("Name Updated")
});

</script>
