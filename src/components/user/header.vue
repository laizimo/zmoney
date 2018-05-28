<template>
  <div class="header">
      <a href="#/" class="header-logo">
        <img src="../../../static/image/logo.png" alt="logo" class="header-logo-img">
      </a>
      <div class="header-nav">
        <ul class="clearfix">
          <li class="nav-item">
            <a href="#/introduce">项目疑问</a>
          </li>
          <li class="nav-item">
            <el-dropdown @command="handleCommand">
              <div class="el-dropdown-link">
                <img src="https://avatars0.githubusercontent.com/u/38898874?s=150&v=4" class="avatar" alt=""><i class="el-icon-arrow-down el-icon--right"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link to="/user/profile">资产情况</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/user/index">个人中心</router-link>
                </el-dropdown-item>
                <el-dropdown-item command="logout" divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
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
  },

  methods: {
    handleCommand (command) {
      if (command === 'logout') {
        localStorage.removeItem('username')
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>

<style scoped>
.header {
  display: block;
  width: 100%;
  min-width: 1200px;
  height: 60px;
  line-height: 60px;
  background: linear-gradient(45deg,#22c6cc,#9767bf);
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
  width: 100px;
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

.nav-item a {
  color: #fff;
  font-size: 16px;
}

.avatar {
  width: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
}
</style>
