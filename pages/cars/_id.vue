<template>
  <div>
    <Panelnav :initialdata="cars" />
    <div class="pdp">
      <h3>Modèle: {{ $route.params.id }}</h3>
      <div class="textBlock">
        <div class="textBlock__text">
          <h2 class="textBlock__subLabel">
            {{ carsData[0].brandshop }}
          </h2>
          <h1 class="textBlock__label">
            {{ carsData[0].brand }} {{ carsData[0].model }}
          </h1>
          <h3 class="textBlock__version">
            {{ carsData[0].version }}
          </h3>
          <span class="textBlock__year">{{ carsData[0].year }}</span>
        </div>
        <div class="textBlock__image">
          <img :src="carsData[0].image" :alt="carsData[0].model">
        </div>
      </div>

      <div class="imageContent">
        <div class="imageContent__item -medium">
          <img :src="carsData[0].views[0].image1" :alt="carsData[0].model">   
        </div>
        <div class="imageContent__item -small">
          <div class="textContent">
            <h3 class="subTitle">
              Détails
            </h3>
            <p class="textContent__description">
              {{ carsData[0].description }}
            </p>
          </div>
        </div>
      </div>

      <div class="imageContent">
        <div class="imageContent__item -small">
          <div class="textContent">
            <h3 class="subTitle">
              Caractéristiques
            </h3>
            <ul class="specs">
              <li class="specs__item">
                <span>Référence:</span>
                <span>{{ carsData[0].reference }}</span>
              </li>
              <li class="specs__item">
                <span>Producteur:</span>
                <span>{{ carsData[0].brandshop }}</span>
              </li>
              <li class="specs__item">
                <span>Marque:</span>
                <span>{{ carsData[0].brand }}</span>
              </li>
              <li class="specs__item">
                <span>Modèle:</span>
                <span>{{ carsData[0].model }}</span>
              </li>
              <li class="specs__item">
                <span>Version:</span>
                <span>{{ carsData[0].version }}</span>
              </li>
              <li class="specs__item">
                <span>Année:</span>
                <span>{{ carsData[0].year }}</span>
              </li>
              <li class="specs__item">
                <span>Couleur:</span>
                <span>
                  <span class="skew" />
                  {{ carsData[0].colorname }}
                </span>
              </li>
            </ul>  
          </div>
        </div>
        <div class="imageContent__item -medium">
          <img :src="carsData[0].views[0].image2" :alt="carsData[0].model">   
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Panelnav from '~/components/Panelnav/Panelnav.vue'

  export default {
    components: {
      Panelnav
    },
    data () {
      return {
        title: 'Miniatauto',
        noResults: 'Désolé pas de résultats concernant votre demande'
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Miniatauto - modèle'
          }
        ]
      }
    },
    transition: 'bounce',
    computed: {
      carExists () {
        return this.carsData.length > 0
      },
      resultLength () {
        return this.carsData.length
      }
    },
    async asyncData(params) {
      let [cardataSelected, carAllList] = await Promise.all([
        axios.get(`http://localhost:3001/cars?q=${ params.params.id }`),
        axios.get('http://localhost:3001/cars'),
      ])
      return {
        carsData: cardataSelected.data,
        cars: carAllList.data
      }
    },
    middleware: 'search',
    methods: {
      odd (index) {
        return index % 2 == 0 ? 'odd' : 'even'
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
      color: $colorBlue;
    }

    &__version,
    &__year {
      background: $colorBlack;
      transform: skewX(-18deg);
      display: inline-block;
      padding: 2px 40px;
      color: $colorWhite;
    }

    &__year {
      background: $colorBlue;
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
    padding: 20px 7%;
    text-align: left;
  }

  .imageContent {
    text-align: center;
    display: flex;
    align-items: center;

    &__item {
      max-width: 100%;

      &.-large {
        max-width: 75%;
        min-width: 75%;
      }

      &.-medium {
        max-width: 65%;
        min-width: 65%;
      }

      &.-small {
        max-width: 35%;
        min-width: 35%;
      }

      &.-xsmall {
        max-width: 25%;
        min-width: 25%;
      }
    }

    img {
      max-width: 100%;
    }
  }

  .specs {
    &__item {
      padding: 20px 0;
      border-bottom: 1px solid $colorGray03;
      display: flex;
      justify-content: space-between;

      span {
        color: $colorBlue;
        font-weight: bold;

        + span {
          color: $colorBlack;
        }
      }
    }
  }
</style>
