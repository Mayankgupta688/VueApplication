<template>
  <h1>This is Parent Component {{userDetails.userName}}</h1>
  <ChildComponent></ChildComponent>
</template>

<script setup>
import ChildComponent from "./child.vue";
import { ref, provide } from "vue";

var userDetails = ref({
  userName: "Mayank",
  userAge: 20,
  userDesignation: "Trainer"
})

provide("userDetails", userDetails);


</script>
