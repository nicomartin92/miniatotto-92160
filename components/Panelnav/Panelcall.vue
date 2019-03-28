<template>
  <a class="panelCall" @click="callPanel()">
    <slot />
  </a>
</template>

<script>
export default {
    name: "Panelcall",
    methods: {
        callPanel() {
            this.$nuxt.$emit('modal1')
        }
    }
}
</script>
