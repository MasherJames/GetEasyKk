import React from "react";
import { Link } from "react-router-dom";
import Delete from "../../assets/icons/rubbish-bin.svg";
import Update from "../../assets/icons/pencil.svg";

const Ride = ({ ride }) => {
  const { origin, destination, date, capacity, _id } = ride;
  const mod_date = date.match(/(\d{4}-\d{2}-\d{2})/)[0];
  return (
    <div className="ride-cont">
      <p>Origin: {origin}</p>
      <p>Destination: {destination}</p>
      <span>Posted: {mod_date}</span>
      <span>Capacity: {capacity}</span>
      <span className="ride-links">
        <Link className="ride-link" to={`/rides/${_id}`}>
          <img className="update-icon" src={Update} alt="Update" />
        </Link>
        <Link className="ride-link" to={`/rides/${_id}`}>
          <img className="delete-icon" src={Delete} alt="Delete" />
        </Link>
      </span>
    </div>
  );
};

export default Ride;
