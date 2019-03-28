<template>
  <div class="panelNav">
    <ul>
      <li v-for="(car, index) in initialdata" :key="car.id" class="panelNav__item">  
        <div class="panelNav__image">
          <img :src="car.views[0].image1" :alt="car.model">
        </div>
        <div class="panelNav__label">
          <nuxt-link :to="`/cars/${car.reference}`">
            {{ car.brand }} {{ car.model }} {{ car.version }}
          </nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Panelnav',
    props: [
        'initialdata'
    ],
    data() {
        return {
            cars: ''
        }
    }
}
</script>

<style lang="scss">
.panelNav {
    z-index: 4;
    position: fixed;
    top: 0;
    right: -60vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: $colorWhite;
    color: $colorBlack;
    width: 60vw;
    z-index: 6;
    padding: 18vh 8.5vmax 0 9vmax;
    transition: right 2s cubic-bezier(.19,1,.22,1),left 2s cubic-bezier(.19,1,.22,1);
    padding: 60px 25px;
    box-shadow: 0 10px 36px 0 rgba(186, 194, 195, 0.47);

    &__item {
        display: flex;
        align-items: center;
    }

    &__image {
        img {
            width: 120px;
            height: auto;
        }
    }
}
</style>


