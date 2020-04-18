import React from "react";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

const TodoListUI = (props) => {
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          placeholder="write somthing"
          style={{ width: "250px", marginRight: "6px" }}
          onChange={props.changeInputVal}
          value={props.inputVal}
        ></Input>
        <Button onClick={props.clickButton} type="primary">
          增加
        </Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.removeItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        ></List>
      </div>
    </div>
  );
};

export default TodoListUI;
