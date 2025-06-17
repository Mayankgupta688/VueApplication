<template>
  <div class="search-component">
    <div style="padding: 10px;">Search Employee:
      <input type="text" :value="searchText" @input="triggerSearchUpdate" /><br/><br/>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from "vue";
  defineProps(['searchText'])
  var emit = defineEmits(['update-searchText'])

  function triggerSearchUpdate(event) {
    emit("update-searchText", event.target.value)
  }
</script>

<style scoped>
  .search-component {
    padding: 20px;
  }
</style>
