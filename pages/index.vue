<template>
  <div class="container">
    <!-- <Panelnav :initialdata="cars" /> -->
    <Panelnav :initialdata="carsFromStore" />

    <div class="headLine">
      <h3 class="headLine__subTitle">
        La passion des minatures
      </h3>
      <h1 class="headLine__title">
        Miniatotto
      </h1>
    </div>

    <!-- 
      Props: animation: scaleDown, scaleUp
    -->
    <slider :initial-data="carsFromStore" pattern="/pattern/pattern-metal.jpg" animation="scaleUp" />

    <imagecompare
      :car-before="carsFromStore[2].views[0].image1"
      :car-after="carsFromStore[6].views[0].image1"
      label-color-before="Rouge Flame"
      label-color-after="Noir"
      :divider="2"
    />

    <imagecompare
      :car-before="carsFromStore[19].views[0].image1"
      :car-after="carsFromStore[20].views[0].image1"
      label-color-before="White"
      label-color-after="Rosso Competizione"
      :divider="1.5"
    />

    <panelIntro
      v-for="(car, index) in carNumber"
      :key="car.id"
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

    <chronos :chrono-data="carsFromStore" :order="ascDirection" />

    <div v-for="item in germanCars" :key="item.id">
      {{ item.brand }} {{ item.model }} {{ item.version }}
    </div>

    <p>ALL {{ carOption }}</p>
    <div
      v-for="(result, index) in allCars"
      :key="index"
    >
      {{ result.brand }} {{ result.model }} {{ result.version }}
    </div>
  </div>
</template>

<script>
import axios from "axios"
import panelIntro from "~/components/PanelIntro.vue"
import Panelnav from "~/components/Panelnav/Panelnav.vue"
import Chronos from "~/components/Chronos.vue"
import imagecompare from "~/components/ImageCompare.vue"
import slider from "~/components/Slider.vue"

export default {
  layout: "default",
  components: {
    panelIntro,
    Chronos,
    Panelnav,
    imagecompare,
    slider
  },
  data() {
    return {
      title: "Miniatauto",
      carNumber: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      carOption: "Peugeot",
      ascDirection: "asc",
      descDirection: "desc"
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Miniatauto boutique en ligne"
        }
      ]
    }
  },
  computed: {
    carsFromStore() {
      return this.$store.getters.loadedCars
    },
    germanCars() {
      return this.$store.getters.germanCars
    },
    allCars() {
      return this.$store.getters.loadedCars.filter(car => {
        return car.brand === this.carOption
      })
    }
  },

  /* async asyncData() {
    return axios.get("http://localhost:3001/cars").then(response => {
      return { cars: response.data };
    });
  },
  async fetch({ store }) {
    let { data } = await axios.get("http://localhost:3001/cars");
    store.commit("setCars", data);
  }, */

  mounted() {
    var elem = document.querySelectorAll(".panelIntro")

    this.switchAnimation(elem)

    window.addEventListener(
      "scroll",
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
          item.classList.add("animate")
        } else {
          item.classList.remove("animate")
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

<!-- 
        < img src = "~ / assets / image.png" >
  -->
