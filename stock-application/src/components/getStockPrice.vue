<template>
  <h1>The Zomato Stock Price is <span :class="applicationData.className">{{applicationData.stockPrice}} </span></h1>
</template>

<script>

  import axios from "axios"

  import { onMounted, shallowRef } from "vue";

  var oldValue = 0;

  var stockPrice = ref(0);
  var className = ref("green");

  var applicationData = shallowRef({
    stockPrice: 0,
    className: "green"
  });

  function comparePrice(oldPrice, stockPrice) {
    if(oldPrice > stockPrice) {
      applicationData.value.className = "red"
    } else {
      applicationData.value.className = "green"
    }
  }

  onMounted(() => {
    setInterval(function() {
      axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/Z01").then(response => {
        oldValue = applicationData.value.stockPrice;
        applicationData.value.stockPrice = response.data.data.pricecurrent;
        comparePrice(oldValue, applicationData.value.stockPrice);
      })
    }.bind(this), 2000);
  })

</script>


<style>
  .green {
    color: green;
  }
  .red {
    color: red;
  }
</style>
