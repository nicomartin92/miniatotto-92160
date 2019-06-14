<template>
  <div class="container">
    <Panelnav :initialdata="cars" />
    
    <h1>My wishlist</h1>    
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