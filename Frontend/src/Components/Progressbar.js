import React from "react";
const Progressbar = props => {
  return (
    <div class="progress" style={{height:'15px',borderRadius: '10px'}}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{width: props.progress+"%"}}
        aria-valuenow={props.progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {props.progress}
      </div>
    </div>
  );
};
export default Progressbar;
