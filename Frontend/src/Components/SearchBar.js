import React from "react";

const SearchBar = props => {
  return (
    <div class="container" style={props.style}>
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-8">
          <div class="search">
            {" "}<i class="fa fa-search" />{" "}
            <input
              type="text"
              class="form-control"
              placeholder={props.placeholder||"Course Name"}
            />{" "}
            <button class="btn btn-primary">Search</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
