import React, { Component } from "react";

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log(`Didmount => 你点击了${this.state.count}次`);
  }
  componentDidUpdate() {
    console.log(`Didupdate => 你点击了${this.state.count}次`);
  }
  render() {
    return (
      <div>
        <p>你点击了{this.state.count}次</p>
        <button onClick={this.addCount}>click me</button>
      </div>
    );
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}

export default Example3;
