<template>
  <div class="ver-conent">
    <div class="logo">
      <img src="../../../static/images/img1.png" alt="" class="w100 h100">
    </div>
    <div class="ver-input">
      <el-input placeholder="邮箱或手机号" v-model="code" class="el-input"></el-input>
    </div>
    <div class="ver-input">
      <el-input placeholder="验证码" v-model="code" class="fl code-input el-input"></el-input>
      <img src="../../../static/images/img5.png" alt="" class="w100 h100 fl code-pic">
    </div>
    <el-button class="clear save-code">提交</el-button>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        code: ''
      }
    },
    methods: {

    }
  }
</script>

<style type="text/css">
  /* ver-conent start */
  .ver-conent {

  }
  .ver-conent .logo {
    width: 78px;
    height: 48px;
    margin: 0px auto 30px;
  }
  .ver-conent .ver-input {
    margin: 0px 10px;
    height: 60px;
  }
  .ver-conent .ver-input .el-input {
    margin: 5px 0px;
  }
  .ver-conent .ver-input .code-input {
    width: 65%;
  }
  .ver-conent .ver-input .code-pic {
    width: 104px;
    height: 40px;
    position: relative;
    top: 5px;
  }
  .ver-conent .ver-input .el-input .el-input__inner {
     border-radius: 0px;
    border: 1px solid #fff;
  }
  .ver-conent .save-code {
    width: 94%;
    color: #fff;
    border: 1px solid #e8ca46;
    background: #e8ca46;
  }
  /* ver-conent end */
</style>
