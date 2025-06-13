<script setup>

import { onMounted, shallowRef} from 'vue';

// function programming. - Mutation, Pure Functions, Immutability

var employeeDetails = shallowRef({
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    otherdetails: {
      zip: '12345',
      country: 'USA',
    }
  }, salary: [100, 200, 300]
});

onMounted(() => {
  setTimeout(() => {
    employeeDetails.value = {...employeeDetails.value,
      address: {
        ...employeeDetails.value.address,
        city: 'New City'
      }
    };
  }, 2000);
});

</script>

<template>
  <h1>The Country for the User is: {{employeeDetails.address.city}}</h1>
</template>
