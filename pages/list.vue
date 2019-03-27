<template>
  <div class="list">
    <cars></cars>

    <modal></modal>

    <div class="sticky">
      <h3 class="center">Chercher un modèle particulier:</h3>
      <form @submit.prevent="submit()" class="center">
        <input type="text" placeholder="Exemple: BMW..." v-model="search" autofocus>
      </form>
      

      <div class="list__filter">
        <label>
          <input type="radio" v-model="selectedCategory" value="All" />
          <span>Voir tous les modèles</span>
        </label>
        <label>
          <input type="radio" v-model="selectedCategory" value="Peugeot" />
          <span>Peugeot</span>
        </label>
        <label>
          <input type="radio" v-model="selectedCategory" value="Renault" />
          <span>Renault</span>
        </label>
        <label>
          <input type="radio" v-model="selectedCategory" value="BMW" />
          <span>BMW</span>
        </label>
        <label>
          <input type="radio" v-model="selectedCategory" value="Alpine" />
          <span>Alpine</span>
        </label>
      </div>
    </div>

    <ul class="list__wrapper">
      <li class="list__item"
          v-for="car in filteredCars"
          :key="car.id"
      >
        <div>
          <callModal :imageData="{
                                  'image': car.image,
                                  'brand': car.brand,
                                  'model': car.model,
                                  'version': car.version,
                                  'color': car.color
                                 }" >
            <img :src="car.image" :alt="car.model">
          </callModal>
          <div>{{ car.brand }} {{ car.model }} {{ car.version }}</div>
          <div> <span class="squareColor" :style="{ background: car.color }"></span> {{ car.colorname }}</div>
          <div>Disponibilité: {{ car.available }}</div>
          <div>Prix: {{ car.price }}</div>
          <div>Stock: {{ car.stock }}</div>
          <nuxt-link class="button-like" :to="`/cars/${car.reference}`" >{{ car.model }} Profil</nuxt-link>
          <button v-if="car.stock > 0" class="button-like">Add to bag</button>
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
import axios from 'axios';

import cars from '~/components/cars.vue';
import panelIntro from '~/components/panelIntro.vue';
import modal from '~/components/modal/modalContent.vue';
import callModal from '~/components/modal/callModal.vue';

import { store } from 'vuex'

export default {
  layout: 'modelLayout',
  name: 'list',
  data() {
    return {
      title: 'Mianiatauto - page catégorie',
      search: '',
      selectedCategory: "All"
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Miniatauto - voir les catégories' }
      ]
    }
  },
  transition: 'bounce',
  components: {
    cars,
    panelIntro,
    modal,
    callModal
  },
  methods: {
    submit(event) {
      this.$router.push(`results/${this.search}`);
    },
    inViewPort(elem) {
        const scroll = window.scrollY || window.pageYOffset
        const boundsTop = elem.getBoundingClientRect().top + scroll

        const viewport = {
          top: scroll,
          bottom: scroll + window.innerHeight,
        }

        const bounds = {
          top: boundsTop,
          bottom: boundsTop + elem.clientHeight,
        }

        return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom )
          || ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
    }
  },
  computed: {
    filteredCarsFromStore() {
      return this.$store.getters.loadedCars
    },
    filteredCars() {
			let vm = this;
			let category = vm.selectedCategory;

			if(category === "All") {
        return vm.cars;
			} else {
				return vm.cars.filter(function(car) {
					return car.brand === category;
				});
			}
    },
    filteredList() {
      return this.cars.filter(car => {
        return car.brand.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  mounted() {
    var elem = document.querySelectorAll('.panelIntro');

    window.addEventListener('scroll', (event) => {
      elem.forEach((item, index, map) => {
        if (this.inViewPort(item)) {
          item.classList.add('animate');
        } else {
          item.classList.remove('animate');
        }
      });
    }, false);
  },
  async asyncData () {
    return axios.get('http://localhost:3001/cars')
    .then((response) => {
      return { cars: response.data }
    })
  },
  async fetch ({ store, params }) {
    let { data } = await axios.get('http://localhost:3001/cars')
    store.commit('setCars', data)
  }
}
</script>

<style lang="scss">
.list {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__item {
    width: 30%;
    text-align: center;
    margin: 5px;
    transition: .15s all ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: auto;
    }

    .button-like {
      @include button($colorBlack, $colorWhite);
    }
  }

  .sticky {
    top: 50px;
    background: rgba(255, 255, 255, 0.85);
    padding: 20px;
  }

  &__filter {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;

    label {
      @include button($colorBlack, $colorWhite);
    }
  }
}
</style>

