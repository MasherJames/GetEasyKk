import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/ProtectedRoute";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import NavBar from "../components/Nav";
import Register from "../components/Register";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import PostRide from "../components/Ride/PostRide";
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
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/addride" component={PostRide} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
