<template>
  <div v-show="showT">
    <h1>Contact page</h1>
    <div class="result"></div>
    <input type="text" class="inputT" />

    <form @submit="checkForm" action="/" method="post">
      <h2>result: {{input1}} {{input2}}</h2>
      <input type="text" class="input1" v-model="input1" placeholder="message 1" />
      <input type="text" class="input2" v-model="input2" placeholder="message 2" />

      <button>submit</button>
    </form>
  </div>
</template>

<script>
export default {
  layout: "contactlayout",
  data() {
    return {
      showT: false,
      input1: null,
      input2: null
    };
  },
  mounted() {
    window.onkeyup = keyup;
    let inputTV;

    function keyup(e) {
      if(e.keyCode >= 65 && e.keyCode <= 90) {
        inputTV = e.target.value;
        document.querySelector('.result').innerHTML = inputTV; 
      }
    };

    keyup(document.querySelector('.inputT'));
  },
  methods: {
    checkForm(e) {
      if (this.input1 && this.input2) {
        alert("submit");
        return true;
      }
      e.preventDefault();
    }
  }
};
</script>
