import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="header-nav navbar navbar-expand-sm bg-light bg-dark ">
          <h2 class="nav-header">Ride My Way</h2>
          <ul className="header-nav__list-items navbar-nav ml-4">
            <li className="list-item nav-item">
              <Link to="/register" className="list-item__link nav-link">
                Sign Up
              </Link>
            </li>
            <li className="list-item nav-item">
              <Link to="/login" className="list-item__link nav-link">
                Login
              </Link>
            </li>
            <li className="list-item nav-item">
              <Link to="/rides" className="list-item__link nav-link">
                View Rides
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
