<template>
  <div>
    <h1 :class="{'addColor' : addColorProperty, 'addBorder': addBorderProperty}">This is teh dummy Data</h1>
    <input type="button" value="Toggle Color"  @click="updateClass('color')"/>
    <input type="button" value="Toggle Border" @click="updateClass('border')" />
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        addColorProperty: false,
        addBorderProperty: false
      }
    }, methods: {
      updateClass: function(property) {
        if(property === 'color') {
          this.addColorProperty = !this.addColorProperty;
        } else if(property === 'border') {
          this.addBorderProperty = !this.addBorderProperty;
        }
      }
    }
  }
</script>

<style>
  h1 {
    padding: 10px;
    margin: 10px;
  }

  h1.addColor {
    color: red;
  }

  h1.addBorder {
    border: 1px solid red;
  }
</style>
