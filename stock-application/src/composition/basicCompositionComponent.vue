<script setup>
  import { onMounted, onUnmounted, onUpdated, ref } from 'vue';

  var otherCount = ref(0);
  var interval = ref(null)

  function incrementRefData() {
    otherCount.value++;
    setTimeout(function() {
      console.log("Inner Text Value is: " + document.getElementById('other-count').innerText);
      console.log('Value of the Variable is: ', otherCount.value);
    });
  }

  onMounted(function() {
    console.log(otherCount)
    incrementRefData()
    console.log("The Element is mounted on Screen");

    interval.value = setInterval(() => {
      console.log("jhgf")
    }, 1000);
  })

  onUpdated(function() {
    alert("Component is updated on the Screen")
  })

  onUnmounted(() => {
    clearInterval(interval.value);
  })

  function getHeaderValue() {
    console.log("Inner Text: " + document.getElementById('other-count').innerText)
  }
</script>

<template>

  <h1 id="other-count">{{otherCount}}</h1>
  <input type="button" value="Increment Inline for Ref" @click="incrementRefData" />
  <input type="button" value="Get Value" @click="getHeaderValue" />
</template>

<style>
  input {
    margin: 10px;
    padding: 5px;
  }
</style>
