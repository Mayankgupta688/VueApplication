<template>
  <h1>The Zomato Stock Price is <span :class="className">{{stockPrice}} </span></h1>
</template>

<script>

import axios from "axios"

export default  {
  data() {
    return {
      stockPrice: 0,
      className: "green"
    }
  },
  methods: {
    comparePrice(oldPrice, stockPrice) {
      if(oldPrice > stockPrice) {
        this.className = "red"
      } else {
        this.className = "green"
      }
    }
  },

  mounted() {
    var oldValue = 0;
    setInterval(function() {
      axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/Z01").then(response => {
        oldValue = this.stockPrice;
        this.stockPrice = response.data.data.pricecurrent;
        this.comparePrice(oldValue, this.stockPrice);
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
