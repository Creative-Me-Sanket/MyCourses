import React from "react";

const DropDown = props => {
  return (
    <select class="form-select" onChange={props.onChange} aria-label="Default select example">
      {
          props.ops.map((itm,index)=>{
              if(index==0){
                  return(
                      <option selected>{itm}</option>
                  )
              }
              return(
                  <option>{itm}</option>
              )
          })
      }
    </select>
  );
};

export default DropDown;
