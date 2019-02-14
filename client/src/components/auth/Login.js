import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginRequestAction } from "../../actions/loginActions";
import { isLoggedIn } from "../../utils/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
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
      <div>
        <div className="container">
          <div className="col-md-8 m-auto">
            <p className="lead text-center">Login To Your Account</p>
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
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loggingIn, token, errors, payload } = state.loginUser;

  return {
    loggingIn,
    token,
    errors,
    payload
  };
};

Login.propTypes = {
  loginRequestAction: PropTypes.func.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  token: PropTypes.string,
  errors: PropTypes.object
};

export default connect(
  mapStateToProps,
  { loginRequestAction }
)(Login);
