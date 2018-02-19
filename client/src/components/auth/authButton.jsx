import React from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../services/user";

const butStyle = {
  color: "rgb(204, 77, 3)"
};

const AuthButton = props => {
  if (isLoggedIn()) {
    return (
      <Link className="nav-item nav-link p-2" style={butStyle} to="/logout">
        Logout
      </Link>
    );
  } else {
    return (
      <Link className="nav-item nav-link p-2" style={butStyle} to="/login">
        Login
      </Link>
    );
  }
};

export default AuthButton;
