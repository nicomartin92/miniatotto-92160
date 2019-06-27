<template>
  <div class="list">
    <Panelnav :initialdata="cars" />
    <Modal />

    <div class="sticky">
      <div class="list__category">
        <div class="list__categoryTitle">
          <span class="bold">Voitures</span> ({{ carsLength }})
        </div>
        <button class="list__filterButton"
                :class="{ '-active': activeFilter }"
                @click="expand()"
        >
          <svg class="icon">
            <use xlink:href="#icon-filter" />
          </svg>
          <span>Filtrer</span>
        </button>
      </div>
      <div v-show="expanded" class="list__searchBar">
        <div class="list__search">
          <h3 class="center">
            Chercher un modèle particulier: ({{ carsLength }} modèles au total)
          </h3>
          <form class="center" @submit.prevent="submit()">
            <input
              v-model="search"
              type="text"
              placeholder="Exemple: BMW..."
              autofocus
            >
          </form>
        </div>

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
          <label>
            <input v-model="selectedCategory" type="radio" value="1/18">
            <span>1/18</span>
          </label>
          <label>
            <input v-model="selectedCategory" type="radio" value="1/12">
            <span>1/12</span>
          </label>
        </div>
      </div>
    </div>

    <ul class="list__wrapper">
      <li v-for="car in filteredCars" :key="car.id" class="list__item">
        <div :class="{ 'unavailable': car.stock < 1 }">
          <CallModal
            :image-data="{
              image: car.image,
              brand: car.brand,
              model: car.model,
              version: car.version,
              color: car.color
            }"
          >
            <img :src="car.image" loading="lazy" :alt="car.model">
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
</template>
<script>
  import axios from 'axios'

  import Modal from '~/components/modal/ModalContent.vue'
  import Panelnav from '~/components/Panelnav/Panelnav.vue'
  import CallModal from '~/components/modal/CallModal.vue'

  export default {
    layout: 'modelLayout',
    name: 'List',
    components: {
      Modal,
      CallModal,
      Panelnav
    },
    data () {
      return {
        title: 'Mianiatauto - page catégorie',
        search: '',
        selectedCategory: 'All',
        expanded: false,
        activeFilter: false
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
          case '1/18':
            return this.$store.getters.sizeCars18
          case '1/12':
            return this.$store.getters.sizeCars12   
          default:
            return this.$store.getters.loadedCars
        }
      },
      filteredList () {
        return this.cars.filter(car => {
          return car.brand.toLowerCase().includes(this.search.toLowerCase())
        })
      },
      carsLength () {
        return this.$store.getters.loadedCars.length
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
      },
      expand() {
        this.expanded = !this.expanded
        this.activeFilter = !this.activeFilter
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

    &__category {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid $colorGray03;
      border-top: 1px solid $colorGray03;
    }

    &__categoryTitle {
      padding: 20px;
    }

    &__searchBar {
      padding: 30px 0;
    }

    &__filterButton {
      padding: 20px;
      border-left: 1px solid $colorGray03;
      border-right: 1px solid $colorGray03;
      transition: all .3s ease-in;
      display: flex;
      align-items: center;

      &.-active {
        border-bottom: 5px solid $colorBlack;
      }

      svg {
        margin-right: 15px;
      }
    }

    &__item {
      width: 100%;
      position: relative;
      box-sizing: border-box;
      text-align: center;
      border: #eae8e4 1px solid;
      margin: 0;
      transition: 0.15s all ease-in-out;

      @include medium {
        width: 50%;
      }

      @include large {
        width: 33.3%;
      }

      @include xlarge {
        width: 25%;
      }

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
      background: rgba(255, 255, 255, 0.90);
    }

    &__filter {
      display: flex;
      justify-content: center;
      margin: 20px 0;
      border-top: 1px solid #999;
      border-bottom: 1px solid #999;
      flex-wrap: wrap;

      label {
        @include button($colorBlack, $colorWhite);
      }
    }

    &__new {
      position: absolute;
      left: 5%;
      top: 0;
      width: 50%;
      background: $colorBlue;
      color: $colorWhite;
      padding: 5px 10px;
      transform: skewX(-18deg);
    }
  }

  .unavailable {
    img {
      opacity: .5;
    }
  }
</style>
