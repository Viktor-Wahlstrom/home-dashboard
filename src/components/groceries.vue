<template>
  <div class="groceries">
    <h1>Inköpslista
    </h1>
    <div class="list">
      <label for="checkbox">
    <input type="checkbox"/>smör
    <input type="checkbox"/>grädde
    <input type="checkbox"/>mjöl
    <input type="checkbox"/>tomater
    <input type="checkbox"/>jordgubbar
    <input type="checkbox"/>flingor
      </label>
    </div>  
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

</style>