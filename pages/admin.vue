<template>
  <div>
    <h1>Admin</h1>

    <LogOut />
  </div>
</template>

<script>
import LogOut from "~/components/Login/Logout.vue";

export default {
  layout: "default",
  components: {
    LogOut
  }
};
</script>
