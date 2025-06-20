import { defineStore } from "pinia";
import { ref } from "vue";
import Axios from "axios"

const useEmployeeStore = defineStore("employeeStore", () => {
  var employeeList = ref([]);

  setInterval(() => {
    Axios.get("http://localhost:3000/employeeDetails").then((response) => {
      debugger;
      employeeList.value = response.data;
    })
  }, 5000);

  return {
    employeeList: employeeList
  };
})

export default useEmployeeStore
