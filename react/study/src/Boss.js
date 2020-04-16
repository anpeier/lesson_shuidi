import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  render() {
    return (
      <div>
        {/* <div className={this.state.isShow ? "show" : "hidden"}>
          Boss级人物-孙悟空
        </div> */}
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
          unmountOnExit
        >
          <div>
            Boss级人物-孙悟空
          </div>
        </CSSTransition>

        <div>
          <button onClick={this.toToggole}>召唤Boss</button>
        </div>
      </div>
    );
  }
  toToggole = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
}

export default Boss;
