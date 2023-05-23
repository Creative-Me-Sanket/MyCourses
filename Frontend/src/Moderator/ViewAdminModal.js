import React, { useState, useEffect } from 'react'
import { Link, useLocation, } from 'react-router-dom';
import TextArea from '../Components/TextArea';
import TextInput from '../Components/TextInput';
import { AddNewCollege, getHodDetails } from './Helper';
import avtar from "../Assets/avtar.png";
import "../Components/Modal.css"

const ViewAdminModal = () => {
    const location = useLocation();
    console.log(location.state);
    const [admin, setAdmin] = useState({
        role: "admin",
        name: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        error: "",
        address: "",
        department: "",
        success: false
    });
    useEffect(() => {
        const { name, email, phone, gender, department, address, college, role } = location.state;
        setAdmin({ ...admin, name: name, email: email, phone: phone, gender: gender, department: department, address: address, college: college, role: role });
    }, [])
    const { name, email, phone, password, role, gender, address, department, success, error } = admin;
    return (
        <div class="modal" id="viewAdminModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: '100%' }}>
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content" style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                    <div class="modal-body">
                        <div className="bg-white bootstrap snippets bootdey p-3" style={{ borderRadius: "15px", width: "100%" }}>
                            <div class="row">
                                <div class="profile-nav col-md-3">
                                    <div class="panel">
                                        <div class="user-heading round" style={{ height: "36vh" }}>
                                            <a href="#">
                                                <img src={avtar} alt="Avtar" />
                                            </a>
                                            <h1>{name}</h1>
                                            <p>{role}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="profile-info col-md-9">
                                    <div class="panel">
                                        <div class="bio-graph-heading">
                                            Welcome to MY COURSES @ AKURDI, name
                                        </div>
                                        <div class="panel-body bio-graph-info">
                                            <div class="row mt-2">
                                                <div class="bio-row">
                                                    <p><span>Name </span>: {name}</p>
                                                </div>
                                                <div class="bio-row">
                                                    <p><span>Email </span>: {email}</p>
                                                </div>
                                                <div class="bio-row">
                                                    <p><span>Phone </span>: {phone}</p>
                                                </div>
                                                <div class="bio-row">
                                                    <p><span>Department</span>: {department}</p>
                                                </div>
                                                <div class="bio-row">
                                                    <p><span>Adress</span>: {address}</p>
                                                </div>
                                                <div class="bio-row">
                                                    <p><span>Gender </span>: {gender}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAdminModal