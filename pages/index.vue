<template>
  <div class="container">
    <h1 class="center">Miniatotto</h1>

    <chronos :chronoData="cars" :order="ascDirection"></chronos>

    <panelIntro :reversedisplay="false"
                :brand="carsFromStore[carNumber6].brandshop"
                :carbrand="carsFromStore[carNumber6].brand"
                :model="carsFromStore[carNumber6].model"
                :version="carsFromStore[carNumber6].version"
                :description="carsFromStore[carNumber6].description"
                :reference="carsFromStore[carNumber6].reference"
                :image="carsFromStore[carNumber6].image"
                :colorname="carsFromStore[carNumber6].colorname"
                :color="carsFromStore[carNumber6].color"
                :available="carsFromStore[carNumber6].available"
                :price="carsFromStore[carNumber6].price"
                :stock="carsFromStore[carNumber6].stock">
    </panelIntro>

    <panelIntro :reversedisplay="true"
                :brand="carsFromStore[carNumber0].brandshop"
                :carbrand="carsFromStore[carNumber0].brand"
                :model="carsFromStore[carNumber0].model"
                :version="carsFromStore[carNumber0].version"
                :description="carsFromStore[carNumber0].description"
                :reference="carsFromStore[carNumber0].reference"
                :image="carsFromStore[carNumber0].image"
                :colorname="carsFromStore[carNumber0].colorname"
                :color="carsFromStore[carNumber0].color"
                :available="carsFromStore[carNumber0].available"
                :price="carsFromStore[carNumber0].price"
                :stock="carsFromStore[carNumber0].stock">
    </panelIntro>

    <panelIntro :reversedisplay="false"
                :brand="carsFromStore[carNumber1].brandshop"
                :carbrand="carsFromStore[carNumber1].brand"
                :model="carsFromStore[carNumber1].model"
                :version="carsFromStore[carNumber1].version"
                :description="carsFromStore[carNumber1].description"
                :reference="carsFromStore[carNumber1].reference"
                :image="carsFromStore[carNumber1].image"
                :colorname="carsFromStore[carNumber1].colorname"
                :color="carsFromStore[carNumber1].color"
                :available="carsFromStore[carNumber1].available"
                :price="carsFromStore[carNumber1].price"
                :stock="carsFromStore[carNumber1].stock">
    </panelIntro>

    <panelIntro :reversedisplay="true"
                :brand="carsFromStore[carNumber2].brandshop"
                :carbrand="carsFromStore[carNumber2].brand"
                :model="carsFromStore[carNumber2].model"
                :version="carsFromStore[carNumber2].version"
                :description="carsFromStore[carNumber2].description"
                :reference="carsFromStore[carNumber2].reference"
                :image="carsFromStore[carNumber2].image"
                :colorname="carsFromStore[carNumber2].colorname"
                :color="carsFromStore[carNumber2].color"
                :available="carsFromStore[carNumber2].available"
                :price="carsFromStore[carNumber2].price"
                :stock="carsFromStore[carNumber2].stock">
    </panelIntro>

    <panelIntro :reversedisplay="false"
                :brand="carsFromStore[carNumber3].brandshop"
                :carbrand="carsFromStore[carNumber3].brand"
                :model="carsFromStore[carNumber3].model"
                :version="carsFromStore[carNumber3].version"
                :description="carsFromStore[carNumber3].description"
                :reference="carsFromStore[carNumber3].reference"
                :image="carsFromStore[carNumber3].image"
                :colorname="carsFromStore[carNumber3].colorname"
                :color="carsFromStore[carNumber3].color"
                :available="carsFromStore[carNumber3].available"
                :price="carsFromStore[carNumber3].price"
                :stock="carsFromStore[carNumber3].stock">
    </panelIntro>

    <panelIntro :reversedisplay="true"
                :brand="carsFromStore[carNumber4].brandshop"
                :carbrand="carsFromStore[carNumber4].brand"
                :model="carsFromStore[carNumber4].model"
                :version="carsFromStore[carNumber4].version"
                :description="carsFromStore[carNumber4].description"
                :reference="carsFromStore[carNumber4].reference"
                :image="carsFromStore[carNumber4].image"
                :colorname="carsFromStore[carNumber4].colorname"
                :color="carsFromStore[carNumber4].color"
                :available="carsFromStore[carNumber4].available"
                :price="carsFromStore[carNumber4].price"
                :stock="carsFromStore[carNumber4].stock">
    </panelIntro>

    <panelIntro :reversedisplay="false"
                :brand="carsFromStore[carNumber5].brandshop"
                :carbrand="carsFromStore[carNumber5].brand"
                :model="carsFromStore[carNumber5].model"
                :version="carsFromStore[carNumber5].version"
                :description="carsFromStore[carNumber5].description"
                :reference="carsFromStore[carNumber5].reference"
                :image="carsFromStore[carNumber5].image"
                :colorname="carsFromStore[carNumber5].colorname"
                :color="carsFromStore[carNumber5].color"
                :available="carsFromStore[carNumber5].available"
                :price="carsFromStore[carNumber5].price"
                :stock="carsFromStore[carNumber5].stock">
    </panelIntro>

    <panelIntro :reversedisplay="true"
                :brand="carsFromStore[carNumber7].brandshop"
                :carbrand="carsFromStore[carNumber7].brand"
                :model="carsFromStore[carNumber7].model"
                :version="carsFromStore[carNumber7].version"
                :description="carsFromStore[carNumber7].description"
                :reference="carsFromStore[carNumber7].reference"
                :image="carsFromStore[carNumber7].image"
                :colorname="carsFromStore[carNumber7].colorname"
                :color="carsFromStore[carNumber7].color"
                :available="carsFromStore[carNumber7].available"
                :price="carsFromStore[carNumber7].price"
                :stock="carsFromStore[carNumber7].stock">
    </panelIntro>

    <panelIntro :reversedisplay="false"
                :brand="carsFromStore[carNumber8].brandshop"
                :carbrand="carsFromStore[carNumber8].brand"
                :model="carsFromStore[carNumber8].model"
                :version="carsFromStore[carNumber8].version"
                :description="carsFromStore[carNumber8].description"
                :reference="carsFromStore[carNumber8].reference"
                :image="carsFromStore[carNumber8].image"
                :colorname="carsFromStore[carNumber8].colorname"
                :color="carsFromStore[carNumber8].color"
                :available="carsFromStore[carNumber8].available"
                :price="carsFromStore[carNumber8].price"
                :stock="carsFromStore[carNumber8].stock">
    </panelIntro>

    <panelIntro :reversedisplay="true"
                :brand="carsFromStore[carNumber9].brandshop"
                :carbrand="carsFromStore[carNumber9].brand"
                :model="carsFromStore[carNumber9].model"
                :version="carsFromStore[carNumber9].version"
                :description="carsFromStore[carNumber9].description"
                :reference="carsFromStore[carNumber9].reference"
                :image="carsFromStore[carNumber9].image"
                :colorname="carsFromStore[carNumber9].colorname"
                :color="carsFromStore[carNumber9].color"
                :available="carsFromStore[carNumber9].available"
                :price="carsFromStore[carNumber9].price"
                :stock="carsFromStore[carNumber9].stock">
    </panelIntro>

    <panelIntro :reversedisplay="false"
                :brand="carsFromStore[carNumber10].brandshop"
                :carbrand="carsFromStore[carNumber10].brand"
                :model="carsFromStore[carNumber10].model"
                :version="carsFromStore[carNumber10].version"
                :description="carsFromStore[carNumber10].description"
                :reference="carsFromStore[carNumber10].reference"
                :image="carsFromStore[carNumber10].image"
                :colorname="carsFromStore[carNumber10].colorname"
                :color="carsFromStore[carNumber10].color"
                :available="carsFromStore[carNumber10].available"
                :price="carsFromStore[carNumber10].price"
                :stock="carsFromStore[carNumber10].stock">
    </panelIntro>

    <p>ALL {{carOption}}</p>
    <div v-for="(result, index) in allCars" :key="index">
      {{result.brand}} {{result.model}} {{result.version}}
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import panelIntro from '~/components/panelIntro.vue';
import chronos from '~/components/chronos.vue';

