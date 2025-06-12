<template>
  <h1>The Zomato Stock Price is <span :class="styleClassName">{{stockPrice}} </span></h1>
  <h2>The user Name is {{ fullName }}</h2>
   <h2>The user First Name is {{ firstName }}</h2>
    <h2>The user Last Name is {{ lastName }}</h2>

  <input type="button" value="Update Name" @click="updateName" />
</template>

<script>

import axios from "axios"

export default  {
  data() {
    return {
      stockPrice: 0,
      oldPrice: 0,
      firstName: "Mayank",
      lastName: "Gupta"
    }
  }, computed: {
    className: function() {
      return this.oldPrice > this.stockPrice ? "red" : "green"
    },
    styleClassName: {
      get() {
        return this.oldPrice > this.stockPrice ? "red" : "green"
      }
    }, fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      }, set(inputValue) {
        [this.firstName, this.lastName] = inputValue.split(" ");
      }
    }
  }, methods: {
    updateName: function() {
      this.fullName = "Anshul Goyal"
    }
  },
  mounted() {
    setInterval(function() {
      axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/Z01").then(response => {

        this.oldPrice = this.stockPrice;
        this.stockPrice = response.data.data.pricecurrent;
      })
    }.bind(this), 2000);
  }

}
</script>


<style>
  .green {
    color: green;
  }
  .red {
    color: red;
  }
</style>
