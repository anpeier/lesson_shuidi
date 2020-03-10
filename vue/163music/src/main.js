import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ui from 'lap-ui'
import 'lap-ui/lib/lap-ui.css'

Vue.use(ui)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
