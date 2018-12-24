import Vue from 'vue' //入口文件

import VueRouter from 'vue-router' // 导入路由
Vue.use(VueRouter)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 导入全部的 mint-ui 组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)


import app from './App.vue'

import router from './router.js'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})
