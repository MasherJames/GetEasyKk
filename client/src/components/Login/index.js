import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginRequestAction } from "../../actions/loginActions";
import "./login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginRequestAction(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="login">
          <h2 className="login-head">Sing In</h2>
          <Link to="/register" className="lack-account">
            Not a member yet? Sign Up here
          </Link>
          <form onSubmit={this.handleSubmit} className="login-form">
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
            <input type="submit" className="btn" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    loggingIn,
    token,
    errors,
    payload,
    isAuthenticated
  } = state.loginUser;

  return {
    loggingIn,
    token,
    errors,
    payload,
    isAuthenticated
  };
};

Login.propTypes = {
  loginRequestAction: PropTypes.func.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  token: PropTypes.string,
  errors: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

export default connect(
  mapStateToProps,
  { loginRequestAction }
)(Login);
