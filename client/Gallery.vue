<template>
  <div tabindex="-1" v-if="visible" class="gallery" @keyup.esc="close" @keyup.left="prev" @keyup.right="next">
    <div class="gallery-header">
      <span class="gallery-header--title">画廊</span>
      <span class="gallery-header--close" @click="close"><i class="el-icon-close"></i></span>
    </div>
    <div class="gallery-container">
      <Carousel :perPage="1" :loop="false" :navigationEnabled="true" :paginationEnabled="false" :navigationClickTargetSize="0" navigationPrevLabel="<i class='fa fa-chevron-left gallery-navigation gallery-navigation--prev'></i>" navigationNextLabel="<i class='fa fa-chevron-right gallery-navigation gallery-navigation--next'></i>" ref="carousel">
        <Slide v-for="item in list" :key="item.path" >
          <div class="gallery-item">
            <img :src="item.path">
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="gallery-header">
      <span class="gallery-header--title">画廊</span>
      <span class="gallery-header--close" @click="close"><i class="el-icon-close"></i></span>
    </div>
  </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel'

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      default: 0
    }
  },
  methods: {
    close () {
      this.$emit("update:visible", false)
    },
    next () {
      if (this.$refs.carousel.currentPage < this.$refs.carousel.pageCount) {
        this.$refs.carousel.currentPage += 1
      }
    },
    prev () {
      if (this.$refs.carousel.currentPage > 0) {
        this.$refs.carousel.currentPage -= 1
      }
    }
  },
  components: {
    Carousel,
    Slide
  },
  updated () {
    if (!this.visible) return;
    if (this.active > 0) {
      this.$refs.carousel.currentPage = this.active;
    }
    this.$el.focus()
  }
}
</script>
