import shop from "./../../api/shop";
const state = {
  items: [],
  checkoutStatus: null
};
const actions = {
  addProductToCart({ commit }, product) {
    console.log(product);
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit("pushProductToCart", { id: product.id });
      } else {
        commit("increProductItemInventory", cartItem);
      }
      commit(
        "products/decreProductItemInventory",
        { id: product.id },
        { root: true }
      );
    }
    // return state.item.map(({id, inventory}) => {
    //     // 根节点的state
    //     // const product = rootState.products.all.find(
    //     //     product => product.id === id
    //     // )
    // })
  },
  checkout({ commit }, products) {
    // console.log(products)
    const saveCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    commit("setCartItems", { items: [] });
    shop.buyProducts(
      products,
      //   success
      () => commit("setCheckoutStatus", "successful"),
      () => {
        commit("setCheckoutStatus", "fail");
        commit("setCartItems", { items: saveCartItems });
      }
      //   error
    );
  }
};
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      inventory: 1
    });
  },
  increProductItemInventory(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.inventory++;
  },
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },
  setCartItems(state, { items }) {
    state.items = items;
  }
};
const getters = {
  cartProducts(state, getters, rootState) {
    return state.items.map(({ id, inventory }) => {
      const product = rootState.products.all.find(product => product.id === id);
      return {
        title: product.title,
        price: product.price,
        inventory
      };
    });
  },
  cartTotalPrice(state, getters) {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.inventory;
    }, 0);
  }
};
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
