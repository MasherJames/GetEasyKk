import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Landing from "../components/layout/Landing";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import history from "../history";

export default class AppRoutes extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
