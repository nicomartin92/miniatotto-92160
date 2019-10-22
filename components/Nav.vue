<template>
  <div class="nav">
    <li>
      <Panelcall>cars</Panelcall>
    </li>
    <li>
      <nuxt-link to="/">
        Accueil
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/list">
        Categorie
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/wishlist">
        Whishlist
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/about">
        About
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/contact">
        Contact
      </nuxt-link>
    </li>
    <li v-show="isContentFirestore">
      <nuxt-link to="/login">
        Login
      </nuxt-link>
    </li>
  </div>
</template>

<script>
import { StoreDB } from "~/plugins/firebase.js"
import Panelcall from '~/components/Panelnav/Panelcall.vue'

export default {

  components: {
    Panelcall
  },
  data() {
    return {
      isContentFirestore: true
    }
  },

  // ASYNC DATA from FIRESTORE
  async asyncData({ app, params, error }) {
    const ref = StoreDB.collection("visibleContents").doc("visible")
    let snap
    try {
      snap = await ref.get()
      console.warn('here')
    } catch (e) {
      // TODO: error handling
      console.error(e)
      this.isContentFirestore = false
    }
    return {
      isContentFirestore: snap.data().value
    }
  }
}
</script>


<style lang="scss">
.nav {
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  min-height: 50px;
  box-shadow: -2px 15px 40px -23px rgba(0, 0, 0, 1);
  font-weight: bold;
  position: fixed;
  z-index: 3;
  background: $colorWhite;
  width: 100%;

  li {
    margin: 0 10px;
  }

  a {
    &.nuxt-link-exact-active {
      border-bottom: 2px solid $colorBlue;
    }
  }
}
</style>
