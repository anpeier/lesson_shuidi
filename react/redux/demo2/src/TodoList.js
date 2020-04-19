import React from "react";
import { connect } from "react-redux";

const TodoList = (props) => {
  let { inputVal, list, inputChange, addItem, removeItme } = props;
  return (
    <div>
      <input value={inputVal} onChange={inputChange} />
      <button onClick={addItem}>提交</button>
      <ul>
        {list.map((item, index) => {
          return (
            <li onClick={removeItme.bind(null, index)} key={item + index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const stateToProps = (state) => {
  return {
    inputVal: state.inputVal,
    list: state.list,
  };
};

const dispathToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: "change_input",
        value: e.target.value,
      };
      dispatch(action);
    },
    addItem() {
      let action = {
        type: "add_item",
      };
      dispatch(action);
    },
    removeItme(index) {
      console.log(index);
      let action = {
        type: "remove_item",
        index,
      };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispathToProps)(TodoList);
