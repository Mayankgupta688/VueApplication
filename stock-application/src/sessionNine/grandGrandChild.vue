<template>
  <h1>This is Grand Grand Child Component {{userDetails.userAge}} {{userDetails.userDesignation}}</h1>
</template>

<script setup>
import { inject } from "vue";
const userDetails = inject("userDetails");

debugger;
</script>
