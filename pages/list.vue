<template>
  <div class="list">
    <Cars />
    <Panelnav :initialdata="cars" />
    <Modal />

    <div class="sticky">
      <h3 class="center">
        Chercher un modèle particulier:
      </h3>
      <form class="center" @submit.prevent="submit()">
        <input
          v-model="search"
          type="text"
          placeholder="Exemple: BMW..."
          autofocus
        >
      </form>

      <div class="list__filter">
        <label>
          <input v-model="selectedCategory" type="radio" value="All">
          <span>Voir tous les modèles</span>
        </label>
        <label>
          <input v-model="selectedCategory" type="radio" value="fr">
          <span>France</span>
        </label>
        <label>
          <input v-model="selectedCategory" type="radio" value="de">
          <span>Allemagne</span>
        </label>
        <label>
          <input v-model="selectedCategory" type="radio" value="it">
          <span>Italienne</span>
        </label>
      </div>
    </div>

    <ul class="list__wrapper">
      <li v-for="car in filteredCars" :key="car.id" class="list__item">
        <div>
          <CallModal
            :image-data="{
              image: car.image,
              brand: car.brand,
              model: car.model,
              version: car.version,
              color: car.color
            }"
          >
            <img :src="car.image" :alt="car.model">
          </CallModal>
          <div v-if="car.new === true" class="list__new">
            Nouveauté
          </div>  
          <div>{{ car.brand }} {{ car.model }} {{ car.version }}</div>
          <div>
            <span class="squareColor" :style="{ background: car.color }" />
            {{ car.colorname }}
          </div>
          <div>Disponibilité: {{ car.available }}</div>
          <div>Prix: {{ car.price }}</div>
          <div>Stock: {{ car.stock }}</div>
          <nuxt-link class="button-like" :to="`/cars/${car.reference}`">
            {{ car.model }} Profil
          </nuxt-link>
          <button v-if="car.stock > 0" class="button-like">
            Add to bag
          </button>
        </div>
      </li>
    </ul>
  </div>
  </li>
  </ul>
  </div>
</template>
<script>
  import axios from 'axios'

  import Cars from '~/components/Cars.vue'
  import Modal from '~/components/modal/ModalContent.vue'
  import Panelnav from '~/components/Panelnav/Panelnav.vue'
  import CallModal from '~/components/modal/CallModal.vue'

  export default {
    layout: 'modelLayout',
    name: 'List',
    components: {
      Cars,
      Modal,
      CallModal,
      Panelnav
    },
    data () {
      return {
        title: 'Mianiatauto - page catégorie',
        search: '',
        selectedCategory: 'All'
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Miniatauto - voir les catégories'
          }
        ]
      }
    },
    transition: 'bounce',
    computed: {
      filteredCarsFromStore () {
        return this.$store.getters.loadedCars
      },
      filteredCars () {
        let vm = this
        let category = vm.selectedCategory

        switch(category) {
          case 'fr':
            return this.$store.getters.frenchCars
          case 'de':
            return this.$store.getters.germanCars
          case 'it':
            return this.$store.getters.italianCars  
          default:
            return this.$store.getters.loadedCars
        }
      },
      filteredList () {
        return this.cars.filter(car => {
          return car.brand.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },

    async asyncData () {
      return axios.get('http://localhost:3001/cars').then(response => {
        return { cars: response.data }
      })
    },

    async fetch ({ store }) {
      let { data } = await axios.get('http://localhost:3001/cars')
      store.commit('setCars', data)
    },

    mounted () {
      var elem = document.querySelectorAll('.panelIntro')

      window.addEventListener(
        'scroll',
        () => {
          elem.forEach((item) => {
            if (this.inViewPort(item)) {
              item.classList.add('animate')
            } else {
              item.classList.remove('animate')
            }
          })
        },
        false
      )
    },
    methods: {
      submit () {
        this.$router.push(`results/${ this.search }`)
      },
      inViewPort (elem) {
        const scroll = window.scrollY || window.pageYOffset
        const boundsTop = elem.getBoundingClientRect().top + scroll

        const viewport = {
          top: scroll,
          bottom: scroll + window.innerHeight
        }

        const bounds = {
          top: boundsTop,
          bottom: boundsTop + elem.clientHeight
        }

        return (
          (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
          (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
        )
      }
    }
  }
</script>

<style lang="scss">
  .list {
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      overflow: hidden;
    }

    &__item {
      width: 33.3%;
      position: relative;
      box-sizing: border-box;
      text-align: center;
      border: #eae8e4 1px solid;
      margin: 0;
      transition: 0.15s all ease-in-out;

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

    &__new {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      background: $colorBlack;
      color: $colorWhite;
      padding: 10px;
    }
  }
</style>
