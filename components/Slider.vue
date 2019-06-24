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
        <li v-for="(slide, index) in initialData" 
            :key="slide.id" 
            class="slider__item"
            :class="{ '-animated': index === activeSlide-1 }"
          >
          <div class="slider__title">
            {{ slide.brand }} {{ slide.model }} <span class="skew">{{ slide.version }}</span>
          </div>
          <div class="slider__image">
            <img loading="lazy" :src="slide.image">
            <div class="slider__color" :style="{ backgroundImage: `url('${pattern}')`, backgroundColor: slide.color }">
              {{ slide.colorname }}
            </div>
          </div> 
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
      initialData: { type: Array, required: true },
      pattern: { type: String, required: false, default: '' }
    },
    data() {
        return {
            activeSlide: 1,
            itemLength: 0,
            dragOffset: 0,
            dragStartX: 0,
            mousedown: false,
            maxSwipeAngle: 60,
            minSwipeDistance: 20
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
    mounted () {
      this.$el.addEventListener('mousedown', this.handleMousedown)
      this.$el.addEventListener('mouseup', this.handleMouseup)
      this.$el.addEventListener('mousemove', this.handleMousemove)
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
      },
      swipeAngle(main, sub) {
        return Math.atan(Math.abs(sub) / Math.abs(main)) * (180 / Math.PI)
      },
      handleMousedown(e) {
        if (!e.touches) {
          e.preventDefault()
        }

        this.mousedown = true
        this.dragStart = (e.touches) ? e.touches[0] : e
      },
      handleMouseup() {
        this.mousedown = false
        this.dragOffset = 0
      },
      handleMousemove(e) {
        if (!this.mousedown) {
          return
        }

        const event = (e.touches) ? e.touches[0] : e

        let mainDirectionDragDistance = 0
        let subDirectionDragDistance = 0

        mainDirectionDragDistance = (this.dragStart.clientX - event.clientX)
        subDirectionDragDistance = (this.dragStart.clientY - event.clientY)

        this.angle = this.swipeAngle(mainDirectionDragDistance, subDirectionDragDistance)

        /**
         * If the swipe angle is less then the max swipe angle then
         * the user is probably using the slideshow to see the next slide
         *
         * We want to use prevent default to prevent the page from scrolling when switching to a new slide.
         */
        if (this.angle < this.maxSwipeAngle) {
          e.preventDefault()
        }

        this.dragOffset = mainDirectionDragDistance

        if (this.dragOffset > this.minSwipeDistance) {
          this.handleMouseup()
          this.changeSlide(this.activeSlide+1)
        } else if (this.dragOffset < -this.minSwipeDistance) {
          this.handleMouseup()
          this.changeSlide(this.activeSlide-1)
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

    &__title {
      font-size: 30px;
    }

    &__item {
      float: left;
      width: 900px;
      font-size: 40px;
      margin: 0;
      padding: 40px 0;

      &.-animated {
        img {
          animation: scaleUp .75s ease-in both;
        } 
      }

      img {
        width: 100%;
        max-width: 90%; 
        position: relative;
        z-index: 2;
      }
    }

    &__image {
      position: relative;
      z-index: 2;
    }

    &__color {
      position: absolute;
      right: 41px;
      top: -72px;
      z-index: 2;
      width: 30%;
      height: 169px;
      background-size: cover;
      overflow: hidden;
      background-blend-mode: multiply;
      color: white;
      text-transform: uppercase;
      font-size: 15px;
      padding: 10px;
      transform: skewX(-18deg);

      .-animated & {
        animation: scaleDown .75s ease-in both;
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
        width: 20px;
        height: 20px;
        text-indent: -9000px;

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


