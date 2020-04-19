import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          cid: 1,
          title: "标题",
        },
        {
          cid: 2,
          title: "标题2",
        },
        {
          cid: 3,
          title: "标题3",
        },
      ],
    };
    this.props.history.push("/home")
  }
  render() {
    return (
      <div>
        {/* <Redirect to="home" /> */}
        <h1>lap</h1>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <Link key={index + item} to={`/list/${item.cid}`}>
                <li>
                  {item.cid} - {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
