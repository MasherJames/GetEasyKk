import React from "react";
import { Link } from "react-router-dom";

const Ride = ({ ride }) => {
  const { origin, destination, date, capacity, _id } = ride;
  const mod_date = date.match(/(\d{4}-\d{2}-\d{2})/)[0];
  return (
    <Link to={`/rides/${_id}`} className="ride-cont">
      <p>Origin: {origin}</p>
      <p>Destination: {destination}</p>
      <span>Posted: {mod_date}</span>
      <span>Capacity: {capacity}</span>
      <span className="request-link">Request Ride</span>
    </Link>
  );
};

export default Ride;
