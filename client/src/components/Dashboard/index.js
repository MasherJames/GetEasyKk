import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rides from "../Rides";
import "./dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="user-container">
        <div className="side-container">
          <Link to="/addride" className="side-link">
            Add Ride
          </Link>
          <Link to="" className="side-link">
            Requests
          </Link>
        </div>
        <div className="rides-container">
          <Rides />
        </div>
      </div>
    );
  }
}
export default Dashboard;
