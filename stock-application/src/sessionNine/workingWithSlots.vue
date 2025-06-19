<template>
  <h1>This is the Parent Component</h1><hr/><br/>
  <ChildComponent>
    <template v-slot:appHeader><h4>This is Header Slot for Mayank Gupta</h4></template>

    <h3>Hello {{userName}}, to the session....</h3>

    <template v-slot:appFooter><h6>This is the Footer Slot</h6></template>
  </ChildComponent>
</template>

<script setup>
  import ChildComponent from "./childComponent.vue";
  import {ref} from "vue";
  var userName = ref("Mayank Gupta")
</script>

<style scoped>
  body{
    color: green;
  }
</style>
