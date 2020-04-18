import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <input value={this.props.inputVal} />
        <button>提交</button>
        <ul>
          <li>hello</li>
        </ul>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    inputVal: state.inputVal,
  };
};

export default connect(stateToProps, null)(TodoList);