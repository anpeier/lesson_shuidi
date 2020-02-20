import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'

// mock 开关
const mock = true
if(mock) {
  require('./mock/api')
}
// 根据前端跨域方式调整 /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// 根据环境变量获取不同请求地址
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) { // 成功
    return res.data
  } else if (res.status == 10){ // 未登录
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
