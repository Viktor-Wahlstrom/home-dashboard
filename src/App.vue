<template>
  <div class="top">
  <Weather />
  <Groceries />
  <Calendar />
  </div>
  <div class="bottom">
    <Chat />
  </div>
</template>

<script>
import Weather from './components/weather.vue'
import Groceries from './components/groceries.vue'
import Calendar from './components/calendar.vue'
import Chat from './components/chat.vue'

export default {
  name: 'App',
  components: {
    Weather,
    Groceries,
    Calendar,
    Chat
}
}
</script>

<style>
html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #FAF9F6;
}
.top {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
}
.bottom { 
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>
