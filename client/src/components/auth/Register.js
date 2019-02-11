import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerRequestAction } from "../../actions/registerActions";

class Register extends Component {
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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    this.props.registerRequestAction(newUser);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="container">
          <div className="col-md-8 m-auto">
            <p className="lead text-center">Create Your Account</p>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.props.email}
                  onChange={this.handleChange}
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="username"
                  name="username"
                  placeholder="Username"
                  value={this.props.username}
                  onChange={this.handleChange}
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.username
                  })}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.props.password}
                  onChange={this.handleChange}
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  value={this.props.confirmPassword}
                  onChange={this.handleChange}
                  className={classnames("form-control form-control-lg", {
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

const mapStateToProps = state => ({
  errors: state.registerUser.errors,
  success: state.registerUser.success,
  payload: state.registerUser.payload,
  signingUp: state.registerUser.signingUp
});

Register.propTypes = {
  registerRequestAction: PropTypes.func.isRequired,
  signingUp: PropTypes.bool.isRequired,
  success: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { registerRequestAction }
)(Register);
