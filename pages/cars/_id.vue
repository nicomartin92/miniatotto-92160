<template>
  <div>
    <div class="pdp">
      <h3>Modèle: {{$route.params.id}}</h3>
      <div class="textBlock">
        <div class="textBlock__text">
          <h2 class="textBlock__subLabel">{{carsData[0].brandshop}}</h2>
          <h1 class="textBlock__label">{{carsData[0].brand}} {{carsData[0].model}}</h1>
          <h3 class="textBlock__version">{{carsData[0].version}}</h3> <span class="textBlock__year">{{carsData[0].year}}</span>
        </div>
        <div class="textBlock__image">
          <img :src="carsData[0].image" :alt="carsData[0].model">
        </div>
      </div>
      <div class="textContent">
        <p class="textContent__description">
          {{carsData[0].description}}
        </p>
      </div>
      <div class="imageContent">
        <img :src="carsData[0].views[0].image1" :alt="carsData[0].model">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Card from '~/components/Card.vue';

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
.textBlock {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  &__text {
    flex: 0 0 45%;
    max-width: 45%;
    padding: 0 0 0 7%;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: -20%;
        left: -10%;
        display: block;
        min-height: 100%;
        background: #e8e7e7;
        width: 120%;
        max-width: 110%;
        height: 140%;
        z-index: 0;
        transform: skewX(-18deg);
    }
  }

  &__subLabel,
  &__label,
  &__version,
  &__description,
  &__year {
    position: relative;
    z-index: 1;
  }

  &__year {
    padding: 0 20px;
  }

  &__description {
    padding: 20px 50px 0 0;
  }

  &__subLabel {
    font-size: 18px;
    text-transform: uppercase;
  }

  &__version {
    background: $colorBlack;
    transform: skewX(-18deg);
    display: inline-block;
    padding: 2px 40px;
    color: $colorWhite;
  }

  &__image {
    flex: 0 0 55%;
    max-width: 55%;

    img {
      max-width: 100%;
    }
  }
}

.textContent {
  padding: 20px 10%;
  text-align: center;
}

.imageContent {
  text-align: center;

  img {
    max-width: 100%;
  }
}
</style>

