import React, { Component } from "react";
import { sendContactEmail } from "../services/contact";

const formStyle = {
  backgroundColor: "whitesmoke",
  borderRadius: "0.5%",
  marginBottom: "5em"
};

const submitStyle = {
  color: "rgb(204, 77, 3)"
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleName(name) {
    this.setState({ name });
  }

  handleEmail(email) {
    this.setState({ email });
  }

  handleMessage(message) {
    this.setState({ message });
  }

  handleSubmit(e) {
    e.preventDefualt();
    sendContactEmail(this.state.name, this.state.email, this.state.message)
      .then(() => {
        // Redirect to the homepage
        // this.props.history.replace("/");
        console.log("ok");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <form className="card d-flex-container w-50 mx-auto mt-3">
        <div
          className="card-body my-3 py-3"
          onSubmit={e => this.handleSubmit(e)}
        >
          <div className="form-group">
            <label style={submitStyle} htmlFor="name">
              Name
            </label>
            <input
              onChange={e => this.handleName(e.target.value)}
              id="name"
              className="form-control"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label style={submitStyle} htmlFor="email">
              Email Address
            </label>
            <input
              onChange={e => this.handleEmail(e.target.value)}
              id="email"
              type="email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label style={submitStyle} htmlFor="email">
              Message
            </label>
            <textarea
              onChange={e => this.handleMessage(e.target.value)}
              cols="30"
              rows="10"
              className="form-control"
            />
          </div>
          <input
            type="submit"
            className="btn btn-light mt-3 justify-content-center"
            style={submitStyle}
          />
        </div>
      </form>
    );
  }
}

export default Contact;
