import {
  reactive,
  toRefs
} from "vue";

const initialState = {
  vehiclesPerPage: 9,
  searchQuery: '',
  page: 1
}

// Saves states localStorage, so it won't default upon reload
const savedState = localStorage.getItem("vueStore") !== null
  ? JSON.parse(localStorage.getItem("vueStore") || "{}")
  : initialState;

const replacer = (_: string, value: any) => (value && value.__v_isRef ? value.value : value);

export const store = reactive(savedState);

store.setVehiclesPerPage = (value: number) => {
  store.vehiclesPerPage = value;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

store.setSearchQuery = (value: string) => {
  store.searchQuery = value;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

store.setPage = (value: number) => {
  store.page = value;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

export default store;
