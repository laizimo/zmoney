<template>
  <div class="upload">
    <Header></Header>
    <div class="upload-wrap">
      <h1>区块链数据存证</h1>
      <div class="upload-part1">
        <div class="upload-options"></div>
        <span class="upload-tips">说明:作品文件，是指您作品的电子文档，它将作为区块链版权登记的存证数据。</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header.vue'

export default {
  data () {
    return {}
  },

  components: {
    Header
  }
}
</script>

<style scoped>
.upload {
  padding-top: 1px;
}

.upload-wrap {
  width: 960px;
  height: 700px;
  background: #fff;
  margin: 110px auto;
  border-radius: 1%;
}
</style>
