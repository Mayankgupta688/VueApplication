<template>
  <div>
    <slot name="appHeader"></slot>
    <slot></slot>
    <h2 class="my-class">This is the Child Component</h2>
    <h3 :id="$style.applyStyle">This is Child with border</h3>
    <slot name="appFooter"></slot>

    <input type="button" value="Change Color" @click="applicationColor = 'yellow'"
  </div>
</template>

<script setup>
  import { ref } from "vue";
  var applicationColor = ref("blue")
</script>

<style module scoped>

  .my-class {
    color: v-bind(applicationColor)
  }

  #applyStyle {
    border: 2px solid grey;
    padding: 10px;
    margin: 10px;
  }

</style>
