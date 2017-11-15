<template>
  <div class="index-tools">
    <div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="LOGO设计" name="a">
          <div class="banner">
            <swiper height="85" :options="swiperOption" class="swiper-box">
              <swiper-slide class="swiper-item" style="
              background: url('../../static/images/img2.png') no-repeat center;background-size: cover"></swiper-slide>
            </swiper>
          </div>
          <div class="search">
            <el-input placeholder="请输入内容" v-model="inputSearch">
              <i slot="prefix" class="el-input__icon el-icon-search" @click="handleIconClick"></i>
            </el-input>
            <div class="search-tools">
              <div class="fl pub-tools">
                <span>全部</span>
                <i class="iconfont icon-down-trangle-copy-copy"></i>
              </div>
              <div class="fl pub-tools">
                <span>排序</span>
                <i class="iconfont icon-down-trangle-copy-copy"></i>
              </div>
            </div>
          </div>

          <div class="list-shop">
            <ul class="ul">
              <li class="li">
                <router-link :to="{ path: '/', query: {id: 1}}" class="block">
                  <div class="fl list-pict">
                    <img src="../../static/images/img3.png" alt="" class="w100 h100">
                  </div>
                  <div class="fl list-msg">
                    <strong class="list-title">2017年国内设计大师博客</strong>
                    <p>时间：2017-01-27</p>
                    <p>作者：logo大师</p>
                    <div class="list-tools">
                    <span class="eye tools">
                      <i class="iconfont icon-yan"></i>
                      <i>3</i>
                    </span>
                      <span class="izan tools">
                      <i class="iconfont icon-zan"></i>
                      <i>3</i>
                    </span>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="loading-move">加载更多</div>
        </el-tab-pane>
        <el-tab-pane label="字体设计" name="b">
          字体设计
        </el-tab-pane>
        <el-tab-pane label="商标查询" name="c">
          商标查询
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        inputSearch: '',
        activeName: 'a',
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        },
      }
    },
    methods: {
      handleIconClick() {
        alert(12313);
      },
      handleClick() {

      }
    }
  }
</script>

<style type="text/css">
  .index-tools {
    margin-top: 60px;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__nav {
    border-radius: 0px;
  }
  .index-tools .el-tabs__header {
    margin: 0 0 10px;
  }
  .index-tools .el-tabs__header {
    background: #fff;
  }

  /* banner start */
  .banner .swiper-slide {
    height: 85px;
  }
  /* banner end */

  /* search */
  .search {
    padding: 10px 20px;
    background: #fff;
    margin: 10px 0px;
  }
  .search .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    margin-top: 10px;
  }
  .search .search-tools {
    overflow: hidden;
    line-height: 30px;
  }
  .search .search-tools .pub-tools {
    margin: 10px 10px 0px 0px;
  }
  .search .el-input .el-input__inner {
    border: 1px solid #ebca25;
  }
  /* search end */

  /* list-shop start */
  .list-shop {
    margin: 0px 10px;
    background: #fff;
  }
  .list-shop .ul .li {
    /*margin: 10px 0px;*/
    /*padding: 10px 0px;*/
    overflow: hidden;
  }
  .list-shop .ul .li .list-pict {
    width: 40%;
    height: 100%;
    margin: 10px 0px 10px 10px;
  }
  .list-shop .ul .li .list-msg {
    margin: 10px 0px 0px 10px;
    width: 53%;
    text-align: left;
    line-height: 20px;
    position: relative;
    height: inherit;
  }
  .list-shop .ul .li .list-tools {
    /*position: absolute;*/
    /*bottom: 0px;*/
    /*left: 0px;*/
  }
  .list-shop .ul .li .list-tools .tools {
    margin-right: 10px;
    color: #999;
  }
  .list-shop .ul .li .list-msg .list-title {
    height: 35px;
    line-height: 17px;
    display: block;
    text-align: left;
    padding-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .loading-move {
    background: #fff;
    height: 40px;
    line-height: 40px;
    width: 94%;
    margin: 10px 10px 0;
  }
  /* list-shop end */

</style>
