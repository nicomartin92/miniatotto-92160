<template>
  <div>
    <input type="text" class="input3" />
    <div class="result"></div>

    <button @click="send">envoyer</button>
    <form action="/" post="method" @click="checkForm">
      <h1>{{input1}} {{input2}}</h1>

      <input type="text" v-model="input1" />
      <input type="text" v-model="input2" />

      <button>submit</button>
    </form>

    <!-- <ul>
      <li v-for="car in getItalianCars" :key="car.id">
        {{car}}
      </li>
    </ul>-->

    <!-- <ul>
      <li v-for="car in seeAllCars" :key="car.id">{{car}}</li>
    </ul> -->
    <button @click="loadSomeCars">load some cars</button>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      message: null,
      input1: null,
      input2: null
    };
  },

  async asyncData() {
    return axios.get("http://localhost:3001/cars").then(response => {
      return { cars: response.data };
    });
  },
  async fetch({ store }) {
    let { data } = await axios.get("http://localhost:3001/cars");
    store.commit("setCars", data);
  },

  mounted() {
    var onkeyup = window.keyup;

    function keyup(elem) {
      var textRasult = "";

      if (elem.keyCode > 65 && elem.keyCode < 90) {
        document.querySelector(".result").innerHTML = textRasult;
      }
    }

    keyup(document.querySelector(".input3"));
  },

  methods: {
    checkForm(e) {
      if (this.input1 && this.input2) {
        alert("submit");
        this.$router.push("/");
        this.$store.commit("addCar", this.input1);
      }
      e.preventDefault();
    },

    send() {
      this.$store.commit("setCars", this.getItalianCars);
    },

    ...mapActions({
      loadSomeCars: "loadCars",
      getSomeCountry: "getCountry"
    })
  },

  computed: {
    getItalianCars() {
      return this.$store.getters.italianCars;
    },

    seeAllCars() {
      return this.$store.getters.loadedCars;
    }
  }
};
</script>
