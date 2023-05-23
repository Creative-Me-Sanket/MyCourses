import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DeleteTeacher } from '../Admin/Helper'
import Avtar from '../Assets/avtar.png'
const TeacherCard = (props) => {
    const naviagte = useNavigate();
    const deleteTeacher = (e) =>{
        e.preventDefault();
        DeleteTeacher(props.data._id).then((data)=>{
            if(data?.error){
                window.alert('unable to remove user from db')
            }else{
                window.alert('Removed Successfully')
                props.refreshComponent(!props.refreshComponentState)
            }
        }).catch((err)=>console.log(err))
    }
    const openEditTeacher = (e) =>{
        e.preventDefault();
        naviagte('/AdminDashboard/Teachers/EditTeachers',{state:props.data})
    }
    return (
        <div>
        <div class="card-admin" key={props.key}>
            <div class="container-admin">
                <img className="add-img" src={Avtar} alt="profile-img-admin" />
                <h2>{props.name}</h2>
                <small>{props.department}</small>
                <div class="bar-admin">
                    <button onClick={openEditTeacher} className="btn btn-primary">Edit  <i class='bx bxs-edit'></i></button>
                    <button className="btn btn-success">View  <i class='bx bx-detail' ></i></button>
                    <button onClick={deleteTeacher} className="btn btn-danger">Delete <i class='bx bxs-trash' ></i></button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TeacherCard