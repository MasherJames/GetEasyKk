import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateRideAction, getRideAction } from "../../actions/ridesActions";
import "./ride.scss";

class UpdateRide extends Component {
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
    const id = this.props.match.params.id;
    this.props.getRideAction(id);
    const { ride } = this.props;
    this.setState({
      origin: ride.origin,
      destination: ride.destination,
      capacity: ride.capacity
    });
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
    const id = this.props.match.params.id;
    console.log(this.props);
    const updatedRide = {
      origin: this.state.origin,
      destination: this.state.destination,
      capacity: this.state.capacity
    };
    console.log("Updated");

    // this.props.updateRideAction(id, updatedRide);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="postride-container">
        <div className="add-ride">
          <h2 className="ride-head">Update Ride</h2>
          <form onSubmit={this.handleSubmit} className="postRideForm">
            <div className="form-group">
              <input
                name="destination"
                type="text"
                value={this.state.destination}
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
                value={this.state.origin}
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
                value={this.state.capacity}
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
              Update Ride
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ride: state.getRide.ride,
  newRide: state.updateRide.ride,
  isUpdating: state.updateRide.isPosting,
  errors: state.updateRide.errors
});

UpdateRide.propTypes = {
  updateRideAction: PropTypes.func.isRequired,
  getRideAction: PropTypes.func.isRequired,
  isUpdating: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  ride: PropTypes.object.isRequired
};

const actions = {
  getRideAction,
  updateRideAction
};

export default connect(
  mapStateToProps,
  actions
)(UpdateRide);
