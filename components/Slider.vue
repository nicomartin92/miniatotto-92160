<template>
  <div class="sliderMain">
    <ul class="silder__navigation">
      <li class="navigationPrev">
        <button @click="changeSlide(activeSlide-1)">
          prev
        </button> 
      </li>
      <li class="navigationNext">
        <button @click="changeSlide(activeSlide+1)">
          next
        </button>  
      </li>
    </ul>
    <div class="slider">
      <ul ref="slideItem" class="slider__container" :style="styleObject">
        <li v-for="slide in initialData" :key="slide.id" class="slider__item">
          {{ slide.brand }} {{ slide.model }} {{ slide.version }}
          <img loading="lazy" :src="slide.image"> 
        </li>
      </ul>
      <ul class="slider__pagination">
        <li v-for="(number, index) in initialData" 
            :key="number.id" 
            class="slider__paginationItem"
            :class="{ '-active': index === activeSlide-1 }"
        >
          <button class="button" @click="changeSlide(index+1)">
            {{ index }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      initialData: { type: Array, required: true }
    },
    data() {
        return {
            activeSlide: 1,
            itemLength: 0
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

         if(this.activeSlide > this.initialData.length) {
            this.activeSlide = 1
         }

         if(this.activeSlide < 1) {
            this.activeSlide = this.initialData.length
         }
      }
    }
}
</script>

<style lang="scss" scoped>
.sliderMain {
  position: relative;
}

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

    &__pagination {
      position: absolute;
      width: 100%;
      bottom: 40px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
    }

    &__paginationItem {
      margin: 0 5px;
      padding: 0;

      &.-active {
        button {
          background: $colorBlue;
        }
      }

      button {
        background: none;
        border: 2px solid $colorBlue;
        transform: skewX(-18deg);
        transition: all .3 ease-in;
        cursor: pointer;

        &:hover {
          background: $colorBlue;
          transition: all .3 ease-in;
        }
      }
    }
}

.navigationPrev {
  position: absolute;
  left: 0;
  top: 50%;
}

.navigationNext {
  position: absolute;
  top: 50%;
  right: 0;
}
</style>


