<template>
  <div>
    <h2 class="title">Sign Out with Google</h2>
    <div class="signIn">
     <button class="button" @click="signOut">Sign out</button>   
    </div>
  </div>

</template>

<script>
import {auth} from '@/services/fireinit.js';

export default {
  methods: {
    signOut () {
        auth.signOut().then(() => {
          this.$store.commit('setUser', null);
          this.$router.push('/');
        }).catch(error => console.log(error));
    }
  }
}
</script>

<style lang="css">
.signIn {
  display: flex;
}
</style>