<template>
  <div class="popups">
    <div class="popups-clear">X</div>
    <div class="popups-con">
      <div class="popups-pic">
        <img src="../../../static/images/img6.png" alt="" class="w100 h100">
      </div>
      <p class="popups-title ft-16">《新童心教育文化艺术学校》</p>
      <div class="popups-tools">
        <p class="fl">
          <span class="fl">
          <i class="iconfont icon-yan"></i>
          <i>1333</i>
        </span>
          <span class="fl">
          <i class="iconfont icon-zan"></i>
          <i>333</i>
        </span>
        </p>
        <p class="right-p">时间：2017/01/10</p>
      </div>
      <div class="popups-tools clear">
        <p class="fl">
          <span class="fl">上传：logo大师</span>
        </p>
        <p class="right-p">来源：logo大师</p>
      </div>
      <div class="popups-tools clear">
        <p class="fl">
          <span class="fl">关键词：你真帅</span>
        </p>
        <p class="right-p cret">字体认领</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="popups-swiper">
      <div class="ft-14">相似字体设计推荐</div>
      <div class="let-go">开始设计</div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {

    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    },
  }
</script>

<style type="text/css">
  /* popups start */
  .popups {
    margin: 0px 10px;
    background: #fff;
  }
  .popups .line {
    height: 1px;
    background: #eee;
  }
  .popups .popups-swiper .let-go {
    height: 40px;
    line-height: 40px;
    background: #ecca25;
  }
  .popups .popups-clear {
    width: 95%;
    height: 40px;
    line-height: 40px;
    padding-right: 15px;
    text-align: right;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #999;
  }
  .popups .popups-con {
    margin: 0px 10px;
    background: #fff;
    overflow: hidden;
    height: 100%;
    padding-bottom: 10px;
  }
  .popups .popups-con .popups-title {
    text-align: left;
    color: #595757;
  }
  .popups .popups-con .popups-tools {
    height: 25px;
    line-height: 25px;
  }
  .popups .popups-con .popups-tools .right-p {
    width: 50%;
    float: right;
    text-align: left;
  }
  .popups .popups-con .popups-tools .cret {
    background: #ecca25;
    border-radius: 5px;
    width: 25%;
    text-align: center;
    margin: 0 5px 0 30px;
    float: left;
  }
  .popups .popups-con .popups-tools span{
    margin-right: 10px;
    color: #595757;
  }
  .popups .popups-con .popups-pic {
    margin: 10px 0px;
  }
  /* popups end */
</style>
