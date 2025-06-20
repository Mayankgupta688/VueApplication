import {ref, onMounted} from "vue";

export default function trackTimer() {

  var timer = ref("");
  var count = ref(0)

  function calculateTime() {
    return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds()
  }

  function updateCount() {
    count.value = count.value + 1;
  }

  onMounted(() => {
    setInterval(() => {
      timer.value = calculateTime();
    }, 1000);
  })

  return {
    timer: timer,
    count: count,
    updateCount: updateCount
  };
}
