import Vue from 'vue'
import App from './App.vue'

import lapui from '../packages'
Vue.use(lapui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
