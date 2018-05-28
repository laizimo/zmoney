<template>
  <div class="register">
    <div class="register-content">
      <a href="#/">
      <img src="../../static/image/b-logo.png" alt="logo" class="register-logo">
      </a>
      <div class="register-title">用户注册</div>
      <div class="register-form">
        <el-input v-model="username" placeholder="用户名" class="form-input"></el-input>
        <el-input v-model="email" placeholder="邮箱" class="form-input"></el-input>
        <el-input v-model="password" placeholder="密码" class="form-input" type="password"></el-input>
        <el-input v-model="confirmPwd" placeholder="再次确认密码" class="form-input" type="password"></el-input>
        <el-checkbox v-model="agreement">我已阅读并接受《用户协议》</el-checkbox>
        <el-button type="primary" class="register-btn" @click="signup()">注册</el-button>
        <div class="register-to-login">已有账号，去<a href="#/login">登录</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPwd: '',
      agreement: false
    }
  },
  methods: {
    signup () {
      const { username, email, password, confirmPwd } = this
      if (!username) this.nodify('用户名不能为空')
      else if (!email) this.nodify('邮箱不能为空')
      else if (!password) this.nodify('密码不能为空')
      else if (!confirmPwd) this.nodify('确认密码不能为空')
      else if (password !== confirmPwd) this.nodify('二次输入密码不一致')
      else {
        axios.post('/api/user/signup', {
          username, email, password
        }).then((resp) => {
          if (resp.data.success) {
            this.$notify({
              title: '注册成功',
              message: '您好，您的账号注册成功，将在3秒之后跳转登陆页',
              type: 'success'
            })
            setTimeout(() => {
              this.$router.push({
                path: '/login'
              })
            }, 3000)
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },

    nodify (message) {
      this.$notify.error({
        title: '注册失败',
        message: message
      })
    }
  }
}
</script>

<style scoped>
.register {
  width: 100%;
  height: 800px;
  margin-top: 80px;
}

.register-content {
  width: 440px;
  height: 605px;
  margin: 30px auto;
  border: 1px solid #333;
  border-radius: 5px;
  background: #fff;
}

.register-logo {
  width: 100px;
  display: block;
  margin: 20px auto;
}

.register-title {
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
}

.register-form {
  width: 350px;
  margin: 30px auto 0;
}

.form-input  {
  margin-bottom: 20px;
}

.register-btn {
  width: 350px;
  margin-top: 20px;
}

.register-to-login {
  float: right;
  margin-top: 20px;
}

.register-to-login a {
  color: #337ab7;
}
</style>
