<template>
  <div class="home-content">
    <div class="home-content-banner1">
      <img src="../../static/image/h5-banner-text.png" alt="title" class="home-content-banner1-img">
      <span class="home-content-banner1-text">基于区块链的知识产权交易所，为文字工作者提供便利，让有知识的人富裕起来</span>
      <el-button type="primary" class="home-content-banner1-btn">立即申请</el-button>
    </div>
    <div class="home-content-banner2">
      <div class="home-content-banner2-title">产品理念</div>
      <div class="home-content-banner2-description">为知识产权提供认证保护，利用区块链进行知识追踪，使得文字工作者更加富有，让为知识工作的人富有起来</div>
      <ul class="home-content-banner2-body">
        <li class="banner2-item">
          <img src="../../static/image/One.80610fba.svg" class="banner2-item-img">
          <div class="banner2-item-desc">
            <h3>知识认证</h3>
            <span class="banner2-item-text">
              将内容进行认证，同时与作者进行绑定，保障申请认证的作者的权益。同时，将内容进行加密，返回唯一的加密序列，供作者进行保存。
            </span>
          </div>
        </li>
        <li class="banner2-item">
          <img src="../../static/image/Two.034c52bc.svg" class="banner2-item-img">
          <div class="banner2-item-desc">
            <h3>知识分销</h3>
            <span class="banner2-item-text">
              组合形成的文章、书籍、视频等衍生品，可以使用社交工具快速分发到网络，系统基于智能合约，根据组合比例自动分配报酬给用户。
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="home-content-banner3">
      <h1 class="banner3-title">产品服务</h1>
      <div class="banner3-description">以鼓励人类知识创作与分享为核心，服务人类知识创新。</div>
      <ul class="banner3-body">
        <li class="banner3-body-item">
          <img src="../../static/image/blockchain.jpg" alt="" class="banner3-body-item-img">
          <div class="banner3-body-item-title">区块链</div>
          <div class="banner3-body-item-content">区块链，比特币的底层技术，通过P2P点对点通信网络，数字加密算法，共识机制，构建而成的公开，透明，不可篡改，去中心化的分布式账本。</div>
        </li>
        <li class="banner3-body-item">
          <img src="../../static/image/matrix.jpg" alt="" class="banner3-body-item-img">
          <div class="banner3-body-item-title">矩阵链</div>
          <div class="banner3-body-item-content">矩阵链—Matrixchain，交易所基于 Matrixchain 创建，将来有更多的各行各业的应⽤基于该平台搭建，共创区块链生态新商业文明。</div>
        </li>
        <li class="banner3-body-item">
          <img src="../../static/image/ddn.jpg" alt="" class="banner3-body-item-img">
          <div class="banner3-body-item-title">DDN网络</div>
          <div class="banner3-body-item-content">DDN网络：数据分发网络，是知识组合与分销的底层网络架构，为创作者知识变现提供了完美辅助，打通了知识付费的最后一个通道。</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home-content {
  position: relative;
  overflow: hidden;
  margin-top: 60px;
}

.home-content-banner1 {
  background: url('../../static/image/bg_banner1.png') 60% center no-repeat;
  position: relative;
  width: 100%;
  height: 500px;
  padding-top: 1px;
  padding-left: 100px;
}

.home-content-banner1-img {
  display: block;
  margin-top: 50px;
}

.home-content-banner1-text {
  font-size: 30px;
  color: #fff;
  display: block;
  width: 518px;
  margin-top: 20px;
}

.home-content-banner1-btn {
  width: 150px;
  height: 40px;
  margin-left: 175px;
  margin-top: 50px;
}

.home-content-banner2 {
  width: 100%;
  height: 420px;
  padding: 60px 100px;
  box-sizing: border-box;
}

.home-content-banner2-title {
  font-size: 36px;
  font-weight: 700;
}

.home-content-banner2-description {
  margin-top: 10px;
}

.home-content-banner2-body {
  display: flex;
}

.banner2-item {
  width: 500px;
  margin-top: 50px;
}

.banner2-item-img {
  display: inline-block;
  margin: 20px;
}

.banner2-item-desc {
  width: 300px;
  display: inline-block;
}

.banner2-item-text {
  margin-top: 10px;
  display: inline-block;
}

.home-content-banner3 {
  width: 100%;
  background: #fff;
  padding: 60px 100px;
  box-sizing: border-box;
}

.banner3-description {
  margin-top: 20px;
}

.banner3-body {
  display: flex;
  margin-top: 30px;
}

.banner3-body-item {
  width: 400px;
}
</style>
