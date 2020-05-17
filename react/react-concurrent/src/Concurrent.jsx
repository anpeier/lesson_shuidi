import React from "react";
export default class Demo extends React.Component {
  state = {
    length: 10000,
    num: 1,
  };
  updateNum = () => {
    let num = this.state.num;
    this.setState({
      num: num+1,
    });
  };
  componentDidMount() {
    setInterval(() => {
      this.updateNum();
    }, 100);
    // Concurrent Mode 更新频率远远低于100ms
    // 动画优先，如果还有剩余时间，才会执行js
    // this.updateNum() 会被react推迟
  }
  render() {
    const { length, num } = this.state;
    const grids = [];
    for (let i = 0; i < length; i++) {
      grids.push(
        <div className="item" key={i}>
          {num}
        </div>
      );
    }
    return <div className="wrapper">{grids}</div>;
  }
}
