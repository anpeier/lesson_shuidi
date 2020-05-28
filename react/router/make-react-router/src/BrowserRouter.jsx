import React from "react";
import Context from "./Context";
const { Provider } = Context;
// Provider 生成全局变量 Consumer 消费全局变量

// 匹配当前浏览器地址栏url 和当前的
{
  /* <Route path="/users"><Users /></Route>
  path 这个prop
 */
}
//  在react里面有一些数据 跨组件传递
// history： 当前浏览器地址栏，告诉所有的Route组件
// history 当做全局变量处理 Context
class BrowserRouter extends React.Component {
  handlePathNameChange = (pathname) => {
    const history = this.state.history;
    console.log(pathname)
    this.setState({
      history: {
        ...history,
        pathname,
      },
    });
  };
  state = {
    history: {
      location: window.location,
      pathname: window.location.pathname,
      handlePathNameChange: this.handlePathNameChange,
    },
  };
  render() {
    return (
      <Provider value={{ ...this.state.history }}>
        {this.props.children}
      </Provider>
    );
  }
}

export default BrowserRouter;
