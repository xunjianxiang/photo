<template>
  <el-container class="fullheight">
    <el-header>
      <Topbar/>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>


<script>
  import Topbar from './Topbar';
  import Wall from './Wall';
  export default {
    data: function () {
      return {
        title: 'Hello World!!',
        msg: 'Test hot reload in app!'
      }
    },
    components: {
      Topbar,
      Wall
    }
  }
</script>
