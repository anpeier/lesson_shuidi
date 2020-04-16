import React, { Component } from "react";
import PropTypes from "prop-types";

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("小姐姐item组件将要挂载到页面");
    console.log(props);
    console.log(state);
    return true;
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.avname}为你服务做-{this.props.content}
      </li>
    );
  }
  //   handleClick = () => { // 箭头函数形式
  //     this.props.delItem(this.props.index);
  //   }
  handleClick() {
    // console.log(this.props.list)
    // this.props.list = [] // 单向数据流，不能改变父组件的值
    this.props.delItem(this.props.index);
  }
}
XiaojiejieItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  delItem: PropTypes.func,
  avname: PropTypes.string.isRequired,
};

XiaojiejieItem.defaultProps = {
  avname: "松岛枫",
};

export default XiaojiejieItem;
