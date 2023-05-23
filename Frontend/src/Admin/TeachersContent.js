import React, { useEffect, useState } from "react";
import ReactHTMLTableToExcel from '../Components/ReactHTMLTableToExcel';
import "./Table.css";
import Admins from "../Assets/Teachers4.jpg"
import { Outlet } from "react-router-dom";
const TeachersContent = () => {
  return (
    <div>
      <div class="container container-fluid box">
        {/* <img className="head-img" src={Admins} style={{width:'100%'}}/> */}
        {/* <button data-bs-toggle="modal" data-bs-target="#addTeacherModal" class="btn btn-info btn-lg">Add Teacher</button> */}
      </div>
      <br />
      <Outlet/>
    </div>
  );
}

export default TeachersContent
