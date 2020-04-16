import React from 'react';
import logo from './logo.svg';
import './App.css';

class A extends React.Component {
  // state = {
  //   x: 0,
  //   y: 0,
  // }
  // componentDidMount() {
  //   document.body.addEventListener('mouseover', (e) => {
  //     // console.log(e.clientX, e.clientY)
  //     this.setState({
  //       x: e.clientX,
  //       y: e.clientY
  //     })
  //   })
  // }
  render() {
    const { x, y } = this.props;
    return (
      <div>
        x: { x } - y: { y }
      </div>
    )
  }
}
// 1: state
// 2: did addEvent
class B extends React.Component {
  render() {
    const { x, y } = this.props;
    return (
       <div>
         <h2>x:{x}</h2>
         <h3>x:{y}</h3>
       </div>
    );
  }
}
// 高阶组件：我们组件内部公共的代码抽离出来
// 其实是一个方法
function WithMouseInfo(Com) {
  class MouseXy extends React.Component {
    // 公共的代码抽离出来
    // 1
    state = {
      x: 0,
      y: 0,
    }
    // 2
    componentDidMount() {
      document.body.addEventListener('mouseover', (e) => {
        // console.log(e.clientX, e.clientY)
        this.setState({
          x: e.clientX,
          y: e.clientY
        })
      })
    }
    // 该渲染什么 东西 ？？？？? ?
    render() {
      const {x, y} = this.state;
      return (
         <Com x={ x } y={ y } />
      );
    }
  }
  return MouseXy;
}
const AXy = WithMouseInfo(A);
const BXy = WithMouseInfo(B);
class App extends React.Component {
  render() {
    return (
      <div>
        <AXy />
        <BXy />
      </div>
    )
  }
}
export default App;
