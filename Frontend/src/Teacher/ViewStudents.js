import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../Auth/Helper';

import 'reactjs-popup/dist/index.css';
import { DeleteStudent, GetStudentsByTeacher } from './Helper';
import ViewStudentDetails from './ViewStudentDetails';
const ViewStudents = () => {
    const naviagte = useNavigate();
    const location = useLocation();
    const [teacher, setTeacher] = useState();
    const [students,setStudents] = useState([]);
    const [eve,setEve] = useState(true)
    useEffect(() => {
        console.log('called after add');
        setStudents(students=>[])
        const data = isAuthenticated();
        setTeacher(data?.user);
        console.log(teacher);
        GetStudentsByTeacher(data?.user?.id).then((list)=>{
            setStudents(list?.users);
            console.log(list);
        }).catch((err)=>console.log(err))
    },[eve,location])
    
    const editStudent = (e,data)=>{
        e.preventDefault();
        naviagte('/TeacherDashboard/Students/EditStudents',{state:data})
    }
    const deleteStudent = (e,id) =>{
        e.preventDefault();
        DeleteStudent(id).then((data)=>{
            if(data?.error){
                window.alert('unable to remove student')
            }else{
                window.alert('Student removed successfully')
                setEve(!eve)
            }
        }).catch((err)=>console.log(err))
    }
    const viewStudent = (e,data) =>{
        e.preventDefault();
        naviagte('/TeacherDashboard/Students/ViewStudentDetails',{state:data})
    }
    return (
        <div>
            <table className="container container-fluid" id="table-to-xls">
                <thead>
                    <tr class="table-headers">
                        <th colSpan="2">Name</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students?.length>=1 ? students.map((itm, ind) => {
                        return (
                            <tr key={ind}>
                                <td colspan="2">{itm.name}</td>
                                <td>{itm.department}</td>
                                <td>{itm.email}</td>
                                <td>{itm.phone}</td>
                                <td>{itm.address}</td>
                                <td>{"30/03/2000"}</td>
                                <td style={{textTransform:'capitalize'}}>{itm.gender}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <button onClick={(e)=>editStudent(e,itm)} class="btn btn-primary" ><i class="bi bi-pencil-fill" style={{ fontSize: '20px', color: 'white' }}></i></button>
                                    <button onClick={(e)=>deleteStudent(e,itm._id)} class="btn btn-danger"><i class="bi bi-trash" style={{ fontSize: '20px', color: 'white' }}></i></button>
                              
                                    <button onClick={(e)=>viewStudent(e,itm)} class="btn btn-primary" ><i class="bi bi-eye-fill" style={{ fontSize: '20px', color: 'white' }}></i></button>
                                    
                                    
                                
                                </td>


                              
                            </tr>
                        );
                    }):''}
                    {/* <tr className="total">
                        <td style={{ textAlign: 'left' }}>Totals</td>
                        <td>{totals.colleges}</td>
                        <td>{totals.directors}</td>
                        <td>{totals.teachers}</td>
                        <td>{totals.students}</td>
                        <td>{totals.courses}</td>
                        <td style={{ textAlign: 'center' }}>
                            <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="btn btn-success"
                                table="table-to-xls"
                                filename="tablexls"
                                sheet="tablexls"
                                buttonText="  Export as Excel">
                            </ReactHTMLTableToExcel>
                        </td>
                    </tr> */}
                </tbody>
            </table>
            <br/>
        </div>
    )
}

export default ViewStudents;
