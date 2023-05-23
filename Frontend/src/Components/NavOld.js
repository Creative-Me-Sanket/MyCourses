import React,{useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { isAuthenticated } from "../Auth/Helper";
// .menu-link ul li:hover > a {
// 	transform-origin: left;
// 	color: #edeef7;
// 	text-decoration: none;
// 	/* margin-bottom:2px solid #fff;
// 	border-radius: 5px; */
// 	transition: 0.5s;
//   }
//   .menu-link ul li:hover{
// 	border-bottom:2px solid #edeef7;
// 	border-radius: 5px;
// 	transition: 0.5s;
//   }
const NavOld = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(true);
  const [isAuth,setisAuth] = useState();
  const [active,setActive] = useState({
    Home:'',
    Course:'',
    About:'',
    Contact:'',
    Login:''
  });
  useEffect(()=>{
    const validation = isAuthenticated();
    setisAuth(validation);
  },[])
    return (
        <React.Fragment>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>My</span>Courses
            <span>@</span>Akurdi
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div className="menu-link"
          // className={
          //   showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          // }
          //  style={{
            
          // }}
          >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Course">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            {!isAuth?
              <li>
              <NavLink to="/Login" className="loginNav">Login</NavLink>
            </li>
            :''}
            {isAuth&&isAuth.user.role === "student" ?
              <li>
              <NavLink to="/StudentDashboard" className="loginNav">Dashboard</NavLink>
            </li>
            :''}
            {isAuth&&isAuth.user.role === "teacher" ?
              <li>
              <NavLink to="/TeacherDashboard" className="loginNav">Dashboard</NavLink>
            </li>
            :''}
            {isAuth&&isAuth.user.role === "admin" ?
              <li>
              <NavLink to="/AdminDashboard" className="loginNav">Dashboard</NavLink>
            </li>
            :''}
            {isAuth&&isAuth.user.role === "moderator" ?
              <li>
              <NavLink to="/ModeratorDashboard" className="loginNav">Dashboard</NavLink>
            </li>
            :''}
          </ul>
        </div>

        
          {/* hamburger menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {/* <GiHamburgerMenu /> */}
            </a>
          </div>
        {/*</div>*/}
      </nav>
    </React.Fragment>
  );
};

export default NavOld;
