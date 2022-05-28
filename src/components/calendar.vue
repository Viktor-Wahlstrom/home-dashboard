<template>
  <div class="calendar">
    <h1>Dagens datum</h1>
    <div class="time">
    <h3 id="clock"></h3>
    <h2 id="today"></h2>
    <h3 id="week"></h3>
    </div>
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
        nameOfDay = 'Söndag';
        break;
    case 1:
        nameOfDay = 'Mondag';
        break;
    case 2:
        nameOfDay = 'Tisdag';
        break;
    case 3:
        nameOfDay = 'Onsdag';
        break;
    case 4:
        nameOfDay = 'Torsdag';
        break;
    case 5:
        nameOfDay = 'Fredag';
        break;
    case 6:
        nameOfDay = 'Lördag';
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
.time {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: stretch;
}
#clock {
  color: black;
  text-shadow: 0.5px 0.6px black;
  margin-top: 3rem;
}
#today {
  color: black;
  text-shadow: 0.5px 0.6px black;
  margin-top: 1.2rem;
  font-size: 3rem;
}
#week {
  color: black;
  text-shadow: 0.5px 0.6px black;
  margin-top: 1.2rem;
  font-size: 1.7;
}
</style>
