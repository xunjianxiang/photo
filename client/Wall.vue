<template>
  <div class="flex flex-vertical height-full">
    <WallBreadcrumb/>
    <div class="scrollview">
      <ul class="wall">
        <li class="wall-item" v-for="item in list" :key="item.name" @click="itemClick(item)" :style="{ width: `${wallItemWidth}px`}">
          <WallItem :type="item.type" :name="item.name" :src="item.thumbnails"/>
        </li>
      </ul>
    </div>
    <Gallery :visible.sync="gallery.visible" :list="gallery.list" :index="gallery.index"/>
  </div>
</template>

<script>
import axios from 'axios'
import WallBreadcrumb from './WallBreadcrumb'
import WallItem from './WallItem'
import Gallery from './Gallery'

export default {
  components: {
    WallBreadcrumb,
    WallItem,
    Gallery
  },
  data () {
    return {
      wallItemWidth: 0,
      list: [],
      gallery: {
        list: [],
        visible: false,
        index: 0
      }
    }
  },
  methods: {
    itemClick (item) {
      if (item.type === 'folder') {
        this.$router.push({
          name: this.$route.name,
          params: {
            path: item.path
          }
        })
      } else if (item.type === 'image') {
        this.gallery.visible = true
        this.gallery.index = this.gallery.list.indexOf(item)
      }
    },
    getData (route) {
      let loading = this.$loading()
      axios.get(`/api/ls/${route.params.path || ''}`)
        .then(response => {
          this.list = response.data,
          this.gallery.list = this.list.filter(item => item.type === 'image')
          window.setTimeout(loading.close.bind(loading), 500)
        })
        .catch(() => {
          window.setTimeout(loading.close.bind(loading), 500)
        })
    },
    resizeWallItem () {
      let wallContainer = document.querySelector('.wall')
      let wallWidth = wallContainer.offsetWidth - 2 * 5
      let per = Math.floor(wallWidth / (120 + 2 * 5))
      this.wallItemWidth = wallWidth / per - 2 * 5
    }
  },
  mounted () {
    this.getData(this.$route)
    this.resizeWallItem()
    window.onresize = this.resizeWallItem.bind(this)
  },
  beforeRouteUpdate (to, from, next) {
    this.getData(to)
    next()
  }
}
</script>
