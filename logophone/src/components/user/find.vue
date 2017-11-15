<template>
  <div class="find-tools">
    <div class="logo">
      <img src="../../../static/images/img1.png" alt="" class="w100 h100">
    </div>
    <div class="form">
      <el-input placeholder="手机号" class="form-input" v-model="tel"></el-input>
      <el-input placeholder="用户名" class="form-input" v-model="username"></el-input>
      <el-input placeholder="密码" class="form-input" v-model="password"></el-input>

      <div class="getCode clear">
        <el-input placeholder="验证码" class="input-code fl"></el-input>
        <el-button class="btn-get-code fr">获取验证码</el-button>
      </div>

    </div>
    <el-button class="goToLogin">登录</el-button>
    <div class="clear fl" style="margin-top: 10px;">
      <el-checkbox label="我已阅读并接手用户协议"></el-checkbox>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        tel: '',
        username: '',
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
  /* find start */
  .find-tools {
    margin: 0px 10px;
  }
  .find-tools .logo {
    width: 78px;
    height: 48px;
    margin: 0px auto 30px;
  }
  .form .form-input {
    font-weight: bold;
    border-bottom: 1px solid #d8dce5;
  }
  .form .form-input:nth-child(3n) {
    border: none;
  }
  .form .form-input .el-input__inner {
    border-radius: 0px;
    border: none;
  }
  .form .getCode {
    margin-top: 20px;
  }
  .form .getCode .input-code {
    width: 62%;
  }
  .form .getCode .btn-get-code {
    border-radius: 0px;
    background: #ecca25;
    color: #141414;
    font-weight: bold;
    border: 1px solid #ecca25;
  }
  .form .getCode .input-code .el-input__inner {
    border: none;
    border-radius: 0px;
  }
  .find-tools .goToLogin {
    width: 100%;
    color: #666;
    background: #ebca25;
    border: 1px solid #ebca25;
    margin-top: 20px;
  }
  /* find end */
</style>
