<template>
  <div class="search-page clear">
    <div class="logo">
      <img src="../../../static/images/img1.png" alt="" class="w100 h100">
    </div>
    <div class="website-head">
      <p class="website">LOGODASHI.COM</p>
      <p class="ft-18">专注更专业！</p>
    </div>
    <div class="search-tools">
      <ul>
        <li class="fl">商标名</li>
        <li class="fl">注册号</li>
        <li class="fl">申请人</li>
        <li class="fl">近似商标</li>
        <li class="fl">类似查询</li>
      </ul>
      <div class="tools-wrap">
        <el-input placeholder="请输入内容" v-model="inputSearch">
          <i slot="prefix" class="el-input__icon el-icon-search" @click="handleIconClick"></i>
        </el-input>
        <p class="wrap-desc">LOGO大师为广大企业提供免费精准查询</p>
      </div>
      <div class="tools-wechar">
        <div class="sao">
          <img src="../../../static/images/img4.png" alt="" class="w100 h100">
        </div>
        <p style="margin-top: 10px;">关注微信，查询实时动态</p>
      </div>

    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        inputSearch: ''
      }
    },
    methods: {
      handleIconClick() {

      }
    }
  }
</script>

<style type="text/css">
  /* search-page start */
  .search-page {
    margin-top: 135px;
  }
  .search-page .logo {
    width: 78px;
    height: 48px;
    margin: 0px auto;
  }
  .search-page .website {
    color: rgb(115,107,107);
  }
  .search-page .search-tools {
    margin: 0px 10px;
  }
  .search-page .search-tools .tools-wrap {
    margin: 10px 0 0;
  }
  .search-page .search-tools .tools-wrap .wrap-desc {
    margin: 20px 0px;
  }
  .search-page .search-tools ul {
    height: 40px;
  }
  .search-page .search-tools ul li {
    height: 35px;
    line-height: 35px;
    padding: 0px 12px 0px 0px;
  }
  .search-page .search-tools .sao {
    width: 67px;
    height: 67px;
    margin: 0px auto;
  }
  .search-page .search-tools .tools-wechar {
    margin-top: 55px;
  }
  /* search-page end */
</style>
