import React, { useEffect, useState } from 'react'
import RadioButtonGroup from './RadioButtonGroup'
import TextInput from './TextInput'
import TextArea from './TextArea'
import Button from './Button'
import Avtar from '../Assets/avtar.png';
import './UserProfile.css'
import { isAuthenticated } from '../Auth/Helper'
const UserProfile = (props) => {
    const [user, setUser] = useState();
    useEffect(() => {
        const data = isAuthenticated();
        if (data != undefined) {
            setUser(data.user)
            console.log(data);
        } else {
            return false;
        }
    }, [])
    return (
        <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: '100%' }}>
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content" style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                    <div class="modal-body">
                        <div class="wrapper">
                            <div class="left">
                                <div className="center-avtar-img">
                                    <img src={Avtar} style={{ borderRadius: '50px' }}
                                        alt="user" width="100" />
                                </div>
                                <h4>{user?.name}</h4>
                                <p>{user?.role}</p>
                            </div>
                            <div class="right container">
                                <div class="info">
                                    <h3>User Profile</h3>
                                </div>
                                <div className="row">
                                    <TextInput name="name" value={user?.name} placeholder="Name" label="Full Name" />
                                </div>
                                <div className="row">
                                    <TextInput name="email" value={user?.email} placeholder="Email" label="Email" />
                                </div>
                                <div className="row">
                                    <TextInput name="phone" value={user?.phone} placeholder="Phone" label="Phone" />
                                </div>
                                <div className="row mb-2">
                                    <label htmlFor="gen" style={{ fontSize: '18px' }} className="form-label">Gender</label>
                                    {user?.gender === "male" ?
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

                                </div>
                                <div className="row">
                                    <div className={"input-group mb-3"}>
                                        <label htmlFor={'dob'} style={{ fontSize: '18px' }} className="form-label">Date of Birth</label>
                                        <input id="dob" value={user?.dob} type={"date"} placeholder={"Date of Birth"} className="form-control" />
                                    </div>
                                </div>
                                <button className="btn btn-success  btn-block">Update</button>
                                <button data-bs-dismiss="modal" className="btn btn-danger  btn-block">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile