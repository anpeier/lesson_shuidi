import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mock from '@/mock'
// 为应用引入mock 自己来模拟 你的假数据的格式跟
// 未来的这数据是一样的 把功能开发完整
// 后台管理项目， 数据报表 老板， 运营， 订单数据如何？
// 事件， 分页10万 ,  排序  element-ui PC  mobile 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
