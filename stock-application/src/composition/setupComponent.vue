<template>
  <h1>This User Name is  {{userName}}</h1>
  <h2>This is another Property {{userInfo}}</h2>
  <h3>The count Value is {{userCount}}</h3>
  <h4>This is other data {{otherData}}</h4>
  <input type="button" value="Click to Update" @click="updateDataProperty" />
</template>

<script>

import { ref, onMounted } from 'vue';
export default {
  setup() {
    var userName = ref("Mayank Gupta");
    var userInfo = "This is a User Info Property";
    var count = ref(0);
    var otherData = "Hello All";

    setInterval(() => {
      count.value++;
      console.log(count.value)
    }, 5000);

    function updateDataProperty() {
      userName.value = "Updated User Name";
      userInfo = "Updated User Info Property";
      console.log("User Name: ", userName);
      console.log("User Info: ", userInfo);
      alert(otherData)
      privateFunction()
    }

    function privateFunction() {
      console.log("This is a private function");
    }

    onMounted(() => {
      console.log("Component Mounted");
      console.log("User Name: ", userName.value);
      console.log("User Info: ", userInfo);
      privateFunction()
    });

    return {
      userName,
      userInfo,
      userCount: count,
      otherData,
      updateDataProperty
    }
  }
}
</script>
