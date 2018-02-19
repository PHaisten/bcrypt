import React, { Component } from "react";
import { render } from "react-dom";

const formStyle = {
  marginBottom: "5em"
};

export default class BlogInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  handleInputChange1(value) {
    this.setState({
      title: value
    });
  }
  handleInputChange2(value) {
    this.setState({
      content: value
    });
  }
  handleClick() {
    console.log("about to post");
    fetch("http://localhost:3000/api/blog", {
      method: "post",
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(data => {
        console.log("success", data);
      })
      .catch(err => {
        console.log("error", err);
      })
      .then(window.location.reload());
    console.log(this.state);
  }
  render() {
    return (
      <form
        className="form col-md-6 mx-auto mt-4 py-4 w-50"
        style={formStyle}
        id="form"
      >
        <h2 id="post-h">Create a Blog Post</h2>
        <input
          type="text"
          className="form-control"
          id="input-field"
          value={this.state.text}
          onChange={event => this.handleInputChange1(event.target.value)}
          placeholder="Title"
        />
        <br />
        <textarea
          type="text"
          rows="10"
          className="form-control mt-4"
          id="input-field1"
          value={this.state.text}
          placeholder="Write your thoughts, musings, ideas here!"
          onChange={event => this.handleInputChange2(event.target.value)}
        />
        <button
          type="button"
          className="btn btn-light mt-3 justify-content-center"
          id="post-b"
          onClick={() => this.handleClick()}
        >
          Post
        </button>
      </form>
    );
  }
}
