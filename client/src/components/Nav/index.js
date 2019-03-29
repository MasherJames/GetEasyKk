import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/loginActions";
import "./nav.scss";

class NavBar extends Component {
  onClickLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
    window.location.href = "/login";
  };

  render() {
    const { isAuthenticated } = this.props.loginUser;
    const isAuth = (
      <div className="side-links">
        <a onClick={this.onClickLogout.bind(this)} className="nav-link logout">
          Logout
        </a>
        <Link to="/rides" className="nav-link ride">
          Rides
        </Link>
      </div>
    );

    const notAuth = (
      <div className="side-links">
        <Link to="/rides" className="nav-link ride">
          Rides
        </Link>
        <Link to="/register" className="nav-link register">
          Register
        </Link>
        <Link to="/login" className="nav-link login">
          Login
        </Link>
      </div>
    );
    return (
      <div className="main-nav">
        <div className="root-link">
          <Link to="/" className="main-link">
            Ride My Way
          </Link>
        </div>
        {isAuthenticated ? isAuth : notAuth}
      </div>
    );
  }
}

NavBar.propTypes = {
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
