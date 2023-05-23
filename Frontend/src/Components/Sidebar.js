import React, { useState, useEffect } from 'react'
import {Link, useNavigate } from "react-router-dom";
import { isAuthenticated, Logout } from '../Auth/Helper';
import Avtar from '../Assets/avtar.png';
import './Sidebar.css'
const SideBar = () => {
    const navigate = useNavigate();
    const [isAuth, setisAuth] = useState();
    useEffect(() => {
        var validation = isAuthenticated();
        setisAuth(validation);
    }, [])
    const [moderator, setModerator] = useState({
        Dashboard: 'nav__link active',
        Colleges: 'nav__link',
    })
    const [admin, setAdmin] = useState({
        Dashboard: 'nav__link active',
        Teachers: 'nav__link',
        Courses: 'nav__link',
    })
    const [teacher, setTeachers] = useState({
        Dashboard: 'nav__link active',
        Students: 'nav__link',
        Courses: 'nav__link',
    })
    const userLogout =()=>{
        Logout(()=>{
            console.log("Logging Out");
            //Clear Any State like user data that we have holded for user profile
        })
        .then(()=>{
            navigate('/');
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const [user,setUser] = useState();
    useEffect(()=>{
        const data = isAuthenticated();
        setUser(data.user);
    },[])
    return (
        <div className="l-navbar show" id="nav-bar">
            <nav className="nav" style={{position:'relative'}}>
                <div>
                    <a href="#" className="nav__logo">
                        <span className="nav__logo-name">My Courses @ Akurdi</span>
                    </a>
                    {isAuth && isAuth.user.role === "moderator" ?
                        <div className="nav__list">
                            <Link to="/ModeratorDashboard/Dashboard">
                            <a
                                href="#"
                                className={moderator.Dashboard}
                                onClick={() => {
                                    setModerator({
                                        Dashboard: "nav__link active",
                                        Colleges: "nav__link"
                                    });
                                }}
                            >
                                <i className="bx bx-grid-alt nav__icon" />
                                <span className="nav__name">Dashboard</span>
                            </a>
                            </Link>
                            <Link to="/ModeratorDashboard/Colleges">
                            <a
                                href="#"
                                className={moderator.Colleges}
                                onClick={() => {
                                    setModerator({
                                        Dashboard: "nav__link",
                                        Colleges: "nav__link active"
                                    });
                                }}
                            >
                                <i className="bx bx-user nav__icon" />
                                <span className="nav__name">Colleges</span>
                            </a>
                            </Link>
                        </div>
                        : ''}
                    {isAuth && isAuth.user.role === "admin" ?
                        <div className="nav__list">
                            <Link to="/AdminDashboard/Dashboard">
                            <a
                                href="#"
                                className={admin.Dashboard}
                                onClick={() => {
                                    setAdmin({
                                        Dashboard: 'nav__link active',
                                        Teachers: 'nav__link',
                                        Courses: 'nav__link',
                                    });
                                }}
                            >
                                <i className="bx bx-grid-alt nav__icon" />
                                <span className="nav__name">Dashboard</span>
                            </a>
                            </Link>
                            <Link to="/AdminDashboard/Teachers">
                            <a
                                href="#"
                                className={admin.Teachers}
                                onClick={() => {
                                    setAdmin({
                                        Dashboard: 'nav__link',
                                        Teachers: 'nav__link active',
                                        Courses: 'nav__link',
                                    });
                                }}
                            >
                                <i className="bx bx-user nav__icon" />
                                <span className="nav__name">Teachers</span>
                            </a>
                            </Link>
                            <Link to="/AdminDashboard/Courses">
                            <a
                                href="#"
                                className={admin.Courses}
                                onClick={() => {
                                    setAdmin({
                                        Dashboard: 'nav__link',
                                        Teachers: 'nav__link',
                                        Courses: 'nav__link active',
                                    });
                                }}
                            >
                                <i className="bx bx-user nav__icon" />
                                <span className="nav__name">Courses</span>
                            </a></Link>
                        </div>
                        : ''}
                    {isAuth && isAuth.user.role === "teacher" ?
                        <div className="nav__list">
                            <Link to="/TeacherDashboard/Dashboard">
                            <a
                                href="#"
                                className={teacher.Dashboard}
                                onClick={() => {
                                    setTeachers({
                                        Dashboard: 'nav__link active',
                                        Students: 'nav__link',
                                        Courses: 'nav__link',
                                    });
                                }}
                            >
                                <i className="bx bx-grid-alt nav__icon" />
                                <span className="nav__name">Dashboard</span>
                            </a></Link>
                            <Link to="/TeacherDashboard/Students">
                            <a
                                href="#"
                                className={teacher.Students}
                                onClick={() => {
                                    setTeachers({
                                        Dashboard: 'nav__link',
                                        Students: 'nav__link active',
                                        Courses: 'nav__link',
                                    });
                                }}
                            >
                                <i className="bx bx-user nav__icon" />
                                <span className="nav__name">Students</span>
                            </a></Link>
                            <Link to="/TeacherDashboard/Courses">
                            <a
                                href="#"
                                className={teacher.Courses}
                                onClick={() => {
                                    setTeachers({
                                        Dashboard: 'nav__link',
                                        Students: 'nav__link',
                                        Courses: 'nav__link active',
                                    });
                                }}
                            >
                                <i className="bx bx-user nav__icon" />
                                <span className="nav__name">Courses</span>
                            </a></Link>
                        </div>
                        : ''}

                </div>
                {isAuth  && user!=undefined? 
                    <div class="sidebar-footer" style={{position:'absolute',bottom:20,left:12,right:0}}>
                    <a href="##" class="sidebar-user" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <span class="sidebar-user-img">
                            <picture><source srcset={Avtar} type="image/webp"/><img src={Avtar} alt="User name"/></picture>
                        </span>
                        <div class="sidebar-user-info">
                                <span class="sidebar-user__title">{user.name}</span>
                                {/* <span class="sidebar-user__subtitle">{user.role}</span> */}
                                <span class="sidebar-user__subtitle">Logout <i style={{verticalAlign:'middle'}} className="bx bx-log-out nav__icon" onClick={userLogout}/></span>
                        </div>
                    </a>
                </div>
                :''}
                
            </nav>
        </div>
    )
}

export default SideBar;