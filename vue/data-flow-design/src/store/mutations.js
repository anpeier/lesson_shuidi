// 围绕状态 设计
import {
  RECORD_USERINFO,
  ADD_CART,
  INCREMENT_QUANTITY,
  CHECK_OUT
} from "./mutation-types";
export default {
  // /login {userinfo}
  [RECORD_USERINFO](state, info) {
    state.userInfo = info;
    state.login = true;
  },
  // cartList?
  [ADD_CART](state, { productId }) {},
  [INCREMENT_QUANTITY](state, { productId }) {},
  [CHECK_OUT](state) {}
};
