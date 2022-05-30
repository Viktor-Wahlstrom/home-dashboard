<template>
  <div class="groceries">
    <h1>Inköpslista
    </h1>
    <div class="list">
    </div>  
    <input class="input" type="text" placeholder="Vad vill du köpa"/>
  </div>
</template>

<script>
export default {
  name: 'GroceriesToBuy',
}
</script>

<style scoped>
.groceries {
  height: 25rem;
  width: 25rem;
  border-radius: 3rem;
  background-color: rgb(238, 238, 238);
  border: solid 1px #F4B400;
  box-shadow: 0px 0px 10px #F4B400;
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
    margin-left: -5rem;
    margin-top: 16rem;
}

</style>