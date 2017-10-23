<template>
  <div class="wall-item-wrap">
    <div class="wall-item-content">
      <img v-if="type==='image' && src" :src="src" @contextmenu.prevent draggable="false">
      <i v-if="type==='image' && !src" class="fa fa-photo"></i>
      <i v-if="type==='folder'" class="fa fa-folder"></i>
    </div>
    <div class="wall-item-name">
      {{name}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'image'
      },
      name: {
        type: String
      },
      src: {
        type: String
      }
    }
  }
</script>
