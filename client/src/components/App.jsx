import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Blogs from "./Blogs";
import Jumbotron from "./Jumbotron";
import BlogInput from "./BlogInput";
import NavBar from "./NavBar";
import Details from "./Details";
import UpdateBlog from "./UpdateBlog";
import Contact from "./Contact";

import PrivateRoute from "./auth/privateRoute";
import Login from "./auth/login";
import Logout from "./auth/logout";
import AuthButton from "./auth/authButton";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Jumbotron} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/blogs" component={Blogs} />
            <Route path="/contact" component={Contact} />
            <PrivateRoute exact path="/post" component={BlogInput} />
            <Route exact path="/blogs/:id" component={Details} />
            <PrivateRoute exact path="/update/:id" component={UpdateBlog} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
