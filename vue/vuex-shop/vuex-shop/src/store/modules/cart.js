const state = {
  items: [],
  checkoutStatus: null
};
const actions = {
  addProductToCart({ commit }, product) {
    console.log(product)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit("pushProductToCart", { id: product.id });
      }else{
        commit('increProductItemInventory',cartItem)
      }
      commit('products/decreProductItemInventory',cartItem)
    }
    // return state.item.map(({id, inventory}) => {
    //     // 根节点的state
    //     // const product = rootState.products.all.find(
    //     //     product => product.id === id
    //     // )
    // })
  }
};
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      inventory: 1
    });
  },
  increProductItemInventory(state,{id}){
    const cartItem = state.items.find(item => item.id === id)
    cartItem.inventory++
  }
};
const getters = {};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
