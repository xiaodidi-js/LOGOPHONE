<template>
  <div v-show="$route.meta.footer">
    <div class="logo-copy">
      <p class="ft-14">logo大师网—打造高端标志第一垂直品牌</p>
      <p style="color: #595757;">WWW.LOGODASHI.COM</p>
      <p>
        <a href="javascript:void(0);">手机版</a>
        <span>|</span>
        <a href="javascript:void(0);">电脑版</a>
      </p>
    </div>
    <div class="logo-service">
      <ul>
        <li class="fl">
          <i class="iconfont icon-qq"></i>
          <span>QQ咨询</span>
        </li>
        <li class="fl">
          <a href="tel:13232800159" style="color: #fff;">
            <i class="iconfont icon-dianhua"></i>
            <span>QQ咨询</span>
          </a>
        </li>
        <li class="fl">
          <i class="iconfont icon-biaoqiandao"></i>
          <span>QQ咨询</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style type="text/css">
  /* logo-copy start */
  .logo-copy {
    background: #fff;
    padding: 10px;
    margin: 10px 10px 69px 10px;
  }
  /* logo-copy end */
  /* logo-service start */
  .logo-service {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 55px;
    background: #fff;
  }
  .logo-service ul li {
    width: 33.1%;
    line-height: 55px;
  }
  .logo-service ul li:first-child, .logo-service ul li:nth-child(2) {
    background: #595757;
    color: #fff;
    border-right: 1px solid rgb(78,76,76);
  }
  .logo-service ul li:first-child .icon-qq,
  .logo-service ul li:nth-child(2) .icon-dianhua {
    color: #ecca25;
  }
  .logo-service ul li:last-child{
    background: #eccd32;
    color: #595757;
  }
  /* logo-service end */
</style>
