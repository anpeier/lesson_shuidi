import React from "react";
import Context from "./Context";
const { Consumer } = Context;
class Link extends React.Component {
  render() {
    return (
      <Consumer>
        {({ handlePathNameChange }) => {
          return (
            <a
              onClick={(e) => {
                e.preventDefault();
                handlePathNameChange(this.props.to);
              }}
            >
              {this.props.children}
            </a>
          );
        }}
      </Consumer>
    );
  }
}
export default Link;
