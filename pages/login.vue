<template>
  <div>
    <h1>Login</h1>

    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "~/components/Login/Login.vue";

export default {
  layout: "aboutLayout",

  components: {
    LoginForm
  }
};
</script>
