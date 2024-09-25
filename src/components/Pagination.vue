<template>
  <div class="pagination-container">
    <p>Showing {{ vehiclesPerPage }} out of {{ totalVehicles }}</p>
    <div class="pagination">
      <div class="current-page-container">
        <button @click="updatePage(0)">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 16L10 12L14 8" stroke="#293148" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="current-page">
          {{ page }}
        </div>
      </div>
      <p>of</p>
      <div class="total-page-container">
        <div class="total-page">
          {{ ammountOfPages }}
        </div>
        <button @click="updatePage(1)">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 16L14 12L10 8" stroke="#293148" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script langt="ts">
import { watch } from "vue";
import store from "../store.ts"

export default {
  data() {
    return {
      isLoading: false,
      ammountOfPages: 1,
      page: store.page,
      vehiclesPerPage: store.vehiclesPerPage,
      totalVehicles: 0,
    }
  },
  methods: {
    getAmmountOfPages() {
      this.isLoading = true

      fetch('https://api.caiman-app.de/api/cars-test')
        .then(response => response.json())
        .then(data => {
          this.ammountOfPages = Math.ceil(data.meta.total / store.vehiclesPerPage);
          this.totalVehicles = data.meta.total;
          this.isLoading = false;
        })
    },
    // Direction is a boolean value
    // If it's true - then go forward
    // Else - backwards one page
    updatePage(direction) {
      if (!direction && store.page === 1) {
        return;
      }
      if (direction && store.page === this.ammountOfPages) {
        return;
      }

      if (direction) {
        store.setPage(store.page+1);
      } else {
        store.setPage(store.page-1);
      }
    }
  },
  mounted() {
    this.getAmmountOfPages();
    watch(
      () => [store.page, store.vehiclesPerPage],
      (newPage) => {
        this.page = newPage[0];
        this.vehiclesPerPage = newPage[1];
      }
    );
  },
}
</script>

<style scoped>
button {
  background: 0;
  border: 0;
}
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
}
.pagination-container > p {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(41, 49, 72, 0.8);
}
.pagination {
  display: flex;
  justify-content: space-between;
  width: 184px;
}
.pagination > p {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  color: rgba(41, 49, 72, 0.8);
}
.current-page-container {
  display: flex;
  align-items: center;
}
.current-page {
  box-sizing: border-box;
  border: 1px solid #E4E4E4;
  border-radius: 6px;
  padding: 0.5vw;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  color: rgba(41, 49, 72, 0.8);

}
.total-page-container {
  display: flex;
  align-items: center;
}
.total-page {
  box-sizing: border-box;
  border: 1px solid #E4E4E4;
  border-radius: 6px;
  padding: 0.5vw;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: rgba(41, 49, 72, 0.45);
}
</style>
