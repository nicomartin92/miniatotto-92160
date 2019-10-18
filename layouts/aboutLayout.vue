<template>
  <div>
    <Nav />
    <div class="main">
      <p>About Layout</p>
      <Todos />
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";
import Todos from "~/components/Todos.vue";

export default {
  components: {
    Nav,
    Footer,
    Todos
  },

  mounted() {
  },
  
  computed: {
  }
};
</script>
