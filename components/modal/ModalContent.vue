<template>
  <transition name="fade">
    <div class="modal"
        @click="displayModal(false)"
        v-show="showModal">
      <div class="modal__wrapper">
        <div class="modal__container">
          <h3 class="modal__label">
            {{imageLabel}}
            <span class="modal__color" :style="{ backgroundColor: imageColor }"></span>
          </h3>
          <img :src="imageView" :alt="imageLabel">
        </div>
      </div>
      <div class="modal__close">X</div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      showModal: false,
      imageView: '',
      imageLabel: '',
      imageColor: ''
    }
  },
  props: [
    'image'
  ],
  methods: {
    displayModal (show) {
      if (show) {
        this.showModal = true;
      } else {
        this.showModal = false;
      }
    }
  },
  created() {
    this.$nuxt.$on('modal', (value) => {
      this.showModal = value;
      this.imageView = value.image;
      this.imageLabel = value.brand + ' ' + value.model + ' ' + value.version;
      this.imageColor = value.color;
    });
  }
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  display: table;
  transition: opacity .3s ease;

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    background: #fff;
    max-width: 1000px;
    border-radius: 5px;
    margin: 0 auto;
    padding: 20px 30px;
    position: relative;

    img {
      width: 100%;
    }
  }

  &__label {
    background: $colorBlack;
    padding: 5px 60px 8px 10px;
    transform: skewX(-18deg);
    color: $colorWhite;
    text-transform: uppercase;
    display: inline-block;
    position: relative;
  }

  &__color {
    position: absolute;
    bottom: -60%;
    right: 10px;
    background-color: rgb(134, 140, 140);
    width: 30px;
    height: 100%;
    display: block;
  }

  &__close {
    position: absolute;
    right: 10%;
    top: 5%;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    font-weight: 300;
    border-radius: 100%;
    background-color: $colorBlack;
    z-index: 4;
    color: #fff;
    line-height: 3rem;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: $colorWhite;
  }

  &-footer {
    margin-top: 15px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
  transform: scale(1) rotate(0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(2.5) rotate(32deg);
}
</style>


