import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
    this.changeInputVal = this.changeInputVal.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder="write somthing"
            style={{ width: "250px", marginRight: "6px" }}
            onChange={this.changeInputVal}
            value={this.state.inputVal}
          ></Input>
          <Button onClick={this.clickButton} type="primary">
            增加
          </Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              /* this.removeItem.bind(this,index)*/
              <List.Item onClick={() => this.removeItem(index)}>
                {item}
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    );
  }
  changeInputVal(e) {
    const action = {
      type: "changeInput",
      value: e.target.value,
    };
    store.dispatch(action);
  }
  storeChange = () => {
    this.setState(store.getState());
  };
  clickButton = () => {
    const action = {
      type: "addItem",
    };
    store.dispatch(action);
  };
  removeItem = (index) => {
    const action = {
      type: "removeItem",
      index,
    };
    store.dispatch(action);
  };
}

export default TodoList;
