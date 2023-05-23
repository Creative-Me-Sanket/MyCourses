import React, { useState, useEffect } from "react";
import { Outlet,Link } from "react-router-dom";
import SideBar from "../Components/Sidebar";
import UserProfile from '../Components/UserProfile';
const StudentDashboard = () => {
  return (
    <div>
        <SideBar/>
      <div className="content content-dashboard">
        <br/>
        <UserProfile/>
        <Outlet/>
      </div>
    </div>
  );
};
export default StudentDashboard;
