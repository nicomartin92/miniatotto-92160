<template>
  <div>
    <!-- <Panelnav :initialdata="cars" /> -->
    <Panelnav :initialdata="carsFromStore" />

    <h1 class="center">Les modèles recherchés: {{ $route.params.id }}</h1>
    <h2 class="center">Voir les résulats: ({{ resultLength }})</h2>

    <ul v-if="carExists" class="cardContainer">
      <li v-for="(car, index) in carsData" :key="index" class="cardContainer__item">
        <Card
          :class="{ odd: odd(index) }"
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
        />
      </li>
    </ul>
    <div v-else class="center">
      {{ noResults }}: {{ $route.params.id }}
      <p>Vous serez peut être intéressé par ces modèles :</p>

      <div>
        <panelIntro
          v-for="(car, index) in carNumber"
          :key="car.id"
          :reversedisplay="(index % 2) ? true : false"
          :brand="cars[car].brandshop"
          :carbrand="cars[car].brand"
          :model="cars[car].model"
          :version="cars[car].version"
          :description="cars[car].description"
          :reference="cars[car].reference"
          :image="cars[car].image"
          :colorname="cars[car].colorname"
          :color="cars[car].color"
          :available="cars[car].available"
          :price="cars[car].price"
          :stock="cars[car].stock"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "~/components/Card.vue";
import panelIntro from "~/components/PanelIntro.vue";
import Panelnav from "~/components/Panelnav/Panelnav.vue";

export default {
  components: {
    Card,
    Panelnav,
    panelIntro
  },
  data() {
    return {
      title: "Miniatauto",
      noResults: "Désolé pas de résultats concernant votre demande",
      carNumber: [1, 2]
    };
  },
  computed: {
    carsFromStore() {
      return this.$store.getters.loadedCars;
    },
    carExists() {
      return this.carsData.length > 0;
    },
    resultLength() {
      return this.carsData.length;
    }
  },

  async asyncData(params) {
    let [cardataSelected, carAllList] = await Promise.all([
      axios.get(`http://localhost:3001/cars?q=${params.params.id}`),
      axios.get("http://localhost:3001/cars")
    ]);
    return {
      carsData: cardataSelected.data,
      cars: carAllList.data
    };
  },

  mounted() {
    var elem = document.querySelectorAll(".panelIntro");

    this.switchAnimation(elem);

    window.addEventListener(
      "scroll",
      () => {
        this.switchAnimation(elem);
      },
      false
    );
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Miniatauto - modèle"
        }
      ]
    };
  },
  transition: "bounce",
  middleware: "search",
  methods: {
    odd(index) {
      return index % 2 == 0 ? "odd" : "even";
    },
    inViewPort(elem) {
      const scroll = window.scrollY || window.pageYOffset;
      const boundsTop = elem.getBoundingClientRect().top + scroll;

      const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight
      };

      const bounds = {
        top: boundsTop,
        bottom: boundsTop + elem.clientHeight
      };

      return (
        (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
      );
    },
    switchAnimation(elem) {
      elem.forEach(item => {
        if (this.inViewPort(item)) {
          item.classList.add("animate");
        } else {
          item.classList.remove("animate");
        }
      });
    }
  }
};
</script>

<style lang="scss">
.cardContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &__item {
    width: 100%;
    margin: 0;
    overflow: hidden;

    @include medium {
      width: 50%;
    }

    @include large {
      width: 33.3%;
    }
  }
}

.center {
  text-align: center;
}
</style>
