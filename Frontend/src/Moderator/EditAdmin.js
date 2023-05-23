import React, { useEffect, useState } from 'react'
import TextArea from '../Components/TextArea';
import TextInput from '../Components/TextInput';
import { Link, useLocation, } from 'react-router-dom';
import { AddAdminToCollege, DeleteAdmin, UpdateAdmin } from './Helper';
import { Register } from '../Auth/Helper';
import headerImg from '../Assets/dashboard_bg.svg'
import RadioButtonGroup from '../Components/RadioButtonGroup';
import wave from "../Assets/wave.svg"
const EditAdmin = () => {
    const location = useLocation();
    console.log(location.state);
    const [admin, setAdmin] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        error: "",
        college: "",
        department: "",
        address:"",
        role: "admin",
        success: false
    });
    useEffect(()=>{
        const {name,email,phone,gender,department,address,college,role} = location.state;
        setAdmin({...admin,name:name,email:email,phone:phone,gender:gender,department:department,address:address,college:college,role:role});
    },[])
    const { name, email, phone, password, role, gender, address, success, error, department, college } = admin;
    const onSubmit = (e) => {
        e.preventDefault();
        setAdmin({ ...admin, error: false });
        console.log(admin);
        //Update Code
        UpdateAdmin(location.state._id,admin).then((data)=>{
            if (data?.error) {
                setAdmin({ ...admin, error: data.error, success: false })
            } else {
                setAdmin({
                    ...admin,
                    error: "",
                    success: true
                })
                console.log(data);
            }
        }).catch((err)=>console.log(err))
    }
    const handleChange = (name, event) => {
        //event.preventDefault();
        setAdmin({ ...admin, error: false, [name]: event.target.value })
        console.log(admin);
    }
    const successMessage = () => {
        return (
            <div className="alert alert-info" style={{ display: success ? "" : "none" }}>
                Admin updated successfully
            </div>)
    }
    const errorMessage = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                Unable to update Admin
            </div>)
    }
    
    const myStyle = {
        background: 'linear-gradient(to bottom, rgba(100, 105, 156, 0.63), rgba(56, 64, 70, 0.9)),url(http://edulearn-lms-admin-template.multipurposethemes.com/images/auth-bg/bg-16.jpg)',
        backgroundRepeat: 'no-repeat', 
        backgroundPosition : 'fixed',
        backgroundSize: 'cover',
    }
    return (
        <div className="container" style={myStyle}>
            <div className="row align-items-center">
                <div className="row justify-content-center">
                    <div className="col-6 p-3" style={{overflow: 'hidden', boxShadow: "inset 0px 2px 5px 0px rgba(128,192,255,0.9)", borderRadius: "15px"}}>
                        <form style = {{borderRadius: "12px"}}>
                            {successMessage()}
                            {errorMessage()}
                            <div class="m-auto"><img src={headerImg} alt=""/></div>
                            <TextInput value={name} onChange={e => handleChange("name", e)} placeholder="Name" inputStyle={{ height: '6vh', borderRadius: "50px", background: "#e6e6e6", borderColor: "#e6e6e6" }} label="Name" name="Name" />

                            <TextInput value={email} onChange={e => handleChange("email", e)} placeholder="Email" inputStyle={{ height: '6vh', borderRadius: "50px", background: "#e6e6e6", borderColor: "#e6e6e6" }} label="Email" name="Email" />

                            <TextInput value={phone} onChange={e => handleChange("phone", e)} placeholder="Phone" inputStyle={{ height: '6vh', borderRadius: "50px", background: "#e6e6e6", borderColor: "#e6e6e6" }} label="Phone" name="Phone" />

                            <label htmlFor="gen" style={{ fontSize: '18px' }} className="form-label">Gender</label>
                            
                            {admin?.gender === "male" ?
                                        <RadioButtonGroup
                                            id="gen"
                                            name="gender"
                                            ops={[
                                                {
                                                    value: "male",
                                                    label: "Male",
                                                    checked: true
                                                },
                                                {
                                                    value: "female",
                                                    label: "Female"
                                                }
                                            ]}
                                        // onClick={event => {
                                        // setUser({ ...user, gender: event.target.value });
                                        // }}
                                        />
                                        :
                                        <RadioButtonGroup
                                            id="gen"
                                            name="gender"
                                            ops={[
                                                {
                                                    value: "male",
                                                    label: "Male"
                                                },
                                                {
                                                    value: "female",
                                                    label: "Female",
                                                    checked: true
                                                }
                                            ]}
                                        // onClick={event => {
                                        // setUser({ ...user, gender: event.target.value });
                                        // }}
                                        />
                                    }

                            <TextInput type="password" value={password} onChange={e => handleChange("password", e)} placeholder="Password" inputStyle={{ height: '6vh', borderRadius: "50px", background: "#e6e6e6", borderColor: "#e6e6e6"  }} label="Password" name="Password" />

                            <TextInput type="password" placeholder="Confirm Password" inputStyle={{ height: '6vh', borderRadius: "50px", background: "#e6e6e6", borderColor: "#e6e6e6" }} label="Confirm Password" name="Password" />

                            <TextInput value={department} onChange={e => handleChange("department", e)} placeholder="Department" inputStyle={{ height: '6vh', borderRadius: "50px", background: "#e6e6e6", borderColor: "#e6e6e6" }} label="Department" name="Department" />

                            <TextArea value={address} onChange={e => handleChange("address", e)} style={{ height: '6vh', borderRadius: "50px", background: "#e6e6e6", borderColor: "#e6e6e6" }} label="Address" name="Address" />

                            <button onClick={e => onSubmit(e)} style={{ width: '100%', display: 'block', marginBottom: '10px' }} className="btn btn-primary btn-block">
                                Update Head of Department
                            </button>
                        </form>
                    </div>
                </div>
                <div class="col">
                </div>
            </div>
        </div>


    )
}

export default EditAdmin