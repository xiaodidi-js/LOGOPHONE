<template>
  <div class="login-tools">
    <div class="logo">
      <img src="../../../static/images/img1.png" alt="" class="w100 h100">
    </div>
    <div class="form">
      <el-input placeholder="用户名／邮箱／手机号" class="form-input"></el-input>
      <el-input type="password" placeholder="密码" class="form-input"></el-input>
    </div>
    <div class="getLogin clear">
      <el-checkbox label="下次自动等录"></el-checkbox>
    </div>
    <el-button class="goToLogin" @click="goLogin()">登录</el-button>
    <div class="tools-test">
      <router-link :to="{ path: ''}" class="fl">注册</router-link>
      <router-link :to="{ path: '/user/find'}" class="fr">忘记密码？</router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        //  用户帐号
        username: '',
        //  用户密码
        password: '',
      }
    },
    mounted() {
      console.log(this.$tools.isTel('15024219293'));
    },
    methods: {
      goLogin() {
        switch (true) {
          case !this.$tools.isTel(this.username):
            this.$message({
              message: '手机格式不正确',
              type: 'warning',
              duration: 2000
            });
            return false;
          case !this.$tools.isEmail(this.username):
            this.$message({
              message: '邮箱格式不正确',
              type: 'warning',
              duration: 2000
            });
            return false;
        }
      }
    }
  }
</script>

<style type="text/css">
  /* login-tool start */
  .login-tools {
    margin: 32px 10px;
  }
  .login-tools .logo {
    width: 78px;
    height: 48px;
    margin: 0px auto 30px;
  }
  .form .form-input {
    font-weight: bold;
  }
  .form .form-input:first-child {
    border-bottom: 1px solid #d8dce5;
  }
  .form .form-input .el-input__inner {
    border-radius: 0px;
    border: none;
    font-weight: bold;
  }
  .login-tools .getLogin {
    text-align: left;
    height: 40px;
    line-height: 40px;
  }
  .login-tools .goToLogin {
    width: 100%;
    color: #666;
    background: #ebca25;
    border: 1px solid #ebca25;
  }
  .tools-test {
    margin-top: 40px;
  }
  /* login-tool end */
</style>

<style type="text/css">
  /* el-message start */
  .el-message {
    min-width: 305px;
  }
  /* el-message end */
</style>
