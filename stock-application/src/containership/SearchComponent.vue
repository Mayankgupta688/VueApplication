<template>
  <div class="search-component">
    <div style="padding: 10px;">Search Employee {{ employeeList.length }}:
      <input type="text" :value="searchText" @input="triggerSearchUpdate" /><br/><br/>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits,ref } from "vue";
  import { storeToRefs } from "pinia";
  import useEmployeeStore from "../stores/employeeStore";
  var { employeeList } = storeToRefs(useEmployeeStore());
  defineProps(['searchText'])
  var emit = defineEmits(['update-searchText'])
  var someData = ref("someCode");
  function triggerSearchUpdate(event) {
    emit("update-searchText", event.target.value)
  }
</script>

<style scoped>
  .search-component {
    padding: 20px;
  }
</style>
