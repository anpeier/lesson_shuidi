import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <ul className="my-list">
        <li>{false ? 'react1' : 'sss'}</li>
        <li>react2</li>
      </ul>
    );
  }
}

export default App;
