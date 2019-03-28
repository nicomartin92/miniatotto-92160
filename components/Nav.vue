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
      <nuxt-link to="/about">
        About
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/contact">
        Contact
      </nuxt-link>
    </li>
  </div>
</template>

<script>
import Panelcall from '~/components/Panelnav/Panelcall.vue'

export default {
  components: {
    Panelcall
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

  a {
    &.nuxt-link-exact-active {
      border-bottom: 1px solid $colorBlack;
    }
  }
}
</style>
