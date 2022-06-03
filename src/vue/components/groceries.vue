<template>
  <div class="groceries">
    <h1>{{ this.name }}</h1>
    <ul class="liststart"></ul>
    <input class="input" type="text" placeholder="Vad vill du köpa" />
    <button class="addItem" v-on:Click="this.addItem()">{{ this.buttonName }}</button>
    <button class="removeAll" v-on:Click="this.removeAll()">{{this.remove}}</button>
  </div>
</template>

<script>
import { store } from '../store';

export default {
  name: "GroceriesToBuy",
  data() {
    return {
      name: "Inköpslista",
      buttonName: "Lägg till",
      remove: "Rensa"
    };
  },

  mounted() {},

  methods: {
    addItem() {
      const input = document.querySelector(".input");
      let lastItem = store.state.GrocerieList.pop();
      store.state.GrocerieList.push(input.value);

      if ( store.state.GrocerieList.length > 1){ 
      let list = document.querySelector(".liststart");
      let li = document.createElement("li");
      li.innerText = lastItem;
      list.appendChild(li);
      }
      else {
      let list = document.querySelector(".liststart");
      let li = document.createElement("li");
      li.innerText = store.state.GrocerieList [0];
      list.appendChild(li);
      }
    },
    removeAll() {
     document.querySelector(".liststart").innerHTML = "";
    },
  },
};
</script>

<style scoped>
.groceries {
  height: 25rem;
  width: 25rem;
  border-radius: 3rem;
  border: solid 1px #f4b400;
  box-shadow: 0px 0px 10px #f4b400;
}
.list {
  justify-content: center;
  text-align: center;
  display: contents;
  align-content: space-evenly;
  align-items: baseline;
  justify-items: center;
}
.input {
  position: absolute;
  top: 24rem;
  left: 43rem
}
.addItem {
  position: absolute;
  top: 24rem;
  left: 54rem;

}
.removeAll{
  position: absolute;
  top: 24rem;
  left: 59rem;
}
</style>