import React, { useState,useRef } from "react";
import Button from "../Components/Button";
import TextInput from "../Components/TextInput";
import { Login as Logi,isAuthenticated,authenticate } from "./Helper";
import { Link,useNavigate } from "react-router-dom";
import LoginImage from '../Assets/LoginPNG.png'
import loginGif from '../Assets/Welcome\ to\ MY\ Courses\ @\ Akurdi\ GIF.gif'
const Login = () => {
  const toggleButton = useRef(null);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
    loading:false,
    didRedirect:false
  });

  const { email, password, error, loading, didRedirect } = user;
  const userr = isAuthenticated();
 

  const handleChange = (name, event) => {
    //event.preventDefault();
    setUser({ ...user, error: false, [name]: event.target.value })
    console.log(user);
  }

  const performRedirect = ()=>{
    if(didRedirect){
      if(userr.user && userr.user.role==="student"){
        navigate('/StudentDashboard',{state:userr})
      }else if(userr.user && userr.user.role==="teacher"){
        navigate('/TeacherDashboard',{state:userr})
      }else if(userr.user && userr.user.role==="admin"){
        navigate('/AdminDashboard',{state:userr})
      }else if(userr.user && userr.user.role==="moderator"){
        navigate('/ModeratorDashboard',{state:userr})
      }
    }
    // if(isAuthenticated()){  watch hitesh's login video

    // }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, error: false,loading:true });
    Logi({email, password }).then((data) => {
      if (data.error) {
        setUser({ ...user, error: data.error, success: false,loading:false })
      } else {
        console.log(data);
        authenticate(data,()=>{
          setUser({...user,didRedirect:true})
        })
      }
    }).catch((err) => {
      console.log(err);
    })
  }
  const loadingMessage = ()=>{
    return(
    <div className="alert alert-info" style={{display: loading?"":"none"}}>
      Loading
    </div>)
  }
  const errorMessage = ()=>{
    return(
    <div className="alert alert-danger" style={{display: error?"":"none"}}>
      Invalid Email or Password
    </div>)
  }
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src={loginGif}
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              {errorMessage()}
              {loadingMessage()}
              <TextInput onChange={e => handleChange("email", e)} value={user.email} placeholder="Email" inputStyle={{height:'6vh'}} label="Email" name="Email"/>
              <br/>
              <TextInput onChange={e => handleChange("password", e)} value={user.password} placeholder="Password" inputStyle={{height:'6vh'}} type="password" label="Password" name="Password"/>
              <br/>
              <button ref={toggleButton} onClick={e => onSubmit(e)} style={{width:'100%',display:'block',marginBottom:'10px'}} className="btn btn-primary btn-lg btn-block">
                Login
              </button>
              <button style={{width:'100%',display:'block',marginBottom:'10px'}}  className="btn btn-outline-success btn-lg btn-block">
              <Link to="/Register">Register</Link>
              </button>
              <h5 className="text-center" style={{color:'green',cursor:'pointer'}}>Forgot Password ?</h5>
            </form>
          </div>
        </div>
      </div>
      {performRedirect()}
    </section>
  );
};

export default Login;
