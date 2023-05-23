import React, { useEffect, useState,useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { getCollege, getHodDetails } from './Helper';
import AdminAdd from '../Assets/admin-add.png'
import AdminCard from '../Components/AdminCard';
import AddAdminModal from './AddAdminModel';
const CollegeAdmins = () => {
    return (
        <div >
            <div style={{ backgroundColor: 'gray', height: '250px' }} className="container">
                <h1>College Admins</h1>
            </div>
            <br/>
            <Outlet/>
        </div>


    )
}

export default CollegeAdmins;