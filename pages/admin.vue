<template>
  <div>
    <h1>Hello {{getName}}</h1>
    <h2>Welcome to the Admin page</h2>
    <span>your email: {{getEmail}}</span>

    <LogOut />
  </div>
</template>

<script>
import LogOut from "~/components/Login/Logout.vue"

export default {
  layout: "default",
  components: {
    LogOut
  },
  computed: {
    getName() {
      return (this.$store.state.user) ? this.$store.state.user.displayName : ''
    },
    getEmail() {
      return (this.$store.state.user) ? this.$store.state.user.email : ''
    }
  }  
}
</script>
