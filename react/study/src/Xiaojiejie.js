import React, { Component, Fragment } from "react";
import "./style.css";
import XiaojiejieItme from "./XiaojiejieItem";
import Boss from "./Boss";
// import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      list: ["基础按摩", "精油推背"],
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log("小姐姐组件组件将要挂载到页面");
  //     console.log(state);
  //     return true;
  //   }
  componentDidMount() {
    // 组件挂载完成
  }
  //   shouldComponentUpdate() {
  //     console.log("更新前");
  //     return true; // false则render不执行
  //   }
  render() {
    // console.log("render挂载中");
    return (
      <Fragment>
        <div>
          {/* 不能使用for */}
          <label htmlFor="reactStudy">增加服务</label>
          <input
            id="reactStudy"
            className="input"
            value={this.state.inputVal}
            onChange={this.inputChange.bind(this)}
            ref={(input) => (this.input = input)}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul) => (this.ul = ul)}>
          <TransitionGroup>
            {this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames="boss-text"
                  unmountOnExit
                  appear={true}
                  key={index + item}
                >
                  <XiaojiejieItme
                    key={index + item}
                    delItem={this.delItem.bind(this)}
                    index={index}
                    list={this.state.list}
                    content={item}
                    // avname="波多野结衣"
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </ul>
        <Boss />
      </Fragment>
    );
  }
  inputChange() {
    this.setState({
      inputVal: this.input.value,
    });
  }
  // 增加列表
  addList() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputVal],
        inputVal: "",
      },
      () => {
        console.log(this.ul.querySelectorAll("li").length);
      }
    );
    // setTimeout(() => { // event Loop
    //   console.log(this.ul.querySelectorAll("li").length);
    // }, 0);
  }
  // 删除列表项
  delItem(index) {
    // 可以达到效果，但是会产生性能障碍，不允许这样
    // this.state.list.splice(index, 1);
    // this.setState({
    //   list,
    // });

    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list,
    });
  }
}

export default Xiaojiejie;
