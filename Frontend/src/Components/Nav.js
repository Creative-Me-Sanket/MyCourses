import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../Auth/Helper';
import './Nav.css'
import logo from "../Assets/site_logo.png"
function Header() {
    const [ darkMode, setDarkMode ] = useState(false)
     
    useEffect(() => {
      const body = document.body
      const toggle = document.querySelector('.toggle-inner')
      
      // If dark mode is enabled - adds classes to update dark-mode styling.
      // Else, removes and styling is as normal.
      if( darkMode === true ) {
        body.classList.add('dark-mode')
        toggle.classList.add('toggle-active')
      } else {
        body.classList.remove('dark-mode')
        toggle.classList.remove('toggle-active')
      }
    }, [darkMode])
    
    return (
      <header>
        <div
          id="toggle"
          onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
        >
          <div className="toggle-inner"/>
        </div>
      </header>
    )
  }
const Nav = () => {
    const [mobClass, setMobClass] = useState("main-navbar");
    const [icnClass, setIcnClass] = useState("bi bi-list mobile-nav-toggle");
    const [isAuth,setisAuth] = useState();
    const [active, setActive] = useState({
        Home: "nav-link scrollto active",
        Course: "nav-link scrollto",
        About: "nav-link scrollto",
        Contact: "nav-link scrollto",
        Login: "nav-link scrollto"
    });
    useEffect(()=>{
        const validation = isAuthenticated();
        setisAuth(validation);
      },[])
    const toggleNav = (e) => {
        e.preventDefault();
        console.log(mobClass);
        if (icnClass === "bi bi-list mobile-nav-toggle") {
            setIcnClass("bi bi-x mobile-nav-toggle");
            setMobClass("navbar-mobile")
        } else
            if (icnClass === "bi bi-x mobile-nav-toggle") {
                setIcnClass("bi bi-list mobile-nav-toggle");
                setMobClass("main-navbar")
            }
    }
    const homeActive = (e) => {
        e.preventDefault();
        setActive({
            Home: "nav-link scrollto active",
            Course: "nav-link scrollto",
            About: "nav-link scrollto",
            Contact: "nav-link scrollto",
            Login: "nav-link scrollto"
        })
    }
    const courseActive = (e) => {
        e.preventDefault();
        setActive({
            Home: "nav-link scrollto",
            Course: "nav-link scrollto active",
            About: "nav-link scrollto",
            Contact: "nav-link scrollto",
            Login: "nav-link scrollto"
        })
    }
    const aboutActive = (e) => {
        e.preventDefault();
        setActive({
            Home: "nav-link scrollto",
            Course: "nav-link scrollto",
            About: "nav-link scrollto active",
            Contact: "nav-link scrollto",
            Login: "nav-link scrollto"
        })
    }
    const contactActive = (e) => {
        e.preventDefault();
        setActive({
            Home: "nav-link scrollto",
            Course: "nav-link scrollto",
            About: "nav-link scrollto",
            Contact: "nav-link scrollto active",
            Login: "nav-link scrollto"
        })
    }
    const loginActive = (e) => {
        e.preventDefault();
        setActive({
            Home: "nav-link scrollto",
            Course: "nav-link scrollto",
            About: "nav-link scrollto",
            Contact: "nav-link scrollto",
            Login: "nav-link scrollto active"
        })
    }
    return (
        <header id="header-nav" class="d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">
                {/* <h1 class="logo"><a href="index.html">My Courses @ Akurdi</a></h1> */}
                
                 <a href="/" style={{width: "100%", height: "auto"}}><img src={logo} alt=""/></a>

                <nav id="navbar" class={mobClass}>
                    <ul>
                        <li onClick={homeActive}><Link to="/" class={active.Home}>Home</Link></li>
                        <li onClick={courseActive}><Link to="/Course" class={active.Course}>Courses</Link></li>
                        <li onClick={aboutActive}><Link to="/About" class={active.About}>About</Link></li>
                        <li onClick={contactActive}><Link to="/Contact" class={active.Contact}>Contact</Link></li>
                        {!isAuth? 
                        <li onClick={loginActive}><Link to="/Login" class={active.Login}>Login</Link></li>
                        :''}
                        {isAuth&&isAuth.user.role === "student" ?
                        <li onClick={loginActive}><Link to="/Login" class={active.Login}>Logout</Link></li>
                        :''}
                        {isAuth&&isAuth.user.role === "teacher" ?
                        <li onClick={loginActive}><Link to="/TeacherDashboard" class={active.Login}>Dashboard</Link></li>
                        :''}
                        {isAuth&&isAuth.user.role === "admin" ?
                        <li onClick={loginActive}><Link to="/AdminDashboard" class={active.Login}>Dashboard</Link></li>
                        :''}
                        {isAuth&&isAuth.user.role === "moderator" ?
                        <li onClick={loginActive}><Link to="/ModeratorDashboard" class={active.Login}>Dashboard</Link></li>
                        :''}
                        <li><Header /></li>
                    </ul>
                    <i onClick={toggleNav} class={icnClass}></i>
                </nav>
            </div>
        </header>
    )
}

export default Nav