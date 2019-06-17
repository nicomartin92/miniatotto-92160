<template>
  <div class="xray">
    <div class="xray__layer1">
      <img :src="car1" alt="">
    </div>
    <div class="xray__layer2">
      <img :src="car2" alt="">
    </div>
  </div>
</template>

<script>
export default {
    props: {
        car1: { type: String, required: true },
        car2: { type: String, required: true }
    }
}
</script>

<style lang="scss" scoped>
.xray {
    position: relative;
    max-width: 800px;
    margin: 0 auto;

    &__layer1 {
        position: relative;
        z-index: 1;
        width: 100%;
    }

    &__layer2 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        z-index: 2;
        overflow: hidden;
    }
}
</style>


