<template>
  <div id="e3" class="card" :class="{ unavailable: !available }">
    <div class="container">
      <div class="layout">
        <h3 class="card__title">
          <span class="uppercase">{{ brand }}</span> {{ carbrand }} {{ model }}
          <span>{{ version }}</span>
        </h3>
        <div class="card__image">
          <img loading="lazy" :src="image" :alt="brand">
        </div>
        <div class="color">
          <span class="bold">Couleur:</span>
          <span class="squareColor" :style="{ background: color }" />
          {{ colorname }}
        </div>
        <div class="card__reference">
          <span class="bold">Référence:</span> {{ reference }}
        </div>
        <div class="card__available">
          <span class="bold">Disponibilité:</span>
          <span v-if="available">Oui</span>
          <span v-else>Non</span>
        </div>
        <div class="card__price">
          <span class="bold">Prix:</span> {{ price }}
        </div>
        <nuxt-link class="button-like" :to="`/cars/${reference}`">
          {{ model }} Profil
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'brand',
    'carbrand',
    'model',
    'version',
    'reference',
    'image',
    'colorname',
    'color',
    'available',
    'price'
  ]
}
</script>

<style lang="scss">
.card {
  position: relative;
  box-shadow: 0 10px 36px 0 rgba(186, 194, 195, 0.47);
  margin: 25px;
  padding: 20px;
  min-width: 400px;
  max-width: 400px;
  transition: 0.15s all ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &__image {
    img {
      width: 100%;
      height: auto;

      .unavailable & {
        opacity: 0.5;
      }
    }
  }

  &__available {
    .unavailable & {
      color: red;
    }
  }
}
</style>
