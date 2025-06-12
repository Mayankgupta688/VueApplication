<template>
  <div :class="className" :id="containerId" :title="title">
    <h1 :style="{ color: color }">This is the Dummy Template</h1>
    <input @click="applyStyle($event)" type="button" value="Red" />
    <input @click="applyStyle($event)" type="button" value="Green" />
    <input @click="applyStyle($event)" type="button" value="Blue" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      className: "container-div",
      containerId: "my-container",
      title: "My Component",
      color: ""
    };
  },
  methods: {
    applyStyle(event) {
      this.color = event.target.value.toLowerCase();
    }
  }
};
</script>

<style>
input {
  margin: 10px;
  padding: 10px;
  min-width: 200px;
}
</style>
