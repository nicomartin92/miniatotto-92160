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
import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

export default {
  data () {
    return {
      formEmail: '',
      formPassword: ''
    }
  },
  methods: {

    emailLogin () {
      this.$store.dispatch('signInWithEmail', {
        email: this.formEmail,
        password: this.formPassword
      }).then(() => {
        this.formEmail = ''
        this.formPassword = ''
      }).catch((e) => {
        console.log(e.message);
      })
    },

    googleSignUp () {
      console.warn('sign in');  
      auth.signInWithRedirect(GoogleProvider);
      /* this.$store.dispatch('signInWithGoogle').then(() => {
        console.log('inside then statement on login');
      }).catch((e) => {
        console.log(e.message);
      }) */
    },

    signOut () {
        console.warn('sign out');  
        auth.signOut(GoogleProvider);
    }
  }
}
</script>

<style lang="css">
.signIn {
  display: flex;
}
</style>