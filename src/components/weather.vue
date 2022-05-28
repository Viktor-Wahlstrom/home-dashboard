<template>
  <div class="weather">
    <h1>Detta är vädret</h1>
    <div class="weatherBox">
      <img v-bind:src="this.weatherIcon"/>
      <h4>{{this.showWeather}}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WeatherToday",
  data() {
    return {
      //api_key: "0d1ac2ea3b5b859686a80649d53906c5",
      showWeather: "",
      weatherIcon: ""
    };
  },

  mounted() {
    this.fetchWeather();
  },

  methods: {
    fetchWeather() {
      const url =
        "https://api.openweathermap.org/data/2.5/weather?id=" + 2712414 + "&appid=" + this.api_key;

      axios.get(url)
        .then((res) => res.data)
        .then((data) => {
          data.weather.map((item) => {
            this.showWeather = item.description;
            this.weatherIcon = "http://openweathermap.org/img/wn/" + item.icon + "@4x.png";
          });
        });
    }
    }
  }
</script>
<style scoped>
.weather {
  height: 25rem;
  width: 25rem;
  border-radius: 3rem;
  border: solid 1px #0F9D58;
  box-shadow: 0px 0px 10px #0F9D58;
}
.weatherBox {
  display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 2rem;
}
</style>
