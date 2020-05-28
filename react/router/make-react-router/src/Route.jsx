import React from "react";
import Context from "./Context";
const { Consumer } = Context;
class Route extends React.Component {
  render() {
    const { path,pathname } = this.props;
    return (
      <Consumer>
        {({ pathname }) => {
          // 地址栏
          const isMatch = pathname === path;
          return isMatch && this.props.children;
        }}
      </Consumer>
    );
  }
}

export default Route;
