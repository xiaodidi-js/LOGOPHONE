<template>
  <div id="header">
    <div class="header-logo" v-show="$route.meta.header">
      <div class="iconfont icon-cf-c57 fl c_ecca25"></div>
      <div id="header-logo">
        <div class="header-img fl">
          <img src="../../../static/images/logo.png" class="w100 h100" alt="">
        </div>
        <span class="header-name c_ecca25 ft-18">LOGO大师网</span>
      </div>
      <router-link :to="{ path: '/user/login'}" class="fr block">
        <div class="user_info iconfont icon-yonghu c_ecca25"></div>
      </router-link>
    </div>
    <div v-show="$route.meta.back" class="goback clear" @click="goBack()">
      <div class="iconfont icon-zuobian">返回</div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'header',
    data() {
      return {

      }
    },
    methods: {
      goBack() {
        window.history.back();
      }
    }
  }
</script>

<style type="text/css">
  /* header start */
  #header {
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
  }
  #header .header-logo {
    background: #282828;
    height: 50px;
  }
  #header .icon-cf-c57 {
    line-height: 50px;
    width: 65px;
    font-size: 26px;
  }
  #header #header-logo {
    width: 170px;
    line-height: 50px;
    margin: 0px auto;
  }
  #header #header-logo .header-img {
    width: 50px;
    height: 35px;
  }
  #header .user_info {
    position: absolute;
    top: 0px;
    right: 0px;
    line-height: 50px;
    width: 65px;
    font-size: 26px;
  }
  #header .goback {
    width: 100%;
    background: #ecca25;
    height: 40px;
    position: relative;
    top: -2px;
  }
  #header .goback .icon-zuobian {
    height: 40px;
    width: 75px;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
  #header .goback .icon-zuobian:before {
    margin-right: 5px;
  }
  /* header end */

</style>
