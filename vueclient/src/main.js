// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入axios，并配置基础路径
// 又因是跨域请求node端，所以所有请求前页面都要添加node端的基础地址，以后打包上线时再删掉
// 又因是跨域请求，需要配置withCredentials为true，这样避免每次都被识别为新的请求
// 说明：在vue中，可以使用代理去实现跨域，但是每次新地址都需要配置，还是比较麻烦，这里我们采用直接配置跨域，一次配置就可以一劳永逸
import axios from 'axios'
axios.defaults.withCredentials = true // 跨域保存session
axios.defaults.baseURL = "http://localhost:3000" // 默认基础路径配置，打包时删掉
Vue.prototype.$axios = axios

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
