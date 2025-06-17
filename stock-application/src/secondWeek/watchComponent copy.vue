<template>
  <h1>The Usert Name is {{userName}}</h1>
  <h1>The Usert Age is {{userAge}}</h1>
  <label>Update Name: </label>
  <input type="text" v-model="userName" />
  <input type="text" v-model="userAge" /><hr/><hr/><br/>


  <h1>The User Name is {{userInfo.userName}}</h1>
  <h1>The Usert Age is {{userInfo.userAge}}</h1>
  <label>Update Name: </label>
  <input type="text" v-model="userInfo.userName" />
  <input type="text" v-model="userInfo.userAge" />
  <input type="button" value="Update Reference" @click="updateReference" /><hr/><hr/>
</template>

<script setup>
import {ref, watch } from "vue";
var userName = ref("TechnoFunnel")
var userAge = ref(0)

var userInfo = ref({
  userName: "Techno",
  userAge: 5
})

watch(userName, (newValue, oldValue) => {
  if(newValue == "Mayank") {
    userAge.value = 35
  }
});

watch(() => userInfo.value.userAge, (newValue, oldValue) => {
  console.log(newValue == oldValue);
  // Will this watch be triggered...
  debugger;
});

watch(userInfo, (newValue, oldValue) => {
  console.log(newValue == oldValue);
}, {
  deep: true
});

function updateReference() {
  userInfo.value = {
    userName: "Other reference",
    userAge: 50
  }
}
</script>
