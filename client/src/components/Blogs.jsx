import React, { Component } from "react";
import { render } from "react-dom";
import SingleBlog from "./SingleBlog";

export default class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogList: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/blog")
      .then(Response => Response.json())
      .then(object => this.setState({ blogList: object }));
  }

  render() {
    return (
      <div>
        <SingleBlog list={this.state.blogList} />
      </div>
    );
  }
}
