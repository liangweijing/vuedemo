// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import App from './App.vue'
//引入全局样式
import '../static/css/global.css'

//mint-ui
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//axios
import Axios from 'axios'
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'https://www.sinya.online/api/';

//定义拦截器
// 1.请求发起前显示loading open()
// Axios.interceptors.request.use(function(config){
//   //不变配置直接返回，可变：用于设置公共请求头再返回config.header整个是header对象
//   MintUI.Indicator.open({
//     text: '加载中...',
//     spinnerType: 'fading-circle'
//   });
//   console.log(config);
//   return config;
// });
// // 2.响应结束关不loading close（）
// Axios.interceptors.response.use(function(response){
//   //response：{config:{header:{}},data:{}},config再response里面

//   // 接收响应头或体中数据，保存，供请求的拦截器中使用头信息操作
//   MintUI.Indecator.close();
//   console.log(response);
//   return response;
// });

//vue-preview插件使用
import VuePreview from 'vue-preview'
Vue.use(VuePreview)




//引入自定义插件（axios）
import Installer from '@/plugins/installer'
Vue.use(Installer);

Vue.use(MintUI); //注册所有全局组件，并给Vue.prototype挂载一些对象，方便在组件内直接this.xxx

Vue.config.productionTip = false


//注册全局组件
import MyUl from './components/common/MyUl'
import MyLi from './components/common/MyLi'
import NavBar from './components/common/NavBar'
import Comment from './components/common/Comment'
Vue.component(MyUl.name, MyUl); //要给一个name
Vue.component(MyLi.name, MyLi); //要给一个name
Vue.component(NavBar.name, NavBar);
Vue.component(Comment.name, Comment);


//定义全局过滤器
import Moment from 'moment'
Moment.locale('zh-cn');
Vue.filter('convertTime', function (data, formatStr) {
  //返回过滤后数据
  return Moment(data).format(formatStr);
});

Vue.filter('relativeTime', function (data) {
  return Moment(data).fromNow();
})






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
