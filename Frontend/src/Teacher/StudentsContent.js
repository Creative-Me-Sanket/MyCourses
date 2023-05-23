import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import AkrdiEduComplex from "../Assets/dyp.jpg";
import { isAuthenticated } from '../Auth/Helper';
import AddStudentModel from './AddStudentModal';
const StudentsContent = () => {
    const navigate = useNavigate();
    const [teacher, setTeacher] = useState();
    useEffect(() => {
        const data = isAuthenticated();
        setTeacher(data?.user);
        console.log(teacher);
    },[])
    const btnClick = (e) => {
        e.preventDefault()
        navigate('/TeacherDashboard/Students/ViewStudents',{state:{id:0}})
    }
    return (
        <div>
            <div class="container container-fluid box">
                <img className="head-img" src={AkrdiEduComplex} />
                {/* <Link to="/ModeratorDashboard/Colleges/AddCollege"><button  class="btn btn-info btn-lg">Add College</button></Link> */}
                <button class="btn btn-info btn-lg" data-bs-toggle="modal" data-bs-target="#addStudentModal">Add Student</button>
            </div>
            <Outlet/>
            <AddStudentModel cid={teacher?.college} hid={teacher?.hod} dept={teacher?.department} mentor={teacher?.id} openClose={btnClick} />
        </div>
    )
}

export default StudentsContent
