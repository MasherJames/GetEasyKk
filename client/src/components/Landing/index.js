import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.scss";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header-content">
            <h1 className="header-text">
              <span className="header-text__main">
                This is a car pooling application
              </span>
              <span className="header-text__sub">
                Create an account and offer or get a ride for free
              </span>
            </h1>
            <Link to="/register" className="start-btn btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
