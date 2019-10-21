<template>
  <div v-show="visibleContent">
    <h1>Contact page</h1>
    <div class="result"></div>
    <input type="text" class="inputT" />

    <form @submit="checkForm" action="/" method="post">
      <h2>result: {{input1}} {{input2}}</h2>
      <input type="text" class="input1" v-model="input1" placeholder="message 1" />
      <input type="text" class="input2" v-model="input2" placeholder="message 2" />

      <button>submit</button>
    </form>

    <div>{{ allCountries }}</div>

    <div>
      <h2>Write to Firestore.</h2>
      <div>
        <button @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
      </div>
    </div>

    <div>
      <h2>Read from Firestore.</h2>
      <div>
        <button @click="readFromFirestore" :disabled="readSuccessful">
          <span v-if="!readSuccessful">Read now</span>
          <span v-else>Successful!</span>
        </button>
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import { fireDb } from "~/plugins/firebase.js";

export default {
  layout: "contactlayout",
  data() {
    return {
      showT: false,
      input1: null,
      input2: null,

      writeSuccessful: false,
      readSuccessful: false,
      text: ""
    };
  },

  computed: {
    visibleContent() {
      return this.$store.getters.getVisibleContent;
    },
    allCountries() {
      return this.$store.state.countries;
    }
  },

  mounted() {
    window.onkeyup = keyup;
    let inputTV;

    function keyup(e) {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        inputTV = e.target.value;
        document.querySelector(".result").innerHTML = inputTV;
      }
    }

    keyup(document.querySelector(".inputT"));

    this.$store.dispatch("increment");
  },

  methods: {
    checkForm(e) {
      if (this.input1 && this.input2) {
        alert("submit");
        return true;
      }
      e.preventDefault();
    },

    ...mapActions({
      getSomeCountry: "getCountry"
    }),

    async writeToFirestore() {
      const ref = fireDb.collection("projects").doc("test");
      const document = {
        text: "This is a test message."
      };
      try {
        await ref.set(document);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.writeSuccessful = true;
    },

    async readFromFirestore() {
      const ref = fireDb.collection("projects").doc("test");
      let snap;
      try {
        snap = await ref.get();
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.text = snap.data().text;
      this.readSuccessful = true;
    }
  },

  created() {
    this.getSomeCountry("france");
  }
};
</script>
