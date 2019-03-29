import React from "react";
import { Link } from "react-router-dom";

const Ride = ({ ride }) => {
  const { origin, destination, date, capacity, _id } = ride;
  return (
    <div className="ride">
      <p>{origin}</p>
      <p>{destination}</p>
      <span>{date}</span>
      <span>{capacity}</span>
      <Link to={`/rides/${_id}`}>update</Link>
      <Link to={`/rides/${_id}`}>Delete</Link>
    </div>
  );
};

export default Ride;
