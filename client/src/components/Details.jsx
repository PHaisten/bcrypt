import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogDetail: {}
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/blog/" + this.props.match.params.id)
      .then(Response => {
        return Response.json();
      })
      .then(object => this.setState({ blogDetail: object }));
  }

  handleList(value) {
    let newList = [...this.state.blogDetail];
    if (value === "") {
      console.log("It worked");
    } else {
      newList.push(value);
      this.setState({ blogDetail: newList });
    }
  }

  handleClick() {
    console.log("about to delete");
    fetch("http://localhost:3000/api/blog/" + this.props.match.params.id, {
      method: "delete"
    });
    console.log("Blog deleted!");
  }
  render() {
    return (
      <div className="container w-50 mt-5">
        <div className="card">
          <div className="card-block p-3">
            <h4 className="card-title">{this.state.blogDetail.title}</h4>
            <p className="card-text">{this.state.blogDetail.content}</p>
            <p className="card-text">{this.state.blogDetail._created}</p>
            <a
              className="btn btn-light btn-sm ml-2"
              id="link-b"
              role="button"
              href="/blogs"
            >
              Back
            </a>
            <a
              href={`/update/${this.props.match.params.id}`}
              className="btn btn-light btn-sm ml-2"
              id="link-b"
              role="button"
            >
              Edit
            </a>
            <a
              className="btn btn-light btn-sm ml-2"
              id="link-b"
              role="button"
              onClick={() => this.handleClick()}
              href="/"
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
