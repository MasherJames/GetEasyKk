import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "../Register/register.scss";

const InputField = ({ name, placeholder, value, error, type, onChange }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classnames("inputs", {
          "invalid-input": error
        })}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
  type: "text"
};

export default InputField;
