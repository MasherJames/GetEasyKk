import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerRequestAction } from "../../actions/registerActions";
import "./register.scss";

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

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="register">
          <h2 className="register-head">Sign Up</h2>
          <Link to="/login" className="have-account">
            Already have an account ?
          </Link>
          <form onSubmit={this.handleSubmit} className="register-form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                className={classnames("inputs", {
                  "invalid-input": errors.email
                })}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <input
                type="username"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
                className={classnames("inputs", {
                  "invalid-input": errors.username
                })}
              />
              {errors.username && (
                <div className="error">{errors.username}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                className={classnames("inputs", {
                  "invalid-input": errors.password
                })}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                className={classnames("inputs", {
                  "invalid-input": errors.confirmPassword
                })}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </div>
            <button type="submit" className="btn">
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.registerUser.errors,
  success: state.registerUser.success,
  payload: state.registerUser.payload,
  signingUp: state.registerUser.signingUp,
  isAuthenticated: state.loginUser.isAuthenticated
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
