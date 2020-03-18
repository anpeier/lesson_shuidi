import shop from './../../api/shop'
const state = {
  all: [
    {
      id: 1,
      name: "Ipad"
    }
  ]
};
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit("setProducts", products);
    });
  }
};
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },
  decreProductItemInventory(state, {id}){
    const product = state.all.find(item => item.id === id)
    product.inventory--
  }
};
const getters = {};
export default {
  namespaced: true, // 命名空间
  state,
  actions,
  mutations,
  getters
};
