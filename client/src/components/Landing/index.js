import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./landing.scss";

class Landing extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="landing">
        <div className="landing-cont">
          <h1 className="landing-main">App For Sharing Rides To Work</h1>
          <h3 className="landing-sub">Connect With your colleagues easily</h3>
          <Link to="/register" className="register-landing">
            Get Started
          </Link>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.loginUser.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
