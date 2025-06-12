<template>
  <div :id="containerId" :title="title">
    <h1 :class="className">This is the Dummy Template</h1>
    <input name="red" id="red-element" @click="applyStyle('red', $event, 'otherProperties')" type="button" value="Red" />
    <input name="green" id="green-element" @click="applyStyle('green', $event)" type="button" value="Green" />
    <input name="blue" id="blue-element" @click="applyStyle('blue')" type="button" value="Blue" />
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        count: 0,
        className: "container-div",
        containerId: "my-container",
        title: "My Component"
      }
    }, methods: {
      applyStyle: function(color) {
        this.className = `${color}`;
      }
    }
  }
</script>

<style>
  input {
    margin: 10px;
    padding: 10px;
    min-width: 200px;
  }

.red {
  color: red;
}

.green {
  color: green;
}

.blue {
  color: blue;
}
</style>
