import React, { useEffect, useState,useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { getCollege, getHodDetails } from './Helper';
import AdminAdd from '../Assets/admin-add.png'
import AdminCard from '../Components/AdminCard';
import AddAdminModal from './AddAdminModel';
const ViewCollegeAdmins = () => {
    const location = useLocation();
    const [college, setCollege] = useState();
    const [admins, setAdmins] = useState([]);
    const [reload, setReload] = useState(false);
    const [eve,setEve] = useState(false);
    useEffect(() => {
        setAdmins(admins=>[])
        console.log(location.state);
        getCollege(location.state).then((data) => {
            setCollege(data);
            data.hods.map((value,key)=>{
               getHodDetails(value).then((data2)=>{
                    console.log(data2);
                    setAdmins(admins=>[...admins,data2])
               }).catch((err)=>console.log(err))
            })
        }).catch((err) => console.log(err));
    }, [eve,reload])
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
                    {admins.length >=1 ?
                        admins.map((val,ind)=>{
                            return(
                                <AdminCard key={ind} name={val.name} refreshComponent={setReload} refreshComponentState={reload}  collegeId={college?._id} data={val} department={val.department}/>
                            )
                        })
                    :''}
                    <div class="card-admin">
                        <div class="container-admin">
                        <img className="add-img2" data-bs-toggle="modal" onClick={imgClick} data-bs-target="#addAdminModal" src={AdminAdd} alt="profile-img-admin" />
                            <h2>Add Department</h2>
                            <small style={{textAlign:'center'}}>{college?.name}</small>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
            <AddAdminModal cid={location.state} openClose={btnClick} name={college?.name}/>
        </div>


    )
}

export default ViewCollegeAdmins;