import Vue from "vue";
import Vuex from "vuex";
// 商品模块的数据管理分离
import products from "./modules/products";
import cart from "./modules/cart";
// 单一状态树 状态不会有问题
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 根节点
    userInfo: {
      uid: 100001,
      username: "anpeier"
    }
  },
  mutations: {},
  actions: {},
  modules: {
    cart,
    products // 叶节点
  }
});
