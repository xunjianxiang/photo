<template>
  <div class="wall-item-wrap">
    <div class="wall-photo">
      <img src="./folder.png" :alt="name">
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
  }
  .wall-photo {
    width: 100%;
    height: 75%;
    text-align: center;
    padding: 4px 20px 6px 20px;
    img {
      cursor: pointer;
      user-select: none;
      width: 100%;
      height: 100%;
    }
  }
</style>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>
