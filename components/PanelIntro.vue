<template>
  <div class="panelIntro" :class="{ reverse: reversedisplay }">
    <div class="panelIntro__color" :style="{ backgroundColor: color }">
      <div class="panelIntro__label">
        {{ carbrand }}
      </div>
    </div>
    <div class="panelIntro__container">
      <article class="panelIntro__text">
        <div class="shop uppercase">
          {{ brand }}
        </div>
        <div class="title">
          {{ carbrand }} {{ model }} {{ version }}
        </div>
        <div class="description">
          {{ description }}
        </div>
        <div>Couleur: {{ colorname }}</div>
        <div>Prix: {{ price }}</div>
        <div>Stock: {{ stock }}</div>
        <nuxt-link to="/list">
          Acheter
        </nuxt-link>
        <button v-if="stock > 0">
          Add to bag
        </button>
      </article>
      <section class="panelIntro__image">
        <img :src="image" :alt="model">
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'reversedisplay',
    'carbrand',
    'brand',
    'model',
    'version',
    'description',
    'color',
    'colorname',
    'price',
    'stock',
    'image'
  ]
}
</script>

<style lang="scss">
@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.panelIntro {
  position: relative;
  max-width: 100%;
  overflow: hidden;
  padding: 7% 5% 4% 0;
  margin-top: 70px;
  margin-bottom: 70px;
  $root: '';

  &.reverse {
    padding: 7% 0 4% 5%;
  }

  &.animate {
    .panelIntro__color {
      animation-name: slideInLeft;
      animation-fill-mode: both;
      animation-duration: 1.5s;
    }

    &.reverse {
      .panelIntro__color {
        right: 0;
        left: auto;
        animation-name: slideInRight;
      }
    }
  }

  &__color {
    position: absolute;
    left: 0;
    top: 0;
    width: 60%;
    height: 100%;
    z-index: 0;
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
    /* animation-name: slideInLeft;
      animation-fill-mode: both;
      animation-duration: 1.5s; */

    .reverse & {
      right: 0;
      left: auto;
      transform: translate3d(100%, 0, 0);
      visibility: visible;
      // animation-name: slideInRight;
    }
  }

  &__label {
    color: $colorWhite;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 8px;
    opacity: 0.2;
    top: 1px;
    left: auto;
    right: 10px;
    position: absolute;

    .reverse & {
      left: 10px;
      right: auto;
    }
  }

  &__container {
    position: relative;
    z-index: 1;
    display: flex;

    button,
    a {
      @include button($colorWhite, $colorBlack);
    }

    .reverse & {
      flex-direction: row-reverse;
    }
  }

  &__text {
    flex: 0 0 40%;
    max-width: 40%;
    padding: 4%;
    color: $colorWhite;

    .shop,
    .title {
      font-size: 34px;
    }

    .title,
    .description {
      margin-bottom: 20px;
    }
  }

  &__image {
    flex: 0 0 60%;
    max-width: 60%;

    img {
      width: 100%;
    }
  }
}
</style>
