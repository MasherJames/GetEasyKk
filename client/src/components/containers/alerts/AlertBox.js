import React from "react";
import PropTypes from "prop-types";
import "./alert.css";

const AlertBox = ({ theme, message }) => {
  return (
    <div className={`alert alert-${theme}`}>
      <p>{message}</p>
    </div>
  );
};

AlertBox.PropTypes = {
  theme: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default AlertBox;
