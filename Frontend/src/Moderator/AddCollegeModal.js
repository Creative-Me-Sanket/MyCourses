import React, { useState } from 'react'
import TextArea from '../Components/TextArea';
import TextInput from '../Components/TextInput';
import { Link, } from 'react-router-dom';
import { AddNewCollege } from './Helper';
const AddCollegeModal = () => {
    const [college, setCollege] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        error: "",
        success: false,
    });
    const { name, email, phone, address, success, error } = college;
    const onSubmit = (e) => {
        e.preventDefault();
        setCollege({ ...college, error: false });
        AddNewCollege({ name, email, phone, address }).then((data) => {
            console.log(data);
            if (data?.err?.errors) {
                setCollege({ ...college, error: data.err.errors, success: false })
            } else {
                setCollege({
                    ...college,
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    error: "",
                    success: true
                })
                //console.log(data);
            }
        }).catch(
            (err) => console.log(err)
        )
    }
    const handleChange = (name, event) => {
        //event.preventDefault();
        setCollege({ ...college, error: false, [name]: event.target.value })
        console.log(college);
    }
    const successMessage = () => {
        return (
            <div className="alert alert-info" style={{ display: success ? "" : "none" }}>
                College Added Successfully
            </div>)
    }
    const errorMessage = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                Unable to add college
            </div>)
    }
    return (
        <div class="modal fade" id="addCollegeModal" tabindex="-1" aria-labelledby="addCollegeModalLabel" aria-hidden="true"  style={{ width: '100%' }}>
            <div class="modal-dialog add-college-model">
                <div class="modal-content" >
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add College</h5>
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div class="modal-body">
                    <form>
                        {successMessage()}
                        {errorMessage()}
                        <TextInput value={name} onChange={e => handleChange("name", e)} placeholder="Name" inputStyle={{ height: '6vh' }} label="Name" name="Name" />
                        
                        <TextInput value={email} onChange={e => handleChange("email", e)} placeholder="Email" inputStyle={{ height: '6vh' }} label="Email" name="Email" />
                        
                        <TextInput value={phone} onChange={e => handleChange("phone", e)} placeholder="Phone" inputStyle={{ height: '6vh' }} label="Phone" name="Phone" />
                        
                        <TextArea value={address} onChange={e => handleChange("address", e)} label="Address" name="Address" />
                        
                        <button onClick={e => onSubmit(e)} style={{ width: '100%', display: 'block', marginBottom: '10px' }} className="btn btn-primary btn-block">
                            Add College
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCollegeModal