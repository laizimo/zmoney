<template>
  <div class="register">
    <div class="register-content">
      <img src="../../static/image/logo.png" alt="logo" class="register-logo">
      <div class="register-title">用户注册</div>
      <div class="register-form">
        <el-input v-model="username" placeholder="用户名" class="form-input"></el-input>
        <el-input v-model="email" placeholder="邮箱" class="form-input"></el-input>
        <el-input v-model="password" placeholder="密码" class="form-input" type="password"></el-input>
        <el-input v-model="confirmPwd" placeholder="再次确认密码" class="form-input" type="password"></el-input>
        <el-checkbox v-model="agreement">我已阅读并接受《用户协议》</el-checkbox>
        <el-button type="primary" class="register-btn">注册</el-button>
        <div class="register-to-login">已有账号，去<a href="#/login">登录</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPwd: '',
      agreement: false
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
  height: 100px;
  display: block;
  margin: 0 auto;
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
