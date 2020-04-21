const { createStore } = require("redux");
let a = 123;
// state: {
//   a: [],
//   b: {},
//   home: 'home state'
// }
// state
let globalState = {
  home: {},
  login: {},
};
// reducer: 纯函数 => state
// 无副作用，同样的输入 同样的输出
// state 完全要自己控制
// 参数：state 上一次的 state， action dispatch 那个 action
function reducer(state, action) {
  console.log("达到 reducer", state, action);
  if (action.type === "CHANGE_HOME_STATE") {
    return {
      home: action.home,
    };
  }
  // 一个 type 都没命中，返回默认值
  return {
    home: "home state",
    login: "login state",
  };
}
// action : js 对象
// type: 发起这次 action ? CRUD
// dispatch => action => reducer(纯函数：考虑 state 默认值，考虑后续state 的变化) => state
let action = {
  type: "CHANGE_HOME_STATE",
  home: "home state 1",
  a: 1,
  b: 2,
};
// 生成 state 的默认值
let store = createStore(reducer);
console.log(store.getState());
// 修改默认值
store.dispatch(action);
console.log(store.getState());

// a 状态
/**
 * 取值：
 * globalState.home
 * globalState.login
 * 修改：
 * 也能够轻易地，把全局变量改掉，
 * globalState.home = 123456
 *
 * 尽量避免全局变量
 * redux/vuex 都要设计一套流程修改 state： dispatch -> action -> muatation -> state
 * state = {
 *  b: 456
 * }
 * return (
 * <div>{{ a }}</div>
 * )
 */
