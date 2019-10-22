<template>
  <div>
    <h2 class="title">Sign In with Google</h2>
    <div class="signIn">
      <button class="button" primary @click="googleSignUp">Google Sign In</button>
      <button class="button" @click="signOut">Sign out</button>
    </div>
  </div>
</template>

<script>
import firebase, { auth, GoogleProvider } from "@/services/fireinit.js";

export default {
  methods: {
    emailLogin() {
      this.$store
        .dispatch("signInWithEmail", {
          email: this.formEmail,
          password: this.formPassword
        })
        .then(() => {
          this.formEmail = "";
          this.formPassword = "";
        })
        .catch(e => {
          console.log(e.message);
        });
    },

    googleSignUp() {
      this.$store
        .dispatch("signInWithGoogle")
        .then(() => {
          console.log("inside then statement on login");
        })
        .catch(e => {
          console.log(e.message);
        });
    },

    signOut() {
      auth
        .signOut()
        .then(() => {
          this.$store.commit("setUser", null);
          this.$router.push("/");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style lang="css">
.signIn {
  display: flex;
}
</style>