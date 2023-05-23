import React, { useEffect, useState } from "react";
import ReactHTMLTableToExcel from '../Components/ReactHTMLTableToExcel';
import "./Table.css";
import {Outlet,Link} from 'react-router-dom'
import AkrdiEduComplex from "../Assets/dyp.jpg";
import AddCollegeModal from "./AddCollegeModal";
const CollegesContent = () => {
  return (
    <div>
      <div class="container container-fluid box">
        <img className="head-img" src={AkrdiEduComplex}/>
        {/* <Link to="/ModeratorDashboard/Colleges/AddCollege"><button  class="btn btn-info btn-lg">Add College</button></Link> */}
        <button  class="btn btn-info btn-lg" data-bs-toggle="modal" data-bs-target="#addCollegeModal">Add College</button>
      </div>
      <br />
      <Outlet/>
      <AddCollegeModal/>
      <br/>
    </div>
  );
};

export default CollegesContent;
