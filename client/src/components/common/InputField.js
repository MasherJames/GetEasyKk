import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputField = ({
  name,
  placeholder,
  value,
  error,
  type,
  handleChange
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
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
  handleChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
  type: "text"
};

export default InputField;
