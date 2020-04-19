import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>List-page{this.state.id}</h1>;
  }

  componentDidMount() {
    console.log(this.props)
    let id = this.props.match.params.id;
    this.setState({
      id,
    });
  }
}

export default List;
