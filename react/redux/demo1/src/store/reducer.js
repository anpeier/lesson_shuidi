import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM } from "./actionsType";

const defaultState = {
  inputVal: "",
  list: ["早上9点起来写代码", "下午写代码到6点", "晚上写代码到12点"],
};
export default (state = defaultState, action) => {
  // console.log(state,action)
  // Reducer 里只能接收state
  if (action.type === CHANGE_INPUT) {
    console.log(action)
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    return newState;
  }

  if (action.type === ADD_ITEM) {
    console.log(state.inputVal)
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputVal);
    newState.inputVal = "";
    return newState;
  }

  if (action.type === REMOVE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }

  return state;
};
