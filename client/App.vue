<template>
  <!-- <div class="flex flex-vertical height-full">
    <div>
      <Topbar/>
    </div>
    <router-view class="flex-spacer"></router-view>
  </div> -->
  <router-view></router-view>
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
