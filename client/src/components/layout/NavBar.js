import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/loginActions";

class NavBar extends Component {
  onClickLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.loginUser;

    const guestLinks = (
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
      </ul>
    );

    const authenticatedUserLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            href=""
            onClick={this.onClickLogout.bind(this)}
            className="nav-link"
          >
            Logout
          </a>
        </li>
      </ul>
    );
    return (
      <nav className="header-nav navbar navbar-expand-sm bg-light bg-dark ">
        <div className="container">
          <Link to="/" className="nav-header  nav-link">
            Ride My Way
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/rides">
                  {" "}
                  Rides
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authenticatedUserLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.PropTypes = {
  logoutUser: PropTypes.func.isRequired,
  loginUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  loginUser: state.loginUser
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavBar);
