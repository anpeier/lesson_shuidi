import React, { Component } from "react";
import TodoListUI from "./TodoListUI";

import store from "./store";
import {
  changeInputAction,
  addItemAction,
  removeItemAction,
} from "./store/actionCreate";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputVal = this.changeInputVal.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <TodoListUI
        inputVal={this.state.inputVal}
        changeInputVal={this.changeInputVal}
        clickButton={this.clickButton}
        list={this.state.list}
        removeItem={this.removeItem}
      ></TodoListUI>
    );
  }
  changeInputVal(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  storeChange = () => {
    this.setState(store.getState());
  };
  clickButton = () => {
    const action = addItemAction();
    store.dispatch(action);
  };
  removeItem = (index) => {
    const action = removeItemAction(index);
    store.dispatch(action);
  };
}

export default TodoList;
