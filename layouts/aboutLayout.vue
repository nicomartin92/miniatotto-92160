<template>
  <div>
    <Nav />
    <div class="main">
      <p>About Layout</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue"
import Footer from "~/components/Footer.vue"

export default {
  components: {
    Nav,
    Footer
  }
}
</script>
