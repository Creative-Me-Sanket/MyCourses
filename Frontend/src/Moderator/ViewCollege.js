import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllColleges } from './Helper';

const ViewCollege = () => {
    const navigate = useNavigate();
    const [colleges, setColleges] = useState();
    useEffect(() => {
        getAllColleges()
            .then((data) => {
                setColleges(data.list)
            })
            .catch((err) => console.log(err))
    }, [])
    const openCollegeDetails = (e, id) => {
        e.preventDefault();
        navigate('/ModeratorDashboard/Admins/ViewAdmins',{state:id})
    }
    return (
        <div className="container">
            {colleges?.map((value, index) => {
                return (
                    <div onClick={(e) =>{openCollegeDetails(e,value._id)}}>
                        <div className="card college-cards" key={index}>
                            <div class="card-body">
                                <h6>{value.name}</h6>
                            </div>
                        </div>
                        <br></br>
                    </div>
                )
            })

            }
        </div>
    )
}

export default ViewCollege