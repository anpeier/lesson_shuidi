const defaultState = {
  inputVal: "lap",
  list: [],
};

export default (state = defaultState, action) => {
  if (action.type === "change_input") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    return newState;
  }
  if (action.type === "add_item") {
    console.log(action);
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputVal);
    newState.inputVal = "";
    return newState;
  }
  if (action.type === "remove_item") {
    console.log(action.index);
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};
