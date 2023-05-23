import React from "react";

function TextArea(props) {
  return (
    <div className={props.className||"mb-3"}>
      <label htmlFor={props.name} className="form-label">
        {props.label}
      </label>
      <textarea
        className="form-control"
        placeholder={props.placeholder||""}
        onChange={props.onChange}
        style={props.style||null}
        id={props.name}
        value={props.value||""}
        rows={props.rows||"3"}
      />
    </div>
  );
}

export default TextArea;
