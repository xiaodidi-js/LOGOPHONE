<template>
  <div class="login-tools">
    <div class="logo">
      <img src="../../../static/images/img1.png" alt="" class="w100 h100">
    </div>
    <div class="form">
      <el-input placeholder="用户名／邮箱／手机号" class="form-input"></el-input>
      <el-input placeholder="密码" class="form-input"></el-input>
    </div>
    <div class="getLogin clear">
      <el-checkbox label="下次自动等录"></el-checkbox>
    </div>
    <el-button class="goToLogin">登录</el-button>
    <div class="tools-test">
      <router-link :to="{ path: ''}" class="fl">注册</router-link>
      <router-link :to="{ path: ''}" class="fr">登录</router-link>
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

    },
    methods: {

    }
  }
</script>

<style type="text/css">
  /* login-tools start */
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
    margin-top: 10px;
  }
  /* login-tools end */
</style>
