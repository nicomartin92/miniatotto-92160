<template>
  <div class="container">
    <!-- <Panelnav :initialdata="cars" /> -->
    <Panelnav :initialdata="carsFromStore" />

    <h1>My wishlist</h1>

    <Grid :initial-data="preferenceFromStore" />
  </div>
</template>

<script>
import axios from "axios";
import Panelnav from "~/components/Panelnav/Panelnav.vue";
import Grid from "~/components/Grid.vue";

export default {
  layout: "default",
  components: {
    Panelnav,
    Grid
  },
  computed: {
    carsFromStore() {
      return this.$store.getters.loadedCars;
    },
    preferenceFromStore() {
      return this.$store.getters.preferenceCars;
    }
  },
  
  /* async asyncData() {
    return axios.get("http://localhost:3001/cars").then(response => {
      return { cars: response.data };
    });
  },
  async fetch({ store }) {
    let { data } = await axios.get("http://localhost:3001/cars");
    store.commit("setCars", data);
  } */
};
</script>