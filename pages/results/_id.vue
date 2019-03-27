<template>
  <div>
    <h1 class="center">Les modèles recherchés: {{$route.params.id}}</h1>
    <h2 class="center">Voir les résulats: ({{this.resultLength}})</h2>

    <div v-if="carExists" class="cardContainer">
      <div v-for="(car, index) in carsData" :key="index">
        <card
          :class="{ 'odd': odd(index) }"
          :brand="car.brandshop"
          :carbrand="car.brand"
          :model="car.model"
          :version="car.version"
          :reference="car.reference"
          :image="car.image"
          :colorname="car.colorname"
          :color="car.color"
          :available="car.available"
          :price="car.price"
        ></card>
      </div>
    </div>
    <div v-else class="center">
      {{this.noResults}}: {{$route.params.id}}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Card from '~/components/Card.vue'

export default {
  data  () {
    return {
      title: 'Miniatauto',
      noResults: 'Désolé pas de résultats concernant votre demande'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Miniatauto - modèle' }
      ]
    }
  },
  transition: 'bounce',
  components: {
    Card
  },
  asyncData (params) {
    return axios.get(`http://localhost:3001/cars?q=${params.params.id}`)
      .then((response) => {
        return {carsData: response.data}
      });
  },
  middleware: 'search',
  methods: {
    odd (index) {
      return index % 2 == 0 ? 'odd' : 'even';
    }
  },
  computed: {
    carExists () {
      return this.carsData.length > 0;
    },
    resultLength () {
      return this.carsData.length;
    }
  }
}
</script>

<style lang="scss">
.cardContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.center {
  text-align: center;
}

</style>

