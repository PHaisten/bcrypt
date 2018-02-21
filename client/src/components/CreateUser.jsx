import React, { Component } from "react";
import { render } from "react-dom";

const formStyle = {
  marginBottom: "5em"
};

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
  }
  handleInputChange1(value) {
    this.setState({
      user: {
        name: value,
        email: this.state.user.email,
        password: this.state.user.password
      }
    });
  }
  handleInputChange2(value) {
    this.setState({
      user: {
        name: this.state.user.name,
        email: value,
        password: this.state.user.password
      }
    });
  }

  handleInputChange3(value) {
    this.setState({
      user: {
        name: this.state.user.name,
        email: this.state.user.email,
        password: value
      }
    });
  }
  handleClick() {
    console.log("about to create user");
    fetch("http://localhost:3000/api/users/", {
      method: "post",
      body: JSON.stringify({
        name: this.state.user.name,
        email: this.state.user.email,
        password: this.state.user.password
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
      });
    console.log(this.state);
  }
  render() {
    return (
      <form
        className="form col-md-6 mx-auto mt-4 py-4 w-50"
        style={formStyle}
        id="form"
      >
        <h2 id="post-h">Create a User Profile</h2>
        <input
          type="text"
          className="form-control mt-4"
          id="input-field"
          type="text"
          onChange={event => this.handleInputChange1(event.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          className="form-control mt-4"
          id="input-field1"
          type="email"
          placeholder="Email"
          onChange={event => this.handleInputChange2(event.target.value)}
        />
        <input
          type="text"
          className="form-control mt-4"
          id="input-field2"
          type="password"
          onChange={event => this.handleInputChange3(event.target.value)}
          placeholder="Password"
        />
        <button
          type="button"
          className="btn btn-light mt-3 justify-content-center"
          id="post-b"
          onClick={() => this.handleClick()}
        >
          Create New User
        </button>
      </form>
    );
  }
}
