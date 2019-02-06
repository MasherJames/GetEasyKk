import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="col-md-8 m-auto">
            <p className="lead text-center">Create Your Account</p>

            <form>
              <div className="form-group">
                <label for="email">Email address:</label>
                <input
                  type="email"
                  name="email"
                  className={classnames("form-control", {
                    "is-invalid": errors.email
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <label for="username">Username:</label>
                <input
                  type="username"
                  name="username"
                  className={classnames("form-control", {
                    "is-invalid": errors.username
                  })}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>
              <div className="form-group">
                <label for="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  className={classnames("form-control", {
                    "is-invalid": errors.password
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <div className="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input
                  type="confirmPassword"
                  name="confirmPassword"
                  className={classnames("form-control", {
                    "is-invalid": errors.confirmPassword
                  })}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
