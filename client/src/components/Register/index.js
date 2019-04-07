import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerRequestAction } from "../../actions/registerActions";
import InputField from "../common/InputField";
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
            <InputField
              name="email"
              placeholder="Email"
              value={this.state.email}
              error={errors.email}
              type="email"
              onChange={this.handleChange}
            />
            <InputField
              name="username"
              placeholder="Username"
              value={this.state.username}
              error={errors.username}
              onChange={this.handleChange}
            />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              error={errors.password}
              onChange={this.handleChange}
            />
            <InputField
              name="confirmPassword"
              type="password"
              placeholder="confirmPassword"
              value={this.state.confirmPassword}
              error={errors.confirmPassword}
              onChange={this.handleChange}
            />
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
