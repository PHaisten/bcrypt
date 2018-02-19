import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class SingleBlog extends Component {
  render() {
    let blogList = this.props.list.map((blog, index) => {
      return (
        <div className="card d-flex-container w-50 mx-auto mt-3" key={index}>
          <div className="card-body my-3 py-3">
            <h5 className="ml-2" id="content">
              {blog.title}
            </h5>
            <p className="text-center" id="content">
              {blog.content}
            </p>
            <p className="text-center" id="content">
              {blog._created}
            </p>
            <Link
              to={`/blogs/${blog.id}`}
              className="btn btn-light btn-sm ml-2"
              role="button"
              id="link-b"
            >
              Details
            </Link>
          </div>
        </div>
      );
    });
    return <div>{blogList}</div>;
  }
}

export default SingleBlog;
