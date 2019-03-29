import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postRideRequestAction } from "../../actions/postRideActions";
import "./ride.scss";

class PostRide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      destination: "",
      capacity: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/");
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

    const newRide = {
      origin: this.state.origin,
      destination: this.state.destination,
      capacity: this.state.capacity
    };

    this.props.postRideRequestAction(newRide);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="postride-container">
        <div className="add-ride">
          <h2 className="ride-head">Create Ride</h2>
          <form onSubmit={this.handleSubmit} className="postRideForm">
            <div className="form-group">
              <input
                name="destination"
                type="text"
                value={this.props.destination}
                placeholder="Destination"
                onChange={this.handleChange}
                className={classnames("ridefields", {
                  "invalid-input": errors.destination
                })}
              />
              {errors.destination && (
                <div className="error">{errors.destination}</div>
              )}
            </div>
            <div className="form-group">
              <input
                name="origin"
                type="text"
                value={this.props.origin}
                placeholder="origin"
                onChange={this.handleChange}
                className={classnames("ridefields", {
                  "invalid-input": errors.origin
                })}
              />
              {errors.origin && <div className="error">{errors.origin}</div>}
            </div>
            <div className="form-group">
              <input
                name="capacity"
                type="number"
                value={this.props.capacity}
                placeholder="capacity"
                onChange={this.handleChange}
                className={classnames("ridefields", {
                  "invalid-input": errors.capacity
                })}
              />
              {errors.capacity && (
                <div className="error">{errors.capacity}</div>
              )}
            </div>
            <button type="submit" className="btn">
              Add Ride
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ride: state.postRide.ride,
  isPosting: state.postRide.isPosting,
  errors: state.postRide.errors,
  isAuthenticated: state.loginUser.isAuthenticated
});

PostRide.propTypes = {
  postRideRequestAction: PropTypes.func.isRequired,
  isPosting: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { postRideRequestAction }
)(PostRide);
