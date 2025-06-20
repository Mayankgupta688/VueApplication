<template>
  <h1>This is User Name TechnoFunnel</h1>
  <input type="button" value="Update Data" @click="returnError" />
</template>

<script setup>
  function returnError() {
    throw new Error(JSON.stringify({name: "Mayank", userAge: 20}));
  }
</script>
