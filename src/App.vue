<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'
import AddVehicleButton from './components/AddVehicleButton.vue'
import SelectPerPage from './components/SelectPerPage.vue'
import SearchBar from './components/SearchBar.vue'
import Grid from './components/Grid.vue'
import Pagination from './components/Pagination.vue'
</script>

<template>
  <div class="horizontal-layout">
    <NavBar />
    <div class="vertical-layout">
      <Header />
      <div class="top-bar">
        <div class="searches">
          <SearchBar />
          <SelectPerPage />
        </div>
        <AddVehicleButton />
      </div>
      <Grid />
      <Pagination />
    </div>
  </div>
</template>

<style scoped>
.horizontal-layout {
  display: flex;
  width: 100vw;
}
.vertical-layout {
  width: 86.5%;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2vw;
  padding-right: 2vw;
}
.searches {
  display: flex;
  align-items: center;
  gap: 5vw;
}
@media screen and (max-width: 720px) {
  .vertical-layout {
    width: 100%;
  }
}
</style>
