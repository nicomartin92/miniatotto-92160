<template>
  <button class="callModal" @click="callModal()">
    <slot />
  </button>
</template>

<script>
export default {
  props: ['imageData'],
  methods: {
    callModal() {
      this.$nuxt.$emit('modal', (true, this.imageData))
    }
  }
}
</script>

<style lang="scss">
.callModal {
  border: 0;
  background: transparent;
  cursor: pointer;
}
</style>