export default {
  layout: 'default',
  data() {
    return {
      title: 'Minaitauto',
      carNumber0: 0,
      carNumber1: 1,
      carNumber2: 2,
      carNumber3: 3,
      carNumber4: 4,
      carNumber5: 5,
      carNumber6: 6,
      carNumber7: 7,
      carNumber8: 8,
      carNumber9: 9,
      carNumber10: 10,
      carOption: 'Peugeot',
      ascDirection: 'asc',
      descDirection: 'desc'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Miniatauto boutique en ligne' }
      ]
    }
  },
  components: {
    panelIntro,
    chronos
  },
  methods: {
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
    },
    switchAnimation(elem) {
      elem.forEach((item) => {
        if (this.inViewPort(item)) {
          item.classList.add('animate');
        } else {
          item.classList.remove('animate');
        }
      });
    },
    increase () {
      this.$store.state.counter++;
    },
    decrease () {
      this.$store.state.counter--;
    }
  },
  computed: {
    carsFromStore() {
      return this.$store.getters.loadedCars
    },
    allCars () {
      return this.cars.filter((car) => {
        return car.brand === this.carOption;
      })
    }
  },
  mounted() {
    var elem = document.querySelectorAll('.panelIntro');

    this.switchAnimation(elem);

    window.addEventListener('scroll', (event) => {
      this.switchAnimation(elem);
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
</script>
