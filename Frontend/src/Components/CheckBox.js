import React from "react";

function CheckBox(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={props.value}
        id={props.name}
      />
      <label className="form-check-label" htmlFor={props.name}>
        {props.label}
      </label>
    </div>
  );
}

export default CheckBox;
