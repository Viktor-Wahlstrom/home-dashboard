<template>
  <div class="calendar">
    <h1>Dagens datum</h1>
    <div id="MyClockDisplay" class="clock"></div>
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
      var session = "AM";

      if (h == 0) {
        h = 12;
      }

      if (h > 12) {
        h = h - 12;
        session = "PM";
      }

      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      var time = h + ":" + m + ":" + s + " " + session;
      document.getElementById("MyClockDisplay").innerText = time;
      document.getElementById("MyClockDisplay").textContent = time;

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
</style>
