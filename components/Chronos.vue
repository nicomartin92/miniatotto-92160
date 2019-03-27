<template>
  <div class="chronos">
    <div class="chronosIntro">
      <h2>La chronologie des OTTO</h2>
      <div>Possibilité de filtrer par ordre crissant ou décroissant</div>
      <button @click="changeDirection('asc')">Croissant</button>
      <button @click="changeDirection('desc')">Décroissant</button>
    </div>
    <ul class="chronosList">
      <li class="chronosItem" v-for="(chrono, index) in orderList" :key="index">
        <div class="chronosItem__container">
          <div class="chronosItem__info">
              <span class="bold">{{chrono.year}}</span>
          </div>
          <div class="chronosItem__marker"></div>
          <div class="chronosItem__content">
              <span><img :src="chrono.image" alt=""></span>
              <h3>{{chrono.brand}} {{chrono.model}} {{chrono.version}}</h3>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderBy: this.order
    }
  },
  props: [
    'chronoData',
    'order'
  ],
  methods: {
    sort (sortOrder) {
			return this.orderedListOptions[sortOrder]()
    },
    changeDirection(direction) {
      this.orderBy = direction;
    }
  },
  computed: {
    orderList () {
      return this.chronoData.slice().sort((a, b) => {
        if(this.orderBy === 'asc') {
          return a.year - b.year;
        } else {
          return b.year - a.year
        }
      });
    }
  }
}
</script>

<style lang="scss">
.chronos {
  position: relative;
  margin: 50px 0;
  display: flex;
  vertical-align: middle;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    min-height: 100%;
    background: $colorGray01;
    width: 35%;
    max-width: 35%;
    z-index: 0
  }

  .chronosIntro {
    flex: 0 0 35%;
    max-width: 35%;
    background: $colorGray01;
    min-height: 100%;
    z-index: 1;
    text-align: center;

    button {
      @include button($colorBlack, $colorWhite);
    }

    * {
      margin: 20px auto;
    }
  }

  .chronosList {
    flex: 0 0 65%;
    max-width: 65%;
  }

  img {
    max-width: 140px;
    height: auto;
  }

  .chronosItem {
    display: table-row;

    &__info,
    &__content,
    &__marker {
      display: table-cell;
      vertical-align: top;
      position: relative;
      padding: 0 30px;
    }

    &__marker {
      display: table-cell;
      vertical-align: top;
      padding: 0 15px;

      &:before {
          background: $colorBlack;
          border: 3px solid transparent;
          border-radius: 100%;
          content: "";
          display: block;
          height: 15px;
          position: absolute;
          top: 4px;
          left: 0;
          width: 15px;
          transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
      }

      &:after {
          content: "";
          width: 2px;
          background: $colorGray02;
          display: block;
          position: absolute;
          top: 24px;
          bottom: 0;
          left: 6px;
      }
    }

    &__content {
      padding-bottom: 20px;

      span, h3 {
        display: inline-block;
        vertical-align: middle;
      }
    }

  }
}
</style>


