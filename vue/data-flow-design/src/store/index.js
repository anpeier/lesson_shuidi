import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false, // 是否登录
    userInfo: null, // 用户信息
    cartList: []
    // user,
    // cart,
    // products
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
