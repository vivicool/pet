// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
import axios from 'axios'
//import BScroll from 'better-scroll'
//import VueBus from 'vue-bus'
//import navHeader from './components/Navbar/navbar.vue'
//import Load from './components/public/Loading.vue'
//import Commenting from './components/public/Comment.vue'
//import Commentlist from './components/public/CommentList.vue'

////import PageTurning from './components/public/PageTurning.vue'




//Vue.use(navHeader)
//Vue.use(VueBus)

//Vue.component('navbar',navHeader)
//Vue.component('Loading',Load )   //注册全局组件
//Vue.component('Comment',Commenting)  //评论组件
//Vue.component('CommentList',Commentlist)  //评论列表
//Vue.component('PageTurning',PageTurning)   //翻页


//import VueScroll from 'vue-scroll'


//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'

//设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

 Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}   

router.beforeEach((to,from,next) => {
  document.title = to.meta.title ? to.meta.title :'ECHOME';    //动态显示title的信息
  window.scrollTo(0,0);    // 打开页面重置滚动条位置
  next()
})

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  stores.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  stores.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

//Vue.use(VueScroll);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  data: {
    Bus:new Vue()
  },
  components: { App },

})
