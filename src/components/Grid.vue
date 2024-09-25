<template>
  <p v-if="isLoading">Loading...</p>

  <div class="products">
    <div v-for="p in products" :key="p.id" class="card">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#293148" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#293148" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#293148" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <img :src="p.preview" :alt="p.vehicle_name" />
      <h2>{{ p.vehicle_name || "No Name" }}</h2>
      <p class="wdb">WDB 1400321A333419</p>
      <hr />
      <div class="bottom-card">
        <div class="badge">5/30</div>
        <p class="days-left">3 days left</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { watch } from "vue";
import store from "../store.ts"

export default {
  data() {
    return {
      products: [],
      isLoading: false
    }
  },
  methods: {
    getProducts() {
      this.isLoading = true;

      fetch(`https://api.caiman-app.de/api/cars-test?search=${store.searchQuery}&per_page=${store.vehiclesPerPage}&page=${store.page}`)
        .then(response => response.json())
        .then(data => {
          this.products = data.data;
          this.isLoading = false;
        })
    }
  },
  mounted() {
    this.getProducts();
    watch(
      () => [store.vehiclesPerPage, store.page, store.searchQuery],
      () => {
        this.getProducts(); // Re-fetch products whenever either value changes
      }
    );
  },
}
</script>

<style scoped>
svg {
  float: right;
}
.products {
  margin-top: 3vh;
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  align-items: stretch;
  justify-items: stretch;
  gap: 2vw;
  padding-left: 2vw;
  padding-right: 2vw;
}
.card {
  background: #F3F6F8;
  border-radius: 10px;
  padding: 20px;
}
img {
  width: 100%;
  height: auto;
}
h2 {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #293148;
}
.wdb {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;

  color: rgba(41, 49, 72, 0.6);
}
hr {
  border: 1px solid #E4E4E4;
}
.bottom-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.badge {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 14px;
  gap: 10px;

  background: #EDEDED;
  border-radius: 6px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;

  color: rgba(41, 49, 72, 0.8);
}
.days-left {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;

  color: rgba(41, 49, 72, 0.6);
}
@media screen and (max-width: 720px) {
.products {
  grid-template-columns: 2fr;
}
}
</style>
