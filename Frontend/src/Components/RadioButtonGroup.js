import React,{useState} from "react";

const RadioButtonGroup = props => {
  return (
    <div style={props.style}>
      {props.ops.map((prop,index) => {
        return (
          <div style={{marginRight:'10vh'}} className="form-check form-check-inline" key={index}>
            {prop.checked?
                <input
                className="form-check-input"
                type="radio"
                name={props.name}
                id={prop.value}
                value={prop.value}
                onClick={props.onClick}
                defaultChecked={true}
                checked/>
            :
              <input
              className="form-check-input"
              type="radio"
              name={props.name}
              id={prop.value}
              value={prop.value}
              onClick={props.onClick}
            />
            }
            
            <label className="form-check-label" htmlFor={prop.value}>
              {prop.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtonGroup;
