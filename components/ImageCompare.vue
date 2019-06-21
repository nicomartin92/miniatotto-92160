<template>
  <figure class="imageCompare" 
          @mousemove.prevent="onMouseMove" 
          @touchstart="onMouseMove($event, true)" 
          @touchmove="onMouseMove($event, true)" 
          @click="onMouseMove($event, true)"
  >
    <div class="imageCompare__wrapper" :style="{ width: posX + 'px' }">
      <img :src="carBefore" :style="dimensions">
    </div>
    <img :src="carAfter" :style="dimensions">

    <div class="imageCompare__handle" :style="{ left: posX + 'px' }" @mousedown.prevent="onMouseDown">
      <span class="imageCompare__handle-icon left">
        <slot name="icon-left" /> {{ labelColorBefore }}
      </span>
      <span class="imageCompare__handle-icon right">
        <slot name="icon-right" /> {{ labelColorAfter }}
      </span>
    </div>
  </figure> 
</template>

<script>
export default {
    props: {
        carBefore: { type: String, required: true },
        carAfter: { type: String, required: true },
        labelColorBefore: { type: String, required: true },
        labelColorAfter: { type: String, required: true },
        divider: { type: Number, required: false, default: 2 }
    },
    data() {
      return {
        width: null,
        height: null,
        isDragging: false,
        allowNextFrame: true,
        posX: 500
      }
    },
    computed: {
      dimensions() {
        return {
          width: `${this.width}px`,
          height: this.full ? `${this.height}px` : 'auto'
        }
      }
    },
    mounted() {
      this.onResize()
      window.addEventListener('resize', this.onResize)

      this.posX = this.width/this.divider
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize)
    },
    methods: {
      onResize() {
        this.width = this.$el.clientWidth
        this.height = this.$el.clientHeight
      },
      onMouseDown() {
        this.isDragging = true
      },
      onMouseUp(event) {
        event.preventDefault()
        this.isDragging = false
      },
      onMouseMove(event, isDragging = this.isDragging) {
        if(event.type === 'click') {
          this.allowNextFrame = !this.allowNextFrame
        }

        if (isDragging && this.allowNextFrame) {
          this.allowNextFrame = false
          this.pageX = event.pageX || event.targetTouches[0].pageX || event.originalEvent.targetTouches[0].pageX
          window.requestAnimationFrame(this.updatePos)
        }
      },
      updatePos() {
        let posX = this.pageX - this.$el.getBoundingClientRect().left
        this.posX = posX
        this.allowNextFrame = true
      }
    }
}
</script>

<style lang="scss" scoped>
.imageCompare {
  position: relative;
  margin: 0;
  overflow: hidden;
  max-width: 1400px;

  &.full {
    overflow: hidden;
    height: 100%;
    width: 100%;
    flex: 1;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  img {
    max-width: none;
    display: block;
  }

  &__wrapper,
  &__handle {
    bottom: 0;
    position: absolute;
    top: 0;
  }

  &__wrapper {
    left: 0;
    overflow: hidden;
    width: 100%;
    z-index: 1;
    // transform: translateZ(0);
    transform: skewX(-18deg);
    will-change: width;
    box-shadow: 23px -5px 36px -19px rgba(0, 0, 0, 0.1);

    img {
      transform: skewX(18deg);
    }
  }

  &__handle {
    color: #fff;
    background-color: currentColor;
    cursor: ew-resize;
    // transform: translateX(-50%) translateZ(0);
    transform: skewX(-18deg);
    border: 1px solid $colorBlack;
    width: 2px;
    height: 90%;
    top: 5%;
    z-index: 2;
    will-change: left;
  }

  &__handle-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 25px;
    color: currentColor;
    line-height: normal;

    &.left {
      padding-right: 10px;
      transform: translate(-100%, -50%);
    }

    &.right {
      padding-left: 10px;
      transform: translate(0, -50%);
    }
  }

}
</style>


