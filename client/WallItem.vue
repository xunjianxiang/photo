<template>
  <div class="wall-item-wrap">
    <div class="wall-item-content">
      <img v-if="type==='image' && src" :src="src">
      <i v-if="type==='image' && !src" class="fa fa-photo"></i>
      <i v-if="type==='folder'" class="fa fa-folder"></i>
    </div>
    <div class="wall-item-name">
      {{name}}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wall-item-wrap {
    height: 100%;
  }
  .wall-item-name {
    text-align: center;
    font-size: 13px;
    word-break: break-all;
  }
  .wall-item-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75%;
    padding: 10px;
    img {
      user-select: none;
      width:auto;
      height:auto;
      max-width:100%;
      max-height:100%;
    }
    i {
      font-size: 80px;
      &.fa-photo {
        color: gray;
      }
      &.fa-folder {
        color: orange;
      }
    }
  }
</style>

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
