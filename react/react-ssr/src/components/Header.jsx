import React, { Component } from "react";

class Header extends Component {
  // 服务端没有click事件
  // 服务端 1. 为了SEO 为了性能 renderToString
  // 客户端 2. 为了交互，在客户端运行 进行事件绑定
  handleClick() {
    console.log("click");
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>header</button>
      </>
    );
  }
}

export default Header;
