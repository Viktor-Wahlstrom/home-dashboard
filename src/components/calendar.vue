<template>
  <div class="calendar">
    <h1>Dagens datum</h1>
    <h3 id="clock"></h3>
    <h3 id="today"></h3>
    <h3 id="week"></h3>
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
    this.showday();
  },

  methods: {
    showTime() {
      let date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      

      let time = h + ":" + m + ":" + s;
      document.getElementById("clock").innerText = time;
      document.getElementById("clock").textContent = time;

      setTimeout(this.showTime, 1000)
    },
    showday() {
      let date = new Date();
      let dayOfWeekNumber = date.getDay();
      let nameOfDay;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        break;
    case 1:
        nameOfDay = 'Monday';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        break;
    case 4:
        nameOfDay = 'Thursday';
        break;
    case 5:
        nameOfDay = 'Friday';
        break;
    case 6:
        nameOfDay = 'Saturday';
        break;

}
        let today = document.getElementById('today');
        today.innerHTML = `${nameOfDay}`;

        const startDate = new Date(date.getFullYear(), 0, 1);
        let days = Math.floor((date - startDate) /
        (24 * 60 * 60 * 1000));
         
    let weekNumber = Math.ceil(days / 7);

    document.getElementById('week').innerHTML = 'v.' + weekNumber;
    },
  },
};
</script>

<style scoped>
.calendar {
  height: 25rem;
  width: 25rem;
  border-radius: 3rem;
  border: solid 1px #4285F4;
  box-shadow: 0px 0px 10px #4285F4;
}
#clock {
  color: black;
  text-shadow: 0.5px 0.6px black;

}
</style>
