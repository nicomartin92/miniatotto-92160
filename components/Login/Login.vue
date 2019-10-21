<template>
  <div>
    <div text-xs-center xs12 sm6 offset-sm3>
      <h2 class="title">Sign In with Google</h2>
     <button class="signIn mb-2" primary @click="googleSignUp">Google Sign In</button>
     <button @click="signOut">Sign out</button>   
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
      console.warn('google');  
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
}
</style>