import React, { useEffect, useState } from 'react'
import TextArea from '../Components/TextArea';
import TextInput from '../Components/TextInput';
import RadioButtonGroup from '../Components/RadioButtonGroup';
import { RegisterTeacher } from './Helper';
const AddTeacherModel = (props) => {
    const [teacher, setTeacherdata] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        error: "",
        college: "",
        hod: "",
        department: "",
        address:"",
        role: "teacher",
        success: false
    });
    useEffect(() => {
        console.log(props);
        setTeacherdata({ ...teacher, college: props?.cid, hod: props?.hid, department: props?.dept })
        console.log(teacher);
    }, [props])
    const { name, email, phone, password, role, gender, address, success, error, department, college, hod } = teacher;
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(teacher);
        RegisterTeacher({ name, email, phone, address, role, password, gender, department, college,hod }).then((data) => {
            console.log(data);
            if (data?.err) {
                console.log(data);
                setTeacherdata({ ...teacher, error: data.err, success: false })
            } else {
                setTeacherdata({
                    ...teacher,
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    gender: "",
                    error: "",
                    role: "teacher",
                    success: true
                })
                console.log(data);
            }
        }).catch((err) => console.log(err))
    }
    const handleChange = (name, event) => {
        //event.preventDefault();
        setTeacherdata({ ...teacher, error: false, [name]: event.target.value })
        console.log(teacher);
    }
    const successMessage = () => {
        return (
            <div className="alert alert-info" style={{ display: success ? "" : "none" }}>
                New teacher added Successfully in {props?.dept} Department
            </div>)
    }
    const errorMessage = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                Unable to add teacher
            </div>)
    }
    return (
        <div class="modal fade" id="addTeacherModal" tabindex="-1" aria-labelledby="addTeacherModalLabel" aria-hidden="true" style={{ width: '100%' }}>
            <div class="modal-dialog add-college-model">
                <div class="modal-content" >
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Teacher in {props?.dept} Department</h5>
                        <button onClick={props.openClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            {successMessage()}
                            {errorMessage()}
                            <TextInput value={name} onChange={e => handleChange("name", e)} placeholder="Name" inputStyle={{ height: '6vh' }} label="Name" name="Name" />

                            <TextInput value={email} onChange={e => handleChange("email", e)} placeholder="Email" inputStyle={{ height: '6vh' }} label="Email" name="Email" />

                            <TextInput value={phone} onChange={e => handleChange("phone", e)} placeholder="Phone" inputStyle={{ height: '6vh' }} label="Phone" name="Phone" />

                            <label htmlFor="gen" style={{ fontSize: '18px' }} className="form-label">Gender</label>
                            <RadioButtonGroup
                                id="gen"
                                name="gender"
                                ops={[
                                    {
                                        value: "male",
                                        label: "Male",
                                    },
                                    {
                                        value: "female",
                                        label: "Female"
                                    }
                                ]}
                                onClick={event => {
                                    setTeacherdata({ ...teacher, gender: event.target.value });
                                }} />

                            <TextInput type="password" value={password} onChange={e => handleChange("password", e)} placeholder="Password" inputStyle={{ height: '6vh' }} label="Password" name="Password" />

                            <TextInput type="password" placeholder="Confirm Password" inputStyle={{ height: '6vh' }} label="Confirm Password" name="Password" />

                            <TextArea value={address} onChange={e => handleChange("address", e)} label="Address" name="Address" />

                            <button onClick={e => onSubmit(e)} style={{ width: '100%', display: 'block', marginBottom: '10px' }} className="btn btn-primary btn-block">
                                Add Teacher
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTeacherModel