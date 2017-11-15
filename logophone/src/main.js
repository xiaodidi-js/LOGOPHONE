// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//  导入样式
import 'element-ui/lib/theme-chalk/index.css'

//  导入Vue框架
import Vue from 'vue'

//  导入主视图文件
import App from './App'

//  导入组件
import router from './router'

//  导入element组件
import ElementUI from 'element-ui'

//  导入请求地址
import port from './common/port_url'

//  导入API
import { tool_verify } from './api/tool'

Vue.prototype.$tools = tool_verify;

//  导入swiper样式
require('swiper/dist/css/swiper.css')

//  导入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

//  使用swiper
Vue.use(VueAwesomeSwiper)

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}

Vue.prototype.$prot = port;
console.log(port.GET_HTTP.HTTP);

//  使用element-ui
Vue.use(ElementUI);

//  发布后是否显示提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
