import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../components/layout/Landing";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";

export default class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
