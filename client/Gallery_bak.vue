<template>
  <div v-if="visible" class="gallery">
    <div class="gallery-header">
      <span class="gallery-header__title">画廊</span>
      <span class="gallery-header__close"><i class="el-icon-close"></i></span>
    </div>
    <div class="gallery-container">
      <ul>
        <li v-for="item in list" :key="item.path">
          <div class="gallery-item">
            <img :src="item.path">
          </div>
        </li>
      </ul>
    </div>
    <div class="gallery-footer">
      <ol>
        <li v-for="item in list" :key="item.path">
          <div class="gallery-item">
            <img :src="item.path">
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(21, 21, 21, 0.95);
  color: #cccccc;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.gallery-header {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  .gallery-header__title {
    flex: 1;
  }
  .gallery-header__close {
    cursor: pointer;
  }
}

.gallery-container {
  padding: 20px 0;
  flex: auto;
  height: 100%;
}

.gallery-footer {
  flex: none;
}

ul {
  list-style-type: none;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  li {
    float: left;
    width: 100%;
    height: 100%;
  }
}

ol {
  list-style-type: none;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  li {
    float: left;
    width: 120px;
    height: 100%;
  }
}

.gallery-item {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
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
    active: {
      type: String,
      required: true
    }
  }
}
</script>
