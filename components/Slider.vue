<template>
  <div class="slider">
    <ul class="slider__navigation">
      <li v-for="(number, index) in initialData" :key="number.id" class="slider__navigationItem">
        <button class="button" @click="changeSlide(index)">
          {{ index }}
        </button>
      </li>
    </ul>
    <ul ref="slideItem" class="slider__container" :style="styleObject">
      <li v-for="slide in initialData" :key="slide.id" class="slider__item">
        {{ slide.brand }} {{ slide.model }} {{ slide.version }}
        <img loading="lazy" :src="slide.image"> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
      initialData: { type: Array, required: true }
    },
    data() {
        return {
            activeSlide: 1
        }
    },
    computed: {
      styleObject() {
        const width = 0 - ((this.activeSlide-1) * 900)
        return {
          transform: 'translateX('+width+'px)'
        }
      },
      styleSliderWidth() {
        const width = this.$refs.slideItem.offsetWidth 
        console.warn("width", width)
        return{
          width: `${width}px`
        }
      }
    },
    methods: {
      changeSlide(number) {
         this.activeSlide = number
         console.warn(number)
      }
    }
}
</script>

<style lang="scss" scoped>
.slider {
    overflow: hidden;
    width: 900px;
    height: auto;
    position: relative;
    margin: 0 auto;

    &__container {
      width: 2000000px;
      overflow: hidden;
      transition: all .32s ease;
    }

    &__item {
      float: left;
      width: 900px;
      font-size: 40px;
      margin: 0;
      padding: 40px 0;

      img {
        width: 100%;
      }
    }

    &__navigation {
      display: flex;
    }

    &__navigationItem {
      margin: 0 5px;
      padding: 0;
    }
}
</style>


