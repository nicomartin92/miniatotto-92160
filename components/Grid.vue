<template>
  <ul class="grid">
    <li v-for="car in initialData" :key="car.id" class="grid__item">
      <div class="grid__preference">
        {{ car.preference }}
      </div>
      <nuxt-link :to="`/cars/${car.reference}`">
        <img class="grid__image" loading="lazy" :src="car.views[0].image1" :alt="`${car.brand} ${car.model} ${car.version} - ${car.brandshop}`">
      </nuxt-link>
      <div class="grid__info">
        <h3>{{ car.brandshop }} - {{ car.brand }} {{ car.model }} {{ car.version }}</h3>
        <h4>{{ car.year }}</h4>
        <p>{{ car.description }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
    props: {
       initialData: { type: Array, required: true }
    }
}
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-wrap: wrap;

  &__preference {
    @include round(40px, $colorBlue, $colorWhite, 12px);

    position: absolute;
    left: 10px;
    top: 10px;
  }

  &__item {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    overflow: hidden;

    @include medium {
      width: 50%;
    }

    @include xlarge {
      width: 33.3%;
    }
  }

  &__image {
    width: 100%;
  }

  &__info {
    background: $colorGray04;
    color: $colorWhite;
    padding: 80px 40px;
    text-align: center;
    height: 100%;
  }
}
</style>

