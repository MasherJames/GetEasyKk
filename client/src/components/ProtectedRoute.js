import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.loginUser.isAuthenticated
});

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};
export default connect(mapStateToProps)(ProtectedRoute);
