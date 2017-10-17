<template>
  <div>
    <el-container>
      <el-header height="40px">
        <WallBreadcrumb/>
      </el-header>
      <el-main style="padding-top: 0;">
        <ul class="wall">
          <li class="wall-item" v-for="item in list" :key="item.name" @click="itemClick(item)">
            <WallItem :type="item.type" :name="item.name" :src="item.path"/>
          </li>
        </ul>
        <Gallery :visible.sync="gallery.visible" :list="gallery.list" :active="gallery.active"/>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.wall {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px 0 -5px;
  padding: 0;
}
.wall-item {
  cursor: pointer;
  list-style-type: none;
  width: 140px;
  height: 160px;
  margin: 5px;
  padding: 10px;
  &:hover {
    background-color: lightcyan;
    border-radius: 5px;
  }
}
</style>


<script>
import WallBreadcrumb from './WallBreadcrumb';
import WallItem from './WallItem';
import Gallery from './Gallery';
export default {
  components: {
    WallBreadcrumb,
    WallItem,
    Gallery
  },
  data () {
    return {
      list: [],
      gallery: {
        list: [],
        visible: false,
        active: 0
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
        this.gallery.active = this.gallery.list.indexOf(item)
      }
    }
  },
  mounted () {
    this.list = [
      {
        name: '20170914',
        type: 'folder',
        path: 'folder/test1'
      },
      {
        name: '20170915',
        type: 'folder',
        path: 'folder/test2'
      },
      {
        name: '鸟.png',
        type: 'image',
        path: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507706635842&di=51072492e0b8659c8a787826b2049dc6&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F267f9e2f070828388bf695d4b199a9014d08f173.jpg'
      },
      {
        name: '马蜂.png',
        type: 'image',
        path: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507706635843&di=2ffca6917de321dccc81abbac1432473&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8c1001e93901213f4fcd061c5de736d12e2e9570.jpg'
      }
    ],
    this.gallery.list = this.list.filter(item => item.type === 'image')
  }
}
</script>
