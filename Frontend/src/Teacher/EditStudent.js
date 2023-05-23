import React, { useEffect, useState } from 'react'
import TextArea from '../Components/TextArea';
import TextInput from '../Components/TextInput';
import { Link, useLocation, } from 'react-router-dom';
import RadioButtonGroup from '../Components/RadioButtonGroup';
import { UpdateStudent } from './Helper';
const EditStudent = () => {
    const location = useLocation();
    console.log(location.state);
    const [student, setStudent] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        error: "",
        address: "",
        success: false
    });
    useEffect(() => {
        const { name, email, phone, gender, address } = location.state;
        setStudent({ ...student, name: name, email: email, phone: phone, gender: gender, address: address });
    }, [])
    const { name, email, phone, password, role, gender, address, success, error } = student;
    const onSubmit = (e) => {
        e.preventDefault();
        setStudent({ ...student, error: false });
        console.log(student);
        //Update Code
        UpdateStudent(location.state._id, student).then((data) => {
            if (data?.error) {
                setStudent({ ...student, error: data.error, success: false })
            } else {
                setStudent({
                    ...student,
                    error: "",
                    success: true
                })
                console.log(data);
            }
        }).catch((err) => console.log(err))
    }
    const handleChange = (name, event) => {
        setStudent({ ...student, error: false, [name]: event.target.value })
        console.log(student);
    }
    const successMessage = () => {
        return (
            <div className="alert alert-info" style={{ display: success ? "" : "none" }}>
                student updated successfully
            </div>)
    }
    const errorMessage = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                Unable to update student
            </div>)
    }
    return (
        <div className="container">
            <div class="row align-items-center">
                <div class="row justify-content-center">
                    <div class="col-6">
                        <form>
                            {successMessage()}
                            {errorMessage()}
                            <TextInput value={name} onChange={e => handleChange("name", e)} placeholder="Name" inputStyle={{ height: '6vh' }} label="Name" name="Name" />

                            <TextInput value={email} onChange={e => handleChange("email", e)} placeholder="Email" inputStyle={{ height: '6vh' }} label="Email" name="Email" />

                            <TextInput value={phone} onChange={e => handleChange("phone", e)} placeholder="Phone" inputStyle={{ height: '6vh' }} label="Phone" name="Phone" />

                            <label htmlFor="gen" style={{ fontSize: '18px' }} className="form-label">Gender</label>

                            {student?.gender === "male" ?
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

                            <TextInput type="password" value={password} onChange={e => handleChange("password", e)} placeholder="Password" inputStyle={{ height: '6vh' }} label="Password" name="Password" />

                            <TextInput type="password" placeholder="Confirm Password" inputStyle={{ height: '6vh' }} label="Confirm Password" name="Password" />

                            <TextArea value={address} onChange={e => handleChange("address", e)} label="Address" name="Address" />

                            <button onClick={e => onSubmit(e)} style={{ width: '100%', display: 'block', marginBottom: '10px' }} className="btn btn-primary btn-block">
                                Update student's Detail
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

export default EditStudent