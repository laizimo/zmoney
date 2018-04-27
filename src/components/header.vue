<template>
  <div class="header">
      <div class="header-logo">
        <img src="../../static/image/logo.png" alt="logo" class="header-logo-img">
        <a href="#/" class="header-zmoney">zMoney</a>
      </div>
      <div class="header-nav">
        <ul class="clearfix">
          <li class="nav-item">
            <a href="#/">首页</a>
          </li>
          <li class="nav-item">
            <a href="#/introduce">项目介绍</a>
          </li>
          <li class="nav-item">
            <a href="#/upload">数字存证</a>
          </li>
          <li class="nav-item">社区</li>
          <li class="nav-item">区块链浏览器</li>
          <li class="nav-item">
            <a href="#/login">登录</a>
            <span class="n1">|</span>
            <a href="#/register">注册</a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  display: block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 2;
}

.header-logo {
  position: relative;
  display: inline-block;
  margin-left: 60px;
  padding-left: 50px;
}

.header-logo-img {
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.header-zmoney {
  font-size: 30px;
  color: #044a84;
}

.header-nav {
  width: 650px;
  height: 60px;
  float: right;
}

.clearfix {
  display: flex;
  list-style: none;
  zoom: 1;
}

.nav-item {
  padding: 0 20px;
}
</style>
