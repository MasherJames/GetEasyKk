import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getRideAction } from "../../actions/ridesActions";
import { deleteRideAction } from "../../actions/ridesActions";

import "./ride.scss";

class GetRide extends Component {
  componentDidMount() {
    const id = this.props.match.params._id;
    this.props.getRideAction(id);
  }

  handleClick = e => {
    const id = this.props.match.params._id;
    this.props.deleteRideAction(id);
  };

  render() {
    const { ride } = this.props;

    return (
      <div className="single-ride">
        <div className="ride-card">
          <span className="date">Departure: {ride.date}</span>
          <p>Origin: {ride.origin}</p>
          <p>Destination: {ride.origin}</p>
          <p>Capacity: {ride.capacity}</p>
          <Link className="s-link edit" to={`/rides/${ride._id}/edit`}>
            Edit
          </Link>
          <button onClick={this.handleClick} className="s-link delete">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

GetRide.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  ride: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isFetching: state.getRide.isFetching,
  error: state.getRide.error,
  ride: state.getRide.ride
});

const actions = {
  getRideAction,
  deleteRideAction
};

export default connect(
  mapStateToProps,
  actions
)(GetRide);
