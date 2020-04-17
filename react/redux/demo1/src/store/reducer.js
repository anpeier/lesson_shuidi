const defaultState = {
  inputVal: "",
  list: ["早上9点起来写代码", "下午写代码到6点", "晚上写代码到12点"],
};
export default (state = defaultState, action) => {
  // console.log(state,action)
  // Reducer 里只能接收state
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    return newState;
  }

  if (action.type === "addItem") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputVal);
    newState.inputVal = "";
    return newState;
  }

  if (action.type === "removeItem") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }

  return state;
};
