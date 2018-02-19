import React, { Component } from "react";
import { Link } from "react-router-dom";

const formStyle = {
  backgroundColor: "whitesmoke",
  borderRadius: "0.5%",
  marginBottom: "5em"
};

const submitStyle = {
  color: "rgb(204, 77, 3)"
};

export default class UpdateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPost: {}
    };
  }

  handleInputChange1(value) {
    this.setState({
      blogPost: {
        title: value,
        content: this.state.blogPost.content
      }
    });
  }
  handleInputChange2(value) {
    this.setState({
      blogPost: {
        title: this.state.blogPost.title,
        content: value
      }
    });
  }

  componentWillMount() {
    document.body.style.backgroundImage = `url(
      "https://static.pexels.com/photos/7101/wood-coffee-iphone-notebook.jpg"
    )`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.imageRendering = "optimizeQuality";
    document.body.style.backgroundSize = "70em";
    document.body.style.backgroundPosition = "bottom right";
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = null;
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/blog/" + this.props.match.params.id)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ blogPost: data });
      });
  }
  handleClick() {
    console.log("about to update");
    fetch("http://localhost:3000/api/blog/" + this.props.match.params.id, {
      method: "put",
      body: JSON.stringify({
        title: this.state.blogPost.title,
        content: this.state.blogPost.content
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
      .then((window.location.href = "/blogs"));
    console.log(this.state);
  }
  render() {
    return (
      <form
        className="form col-md-6 mx-auto mt-4 py-4 w-50"
        style={formStyle}
        id="form"
      >
        <input
          type="text"
          className="form-control"
          id="input-field"
          value={this.state.blogPost.title}
          onChange={event => this.handleInputChange1(event.target.value)}
        />
        <br />
        <textarea
          type="text"
          rows="10"
          className="form-control mt-4"
          id="input-field1"
          value={this.state.blogPost.content}
          onChange={event => this.handleInputChange2(event.target.value)}
        />
        <button
          type="button"
          style={submitStyle}
          className="btn btn-light mt-3 justify-content-center"
          id="post-b"
          onClick={() => this.handleClick()}
        >
          Submit
        </button>
      </form>
    );
  }
}
