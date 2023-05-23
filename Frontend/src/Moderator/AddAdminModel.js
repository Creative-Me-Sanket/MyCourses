import React, { useEffect, useState } from 'react'
import TextArea from '../Components/TextArea';
import TextInput from '../Components/TextInput';
import { Link, } from 'react-router-dom';
import { AddAdminToCollege, DeleteAdmin } from './Helper';
import { Register } from '../Auth/Helper';
import RadioButtonGroup from '../Components/RadioButtonGroup';
import swal from 'sweetalert';
const AddAdminModal = (props) => {
    console.log(props);
    const [admin, setAdmin] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        error: "",
        college: props?.cid,
        department: "",
        role: "admin",
        success: false
    });
    useEffect(() => {
        setAdmin({ ...admin, college: props?.cid })
        console.log(admin);
    }, [props])
    const { name, email, phone, password, role, gender, address, success, error, department, college } = admin;
    const onSubmit = (e) => {
        e.preventDefault();
        setAdmin({ ...admin, error: false });
        console.log(admin);
        Register({ name, email, phone, address, role, password, gender, department, college }).then((data) => {
            console.log(data);
            if (data?.err) {
                setAdmin({ ...admin, error: data.err, success: false })
            } else {
                console.log(data);
                AddAdminToCollege(props.cid, { id: data.id }).then((data2) => {
                    if (data2?.err) {
                        setAdmin({ ...admin, error: data2.error, success: false })
                        DeleteAdmin(data.id).then((res) => {
                            console.log(res);
                        }).catch((err) => console.log(err))
                    } else {
                        setAdmin({
                            ...admin,
                            name: "",
                            email: "",
                            phone: "",
                            password: "",
                            gender: "",
                            error: "",
                            college: props.cid,
                            department: "",
                            role: "admin",
                            success: true
                        })
                        console.log(data2);
                    }
                }).catch((err) => console.log(err))
            }
        }).catch(
            (err) => console.log(err)
        )
    }
    const handleChange = (name, event) => {
        //event.preventDefault();
        setAdmin({ ...admin, error: false, [name]: event.target.value })
        console.log(admin);
    }
    const successMessage = () => {
        return (
            <div className="alert alert-info" style={{ display: success ? "" : "none" }}>
                New admin added Successfully in {props.name}
            </div>)
    }
    const errorMessage = () => {
        return (
            <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                Unable to add Admin
            </div>)
    }
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(admin));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(admin);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = [/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, /^[0]?[6789]\d{9}$/  ];
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex[0].test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.phone) {
            errors.phone = "Phone is required!";
        } else if (!regex[1].test(values.phone)) {
            errors.phone = "This is not a valid phone format!";
        }
        if (!values.gender) {
            errors.gender = "Gender is required!";
        }
        if (!values.department) {
            errors.department = "Department is required!";
        }
        if (!values.address) {
            errors.address = "Address is required";
        } else if (values.address.length > 50) {
            errors.address = "Address cannot exceed more than 50 characters";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        } else if (values.password.length > 15) {
            errors.password = "Password cannot exceed more than 15 characters";
        }
        return errors;
    };
    return (
        <div class="modal fade" id="addAdminModal" tabindex="-1" aria-labelledby="addAdminModalLabel" aria-hidden="true" style={{ width: '100%' }}>
            <div class="modal-dialog add-college-model">
                <div class="modal-content" >
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Head of Department</h5>
                        <button onClick={props.openClose} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            {successMessage()}
                            {errorMessage()}
                            <TextInput value={name} onChange={e => handleChange("name", e)} placeholder="Name" inputStyle={{ height: '6vh' }} label="Name" name="Name"/>
                            {formErrors.name && <p class="ml-0 pl-0 mb-1" style={{color: "red"}}>{formErrors.name}</p>}
                            <TextInput value={email} onChange={e => handleChange("email", e)} placeholder="Email" inputStyle={{ height: '6vh' }} label="Email" name="Email" />
                            {formErrors.email && <p class="ml-0 pl-0 mb-1" style={{color: "red"}}>{formErrors.email}</p>}
                            <TextInput value={phone} onChange={e => handleChange("phone", e)} placeholder="Phone" inputStyle={{ height: '6vh' }} label="Phone" name="Phone" />
                            {formErrors.phone && <p class="ml-0 pl-0 mb-1" style={{color: "red"}}>{formErrors.phone}</p>}
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
                                    setAdmin({ ...admin, gender: event.target.value });
                                }} />
                            {formErrors.gender && <p class="ml-0 pl-0 mb-1" style={{color: "red"}}>{formErrors.gender}</p>}
                            <TextInput type="password" value={password} onChange={e => handleChange("password", e)} placeholder="Password" inputStyle={{ height: '6vh' }} label="Password" name="Password" />
                            {formErrors.password && <p class="ml-0 pl-0 mb-1" style={{color: "red"}}>{formErrors.password}</p>}
                            <TextInput type="password" placeholder="Confirm Password" inputStyle={{ height: '6vh' }} label="Confirm Password" name="Password" />
                            
                            <TextInput value={department} onChange={e => handleChange("department", e)} placeholder="Department" inputStyle={{ height: '6vh' }} label="Department" name="Department" />
                            {formErrors.department && <p class="ml-0 pl-0 mb-1" style={{color: "red"}}>{formErrors.department}</p>}
                            <TextArea value={address} onChange={e => handleChange("address", e)} label="Address" name="Address" />
                            {formErrors.address && <p class="ml-0 pl-0 mb-1" style={{color: "red"}}>{formErrors.address}</p>}
                            <button onClick={e => { onSubmit(e); handleSubmit(e) }} style={{ width: '100%', display: 'block', marginBottom: '10px' }} className="btn btn-primary btn-block">
                                Add Head of Department
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAdminModal