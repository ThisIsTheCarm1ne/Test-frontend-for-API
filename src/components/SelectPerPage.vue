<template>
  <div>
    <label for="SelectedPerPage">Select vehicles per page:</label>
    <select name="SelectedPerPage" id="SelectedPerPage" @change="updateVehiclesPerPage">
      <option value=9>9</option>
      <option value=8>8</option>
      <option value=5>5</option>
    </select>
  </div>
</template>

<script lang="ts">
import store from "../store.ts"

export default {
  methods: {
    updateVehiclesPerPage(event) {
      const value = parseInt(event.target.value);
      store.setVehiclesPerPage(value);
    }
  }
}
</script>

<style scoped>
label {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #293148;
}
select {
  box-sizing: border-box;
  border: 1px solid #E4E4E4;
  border-radius: 8px;
  background: 0;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #293148;
}
</style>
