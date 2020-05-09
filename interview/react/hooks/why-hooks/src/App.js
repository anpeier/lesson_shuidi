import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function A({ x, y, date }) {
  return (
    <div>
      x: {x}
      y: {y}
      date: {date}
    </div>
  );
}

function B({ x, y, date }) {
  return (
    <div>
      x: {x}
      y: {y}
      date: {date}
    </div>
  );
}

function C() {
  const { x, y } = useMouseInfo();
  return (
    <div>
      x: {x} y: {y}
    </div>
  );
}

// 高阶组件：接收一个组件，返回一个组件
function withMouseInfo(Com) {
  class withMouseComponent extends React.Component {
    state = {
      x: 0,
      y: 0,
    };
    componentDidMount() {
      document.addEventListener("mousemove", (e) => {
        this.setState({
          x: e.clientX,
          y: e.clientY,
        });
      });
    }
    render() {
      const props = this.props;
      return <Com x={this.state.x} y={this.state.y} {...props} />;
    }
  }
  return withMouseComponent;
}

function WithTime(Com) {
  class withTimeComponent extends React.Component {
    state = {
      date: new Date().toLocaleString(),
    };
    render() {
      const props = this.props;
      return <Com date={this.state.date} {...props} />;
    }
  }
  return withTimeComponent;
}

// const Amouse = withMouseInfo(A);
const Bmouse = withMouseInfo(WithTime(B));

// 包装地狱
const Amouse = WithTime(withMouseInfo(A));

// 自定义hooks
function useMouseInfo() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setX(e.clientX);
      setY(e.clientY);
    });
  }, []); // [] hook 的依赖
  return {
    x,
    y,
  };
}
function App() {
  return (
    <div className="App">
      <Amouse />
      <Bmouse />
      <C />
    </div>
  );
}

export default App;
