import React from "react";

const Switch = props => {
  return (
    <div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id={props.name}
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor={props.name}>
          {props.label}
        </label>
      </div>
    </div>
  );
};

export default Switch;
