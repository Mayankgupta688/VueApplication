<script setup>
  import { ref } from 'vue';

  var count = 1000;
  var otherCount = ref(0);

  function incrementData() {
    count++;
    console.log(document.getElementById('app-heading').innerText)
    console.log('Incremented count to:', count);
  }

  function incrementRefData() {
    otherCount.value++;
    console.log(document.getElementById('other-count').innerText);  // 1
    console.log('Value of the Variable is: ', otherCount.value);    // 1
  }

  function getHeaderValue() {
    console.log("Inner Text: " + document.getElementById('app-heading').innerText)
  }
</script>

<template>
  <h1 id="app-heading">{{count}}</h1>
  <input type="button" value="Increment Function" @click="incrementData" />
  <input type="button" value="Increment Inline " @click="getHeaderValue" /><hr/><hr/>

  <h1 id="other-count">{{otherCount}}</h1>
  <input type="button" value="Increment Inline for Ref" @click="incrementRefData" />
</template>

<style>
  input {
    margin: 10px;
    padding: 5px;
  }
</style>
