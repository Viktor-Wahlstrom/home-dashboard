<template>
  <div class="calendar">
    <h1>Dagens datum</h1>
    <h3 id="clock"></h3>
    <div ></div>
  </div>
</template>

<script>
export default {
  name: "TimeCalendar",
  data() {
    return {};
  },

  mounted() {
    this.showTime();
  },

  methods: {
    showTime() {
      var date = new Date();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      

      var time = h + ":" + m + ":" + s;
      document.getElementById("clock").innerText = time;
      document.getElementById("clock").textContent = time;

      setTimeout(this.showTime, 1000)

    },
  },
};
</script>

<style scoped>
.calendar {
  height: 25rem;
  width: 25rem;
  border-radius: 3rem;
  border: solid 1px green;
  box-shadow: 0px 0px 10px green;
}
#clock {
  color: green;
  text-shadow: 2px;

}
</style>
