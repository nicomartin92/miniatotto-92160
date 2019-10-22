<template>
  <div>
    <div v-show="isContentFirestore" class="form">
      <h1>Contact page</h1>
      <div class="result" />
      <input type="text" class="inputT">

      <form action="/" method="post" @submit="checkForm">
        <h2>result: {{ input1 }} {{ input2 }}</h2>
        <input v-model="input1" type="text" class="input1" placeholder="message 1">
        <input v-model="input2" type="text" class="input2" placeholder="message 2">

        <button>submit</button>
      </form>

      <div>{{ allCountries }}</div>
    </div>

    <div v-show="isContentFirestore" class="firestore">
      <div>
        <h2>Write to Firestore.</h2>
        <div>
          <button :disabled="writeSuccessful" @click="writeToFirestore">
            <span v-if="!writeSuccessful">Write now</span>
            <span v-else>Successful!</span>
          </button>
        </div>
      </div>

      <div>
        <h2>Read from Firestore.</h2>
        <div>
          <button :disabled="readSuccessful" @click="readFromFirestore">
            <span v-if="!readSuccessful">Read now</span>
            <span v-else>Successful!</span>
          </button>
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import { StoreDB } from "~/plugins/firebase.js"

export default {
  layout: "contactlayout",
  data() {
    return {
      showT: false,
      input1: null,
      input2: null,

      isContentFirestore: true,

      writeSuccessful: false,
      readSuccessful: false,
      text: ""
    }
  },

  computed: {
    visibleContent() {
      return this.$store.getters.getVisibleContent
    },
    allCountries() {
      return this.$store.state.countries
    }
  },

  // ASYNC DATA from FIRESTORE
  async asyncData({ app, params, error }) {
    const ref = StoreDB.collection("visibleContents").doc("visible")
    let snap
    try {
      snap = await ref.get()
    } catch (e) {
      // TODO: error handling
      console.error(e)
      this.isContentFirestore = false
    }
    return {
      isContentFirestore: snap.data().value
    }
  },

  mounted() {
    window.onkeyup = keyup
    let inputTV

    function keyup(e) {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        inputTV = e.target.value
        document.querySelector(".result").innerHTML = inputTV
      }
    }

    keyup(document.querySelector(".inputT"))

    this.$store.dispatch("increment")
  },

  methods: {
    checkForm(e) {
      if (this.input1 && this.input2) {
        alert("submit")
        return true
      }
      e.preventDefault()
    },

    ...mapActions({
      getSomeCountry: "getCountry"
    }),

    // FIRESTORE
    async writeToFirestore() {
      const ref = StoreDB.collection("test").doc("test")
      const document = {
        text: "This is a test message."
      }
      try {
        await ref.set(document)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },

    async readFromFirestore() {
      const ref = StoreDB.collection("test").doc("test")
      let snap
      try {
        snap = await ref.get()
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.text = snap.data().text
      this.readSuccessful = true
    }
  },

  created() {
    this.getSomeCountry("france")
  }
}
</script>
