import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const Input = ({ name, label, type, placeholder, value, onChange, error }) => {
  return (
    <div className={classnames("input", { "input--invalid": error })}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="input--danger">{error}</div>}
    </div>
  );
};

Input.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  error: propTypes.string
};

Input.defaultProps = {
  type: "text"
};

export default Input;
