import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 数据管理， 财务部 node -> api -> vuex (四大家族 )->
// 共享状态 父子 不再由 组件私有， 所有中央来调配
// lbs 应用， 经纬度共享
export default new Vuex.Store({
  state: {
    latitude: 28.4348600000,
    longitude: 115.5390900000,
    // shops: [] //实习项目可以， 不OK? 
  },
  mutations: {
  },
  actions: {
  },
  // vuex 应用即将大型化， 数据管理，
  // 也将分库， 大仓库， 分成很多小的仓库， 
  // 细化设计
  modules: { 
    // shops
  }
})
