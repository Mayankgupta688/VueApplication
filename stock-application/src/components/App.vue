<template>
  <div class="container-div">
    <h1>The Current Time is: {{ timer }}</h1>
    <div>User Name is: {{ getUserName() }}</div>
    <b>The counter Value is: {{ counter }}</b><br/><br/>
    <input type="button" value="Click to increase Count by 1" v-on:click="increaseCounter"  />
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        userName: "TechnoFunnelMayank ",
        counter: 0,
        timer: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
      }
    }, mounted: function() {
      setInterval(function() {
        this.timer = this.getCurrentTime();
      }.bind(this), 1000);
    }, methods: {
      increaseCounter: function() {
        this.userName = "Mayank Gupta"
        this.counter++;
      }, getUserName() {
        return this.userName;
      }, getCurrentTime() {
        return "Current Time is: " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
      }
    }
  }
</script>

<style>
  h1 {
    color: red
  }

  .container-div{
    padding: 10px;
    margin: 10px;
  }
</style>
