<template>
  <div>
    <form @submit.prevent="submitSearch">
      <input type="text" placeholder="Search VIN" name="search" @input="updateSearchQuery">
      <button type="submit">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.95 18 14.6819 17.2298 15.9483 15.9512C16.1356 15.7621 16.3905 15.6555 16.6566 15.6549C16.9228 15.6543 17.1781 15.7598 17.3662 15.9481L21.7074 20.2932C22.0978 20.6839 22.0975 21.3171 21.7068 21.7074C21.3161 22.0978 20.6829 22.0975 20.2926 21.7068L16.6222 18.0331C15.0815 19.2744 13.1344 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 12.2053 19.7625 13.3576 19.3309 14.4109C19.1215 14.9219 18.5374 15.1664 18.0264 14.957C17.5153 14.7476 17.2708 14.1635 17.4803 13.6525C17.815 12.8357 18 11.9407 18 11C18 7.13401 14.866 4 11 4Z" fill="#293148" fill-opacity="0.45"/>
        </svg>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import store from "../store.ts"

export default {
  methods: {
    updateSearchQuery(event) {
      const value = event.target.value;
      store.setSearchQuery(value);
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 354px;
  height: 42px;
  border: 1px solid #E4E4E4;
  border-radius: 8px;
}
button {
  background: 0;
  border: 0;
}
input {
  border: 0;
  width: 100%;
  height: 24px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: rgba(41, 49, 72, 0.8);
}
@media screen and (max-width: 720px) {
  form {
    width: 40vw;
  }
}
</style>
