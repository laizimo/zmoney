<template>
  <div class="login">
    <a href="#/">
      <img src="../../static/image/b-logo.png" alt="logo" class="login-logo">
    </a>
    <div class="login-title">用户登陆</div>
    <div class="login-content">
      <el-input v-model="username" placeholder="请输入用户名" class="username-input"></el-input>
      <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
      <div class="forget-pwd-warp">
        <a href="#/forgetpwd" class="forget-password">忘记密码?</a>
      </div>
      <el-button class="login-btn" type="primary" @click="login()">登录</el-button>
      <div class="others">
        <div class="other-item">
          <img class="other-item-img" src="data:image/png;base64,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" alt="">
        </div>
        <div class="other-item">
          <img class="other-item-img" src="data:image/png;base64,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" alt="">
        </div>
        <div class="other-item">
          <img class="other-item-img" src="data:image/png;base64,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" alt="">
        </div>
      </div>
      <a class="login-to-register" href="#/register">新用户注册</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const username = this.username
      const password = this.password
      if (!this.username && !this.password) {
        this.$notify.error({
          title: '登陆失败',
          message: '用户名和密码不能为空'
        })
      } else {
        axios.post('/api/user/login', {
          username,
          password
        }).then((resp) => {
          if (resp.data.success) {
            window.localStorage.setItem('username', username)
            this.$router.push({
              path: '/user/index'
            })
          } else {
            this.$notify.error({
              title: '登陆失败',
              message: '稍后重试'
            })
          }
        }).catch(() => {
          this.$notify.error({
            title: '登陆失败',
            message: '服务器卡顿，请稍后重试'
          })
        })
      }
    }
  }
}
</script>

<style scoped>
.login {
  width: 440px;
  height: 524px;
  margin: 100px auto;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #999;
}

.login-logo {
  width: 100px;
  display: block;
  margin: 20px auto;
}

.login-title {
  font-size: 24px;
  color: #000;
  text-align: center;
}

.login-content {
  width: 350px;
  margin: 50px auto 0;
}

.username-input {
  margin-bottom: 30px;
}

.forget-password {
  overflow: hidden;
}

.forget-password {
  display: block;
  float: right;
  margin-top: 20px;
}

.login-btn {
  width: 350px;
  margin: 20px auto;
}

.others {
  display: flex;
  justify-content: center;
}

.other-item {
  margin: 0 10px;
}

.other-item-img {
  width: 32px;
  height: 32px;
}

.login-to-register {
  float: right;
  margin-top: 20px;
  color: #337ab7;
}

</style>
