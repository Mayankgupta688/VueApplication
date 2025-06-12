<template>
  <h1>The SBI Stock Price is {{ stockPrice }}</h1>
</template>

<script>

import axios from "axios"

export default  {
  data() {
    return {
      stockPrice: 0
    }
  },

  mounted() {
    setInterval(() => {
      axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then(response => {
        this.stockPrice = response.data.data.pricecurrent;
      })
    }, 2000);
  }
}
</script>
