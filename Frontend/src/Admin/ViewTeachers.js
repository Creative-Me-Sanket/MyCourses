import React, { useEffect, useState,useRef } from 'react'
import { useLocation } from 'react-router-dom';
import AdminAdd from '../Assets/admin-add.png'
import AddTeacherModel from './AddTeacherModel';
import TeacherCard from '../Components/TeacherCard';
import { isAuthenticated } from '../Auth/Helper';
import { GetTeachersByHOD } from './Helper';
const ViewTeachers = () => {
    const [hod, setHod] = useState();
    const [teacher, setteacher] = useState([]);
    const [reload, setReload] = useState(false);
    const [eve,setEve] = useState(false);
    useEffect(()=>{
        setteacher(teacher=>[])
        const data = isAuthenticated();
        setHod(data?.user);
        console.log(data);
        GetTeachersByHOD(data?.user?.id).then((data)=>{
            setteacher(data?.users)
        }).catch((err)=>console.log(err))
    },[reload,eve])
    const imgClick = (e)=>{
        e.preventDefault() 
        setEve(true) 
        console.log('modal open')
    }
    const btnClick = (e)=>{
        e.preventDefault() 
        setEve(false) 
        console.log('modal close')
    }
    return (
        <div >
            <br/>
            <div className="container">
                <div class="grid grid-cols-3 gap-5 ">
                    {teacher?.length >=1 ?
                        teacher.map((val,ind)=>{
                            return(
                                <TeacherCard key={ind} refreshComponent={setReload} refreshComponentState={reload} name={val.name} data={val} department={val.department}/>
                            )
                        })
                    :console.log('fetching')}
                    <div class="card-admin">
                        <div class="container-admin">
                        <img className="add-img2" data-bs-toggle="modal" data-bs-target="#addTeacherModal" onClick={imgClick} src={AdminAdd} alt="profile-img-admin" />
                            <h2>Add Teacher</h2>
                            <small style={{textAlign:'center'}}>{hod?.department}</small>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
            <AddTeacherModel cid={hod?.college} hid={hod?.id} dept={hod?.department} openClose={btnClick} name={"MCA"}/>
        </div>


    )
}

export default ViewTeachers;