import React, { useEffect, useState } from 'react'
import { Link, useLocation, } from 'react-router-dom';
import TextArea from '../Components/TextArea';
import TextInput from '../Components/TextInput';
import RadioButtonGroup from '../Components/RadioButtonGroup';
import './ViewStudentDetails.css';


const ViewStudentDetails = () => {
    const location = useLocation();
    console.log(location.state);
    const [student, setStudent] = useState({
        role:"",
        name: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        error: "",
        address: "",
        department: "",
        dob: "",
        success: false
    });
    useEffect(() => {
        const { role,name, email, phone, gender, address, department, dob } = location.state;
        setStudent({ ...student, role: role,name: name, email: email, phone: phone, gender: gender, address: address, department:department, dob:dob });
    }, [])
    const { name, email, phone, password, role, gender, address,department, success, error, dob } = student;

    return (
        <React.Fragment>

        <div className="container bootstrap snippets bootdey">
        <div className="row">
        <div className="profile-nav col-md-3">
            <div className="panel">
                <div className="user-heading round">
                    <a href="#">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                    </a>
                    <h1>{name}</h1>
                    <p>{role}</p>
                </div>
            </div>
        </div>
        <div className="profile-info col-md-9">
            <div className="panel">
                <div className="bio-graph-heading">
                    Welcome to MY COURSES @ AKURDI
                </div>
                <div className="panel-body bio-graph-info">
                    <div className="row mt-2">
                        <div className="bio-row">
                            <p><span>Name </span>:{name}</p>
                        </div>
                        
                        <div className="bio-row">
                            <p><span>Phone </span>: {phone}</p>
                        </div>
                        <div className="bio-row">
                            <p><span>Email </span>:{email}</p>
                        </div>
                        <div className="bio-row">
                        <p><span>Department </span>: {department}</p>
                    </div>
                        <div className="bio-row">
                            <p><span>Address</span>: {address}</p>
                        </div>
                       
                        <div className="bio-row">
                            <p><span>Gender </span>: {gender}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </React.Fragment>
    );
};
export default ViewStudentDetails;
