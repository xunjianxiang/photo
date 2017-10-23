<template>
  <div tabindex="-1" v-if="visible" class="gallery" @keyup.esc="close" @keyup.left="prev" @keyup.right="next">
    <div class="gallery-header">
      <span class="gallery-header--title">画廊</span>
      <span class="gallery-header--close" @click="close"><i class="el-icon-close"></i></span>
    </div>
    <div class="gallery-container">
      <el-carousel trigger="click" indicator-position="none" :height="carouselHeight" :autoplay="false" :initial-index="index" @change="change" ref="carousel" arrow="always">
        <el-carousel-item v-for="item in list" :key="item.thumbnails">
          <div class="gallery-item">
            <img :src="item.thumbnails" @contextmenu.prevent draggable="false">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="gallery-footer">
      <span>{{ active.name }}</span>
      <a :href="active.path" download>
        <el-tooltip class="item" effect="light" content="下载原图" placement="top">
          <i class="fa fa-download"></i>
        </el-tooltip>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  margin-left: 10px;
  color: #cccccc;
  &:hover {
    color: #eeeeee;
  }
}
</style>


<script>
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
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      active: {},
      carouselHeight: ''
    }
  },
  methods: {
    change () {
      this.active = this.list[this.$refs.carousel.activeIndex];
    },
    close () {
      this.$emit("update:visible", false)
    },
    next () {
      this.$refs.carousel.next()
    },
    prev () {
      this.$refs.carousel.prev()
    },
    setCarsouselHeight () {
      let container = document.querySelector('.gallery-container');
      if (container) {
         this.carouselHeight = container.offsetHeight - 40 + 'px'
      }
    }
  },
  components: {
    Carousel,
    Slide
  },
  mounted () {
    window.onresize = () => {
      this.setCarsouselHeight()
    }
  },
  updated () {
    if (this.visible) {
      this.setCarsouselHeight()
      this.$el.focus()
    }
  }
}
</script>
