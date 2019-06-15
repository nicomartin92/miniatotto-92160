<template>
  <div class="container">
    <Panelnav :initialdata="cars" />
    
    <h1>My wishlist</h1>    

    <ul>
      <li v-for="(car, index) in preferenceFromStore">
        {{ car.brand }} {{ car.model }} - {{ car.preference }}
        <img :src="car.image" loading="lazy" :alt="car.model" width="200">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Panelnav from '~/components/Panelnav/Panelnav.vue'

export default {
  layout: 'default',
  components: {
    Panelnav
  },
  computed: {
    preferenceFromStore() {
      return this.$store.getters.preferenceCars
    }
  },
  async asyncData() {
    return axios.get('http://localhost:3001/cars').then(response => {
      return { cars: response.data }
    })
  },
  async fetch({ store }) {
    let { data } = await axios.get('http://localhost:3001/cars')
    store.commit('setCars', data)
  }
}
</script>