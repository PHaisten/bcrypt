import React, { Component, Fragment } from "react";
import * as userService from "../../services/user";
import { Redirect } from "react-router-dom";
import IndeterminateProgress from "../utilities/indeterminateProgress";
import { Link } from "react-router-dom";

const butStyle = {
  color: "rgb(204, 77, 3)"
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      email: "",
      password: "",
      feedbackMessage: "",
      checkingLogin: true
    };
  }

  componentDidMount() {
    userService.checkLogin().then(loggedIn => {
      if (loggedIn) {
        this.setState({ redirectToReferrer: true, checkingLogin: false });
      } else {
        this.setState({ checkingLogin: false });
      }
    });
  }

  login(e) {
    e.preventDefault();
    userService
      .login(this.state.email, this.state.password)
      .then(() => {
        this.setState({ redirectToReferrer: true });
      })
      .catch(err => {
        if (err.message) {
          this.setState({ feedbackMessage: err.message });
        }
      });
  }

  handleEmailChange(value) {
    this.setState({ email: value });
  }

  handlePasswordChange(value) {
    this.setState({ password: value });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer, checkingLogin } = this.state;

    if (checkingLogin) {
      return <IndeterminateProgress message="Checking Login Status..." />;
    }
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Fragment>
        <form
          onSubmit={e => this.login(e)}
          className="form col-md-6 mx-auto mt-4 py-4 w-50"
          id="form"
        >
          <p>You must be logged in to view this page.</p>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-control"
              type="email"
              onChange={e => this.handleEmailChange(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form-control"
              type="password"
              onChange={e => this.handlePasswordChange(e.target.value)}
              required
            />
          </div>
          {this.state.feedbackMessage ? (
            <p>{this.state.feedbackMessage}</p>
          ) : null}
          <input
            type="submit"
            value="Login"
            className="btn btn-light mt-3 justify-content-center"
            style={butStyle}
          />
          <br />
          <Link
            to="/newuser"
            className="btn btn-light mt-3 justify-content-center"
            style={butStyle}
          >
            Create New User
          </Link>
        </form>
      </Fragment>
    );
  }
}

export default Login;
