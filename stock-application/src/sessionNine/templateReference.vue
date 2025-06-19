<template>
  <h1>This is my Header Component</h1>
  <h2 ref="elementReference">This is Other Component</h2>
  <input type="button" value="Hide Header" @click="hideShowComponent" />
</template>

<script setup>

import { ref } from "vue";
var elementReference = ref(null);

function hideShowComponent() {
  console.dir(elementReference.value);
  if(elementReference.value.style.display == "none"){
    elementReference.value.style.display = "block";
   } else {
    elementReference.value.style.display = "none"
  }

}

</script>

