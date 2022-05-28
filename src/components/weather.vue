<template>
  <div class="weather">
    <h1>Detta är vädret</h1>
    <div class="weather-box">
      <div>{{this.showWeather}}</div>
      <div>{{this.weahterIcon}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      //api_key: "0d1ac2ea3b5b859686a80649d53906c5",
      showWeather: "",
      weahterIcon: ""
    };
  },

  mounted() {
    this.fetchWeather();
    this.fetchIcon();
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
            this.weahterIcon = item.icon;
          });
        });
    },
    fetchIcon() {
      const Iconurl = 
        "http://openweathermap.org/img/wn/" + this.weahterIcon + "@2x.png";

        axios.get(Iconurl)
        .then((res) => res.data)
        .then((data) => {
          data.weather.map((item) => {
            this.weahterIcon = item.icon;
              });
        });
    }
  },
};
</script>
<style scoped>
.weather {
  height: 25rem;
  width: 25rem;
  border-radius: 3rem;
  border: solid 1px blue;
  box-shadow: 0px 0px 10px blue;
}
</style>
