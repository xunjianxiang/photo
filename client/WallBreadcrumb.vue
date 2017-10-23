<template>
  <el-breadcrumb separator="/" class="wall-breadcrumb">
    <el-breadcrumb-item v-for="item in list" :key="item.name" :to="getRoute(item.path)">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  computed: {
    list () {
      let list = [];
      list.push({ name: '数盟照片墙' })
      if (!this.$route.params.path) return list;
      let array = this.$route.params.path.split('/')
      array.forEach(function(item, index) {
        list.push({
          name: item,
          path: array.slice(0, index + 1).join('/')
        })
      })
      return list
    }
  },
  methods: {
    getRoute (path) {
      let route = {
        name: this.$route.name
      }
      if (path)
        route.params = { path }
      return route
    }
  }
}
</script>


