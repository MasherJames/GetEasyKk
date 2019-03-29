import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRidesAction } from "../../actions/ridesActions";
import Ride from "../Ride";
import "./rides.scss";

class Rides extends Component {
  componentDidMount() {
    this.props.getRidesAction();
  }

  render() {
    const { rides } = this.props;
    console.log(rides);
    return (
      <div className="rides">
        {rides && rides.map(ride => <Ride key={ride._id} ride={ride} />)}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isFetching: state.getRides.isFetching,
  rides: state.getRides.rides,
  error: state.getRides.error
});

Rides.propTypes = {
  getRidesAction: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  rides: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { getRidesAction }
)(Rides);
