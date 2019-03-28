<template>
  <div class="container">
    <h1 class="center">
      Miniatotto
    </h1>

    <chronos :chrono-data="cars" :order="ascDirection" />

    <panelIntro v-for="(car, index) in carNumber" :key="index"
                :reversedisplay="(index % 2) ? true : false"
                :brand="carsFromStore[car].brandshop"
                :carbrand="carsFromStore[car].brand"
                :model="carsFromStore[car].model"
                :version="carsFromStore[car].version"
                :description="carsFromStore[car].description"
                :reference="carsFromStore[car].reference"
                :image="carsFromStore[car].image"
                :colorname="carsFromStore[car].colorname"
                :color="carsFromStore[car].color"
                :available="carsFromStore[car].available"
                :price="carsFromStore[car].price"
                :stock="carsFromStore[car].stock"
    />

    <p>ALL {{ carOption }}</p>
    <div v-for="(result, index) in allCars" :key="index">
      {{ result.brand }} {{ result.model }} {{ result.version }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import panelIntro from '~/components/PanelIntro.vue'
import chronos from '~/components/Chronos.vue'

export default {
  layout: 'default',
  components: {
    panelIntro,
    chronos
  },
  data() {
    return {
      title: 'Minaitauto',
      carNumber: [1,2,3],
      carOption: 'Peugeot',
      ascDirection: 'asc',
      descDirection: 'desc'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Miniatauto boutique en ligne'
        }
      ]
    }
  },
  computed: {
    carsFromStore() {
      return this.$store.getters.loadedCars
    },
    allCars() {
      return this.cars.filter(car => {
        return car.brand === this.carOption
      })
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
  },
  mounted() {
    var elem = document.querySelectorAll('.panelIntro')

    this.switchAnimation(elem)

    window.addEventListener(
      'scroll',
      () => {
        this.switchAnimation(elem)
      },
      false
    )
  },
  methods: {
    inViewPort(elem) {
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
    switchAnimation(elem) {
      elem.forEach(item => {
        if (this.inViewPort(item)) {
          item.classList.add('animate')
        } else {
          item.classList.remove('animate')
        }
      })
    },
    increase() {
      this.$store.state.counter++
    },
    decrease() {
      this.$store.state.counter--
    }
  }
}
</script>

<!-- <template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        miniatauto
      </h1>
      <h2 class="subtitle">
        car selling
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        < img src = "~ / assets / image.png" >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script> -->
