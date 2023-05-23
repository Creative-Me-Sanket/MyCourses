import React, { useState, useEffect } from "react";
import { Outlet,Link } from "react-router-dom";
import SideBar from "../Components/Sidebar";
const AdminDashboard = () => {
  return (
    <div>
        <SideBar/>
      <div className="content content-dashboard">
        <br/>
        <Outlet/>
      </div>
    </div>
  );
};
export default AdminDashboard;
