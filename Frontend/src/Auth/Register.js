import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import RadioButtonGroup from "../Components/RadioButtonGroup";
import TextInput from "../Components/TextInput";
import { Register as Regi } from "./Helper";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    error: "",
    role: "student",
    success: false
  });

  const { name, email, phone, password, gender, role, error, success } = user;

  const handleChange = (name, event) => {
    //event.preventDefault();
    setUser({ ...user, error: false, [name]: event.target.value })
    console.log(user);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, error: false });
    Regi({ name, email, phone, password, role, gender }).then((data) => {
      if (data.error) {
        setUser({ ...user, error: data.error, success: false })
      } else {
        setUser({
          ...user,
          name: "",
          email: "",
          phone: "",
          password: "",
          gender: "",
          error: "",
          success: true
        })
        console.log(user);
        console.log(data);
      }
    }).catch((err) => {
      console.log(err);
    })
  }
  const successMessage = ()=>{
    return(
    <div className="alert alert-success" style={{display: success?"":"none"}}>
      Registred Successfully <Link to="/Login">Login Here</Link>
    </div>)
  }
  const errorMessage = ()=>{
    return(
    <div className="alert alert-danger" style={{display: error?"":"none"}}>
      {error}
    </div>)
  }
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            {successMessage()}
            {errorMessage()}
            <form>
              <TextInput
                placeholder="Full Name"
                inputStyle={{ height: "6vh" }}
                onChange={e => handleChange("name", e)}
                type="text"
                label="Full Name"
                name="Name"
              />
              <br />
              <TextInput
                placeholder="Phone"
                inputStyle={{ height: "6vh" }}
                onChange={e => handleChange("phone", e)}
                type="number"
                label="Phone"
                name="Phone"
              />
              <br />
              <TextInput
                placeholder="Email"
                inputStyle={{ height: "6vh" }}
                onChange={e => handleChange("email", e)}
                label="Email"
                name="Email"
              />
              <br />
              <TextInput
                placeholder="Password"
                inputStyle={{ height: "6vh" }}
                type="password"
                label="Password"
                name="Password"
              />
              <br />
              <TextInput
                placeholder="Confirm Password"
                inputStyle={{ height: "6vh" }}
                onChange={e => handleChange("password", e)}
                type="password"
                label="Confirm Password"
                name="Confirm Password"
              />
              <br />
              <h5 style={{ fontWeight: 590, fontSize: '20px', color: 'black' }}>Gender</h5><br />
              <RadioButtonGroup
                name="gender"
                ops={[
                  {
                    value: "male",
                    label: "Male"
                  },
                  {
                    value: "female",
                    label: "Female"
                  }
                ]}
                onClick={event => {
                  setUser({ ...user, gender: event.target.value });
                }}
              />
              <br />
              <button
                style={{
                  width: "100%",
                  display: "block",
                  marginBottom: "10px"
                }}
                className="btn btn-primary btn-lg btn-block"
                onClick={e => onSubmit(e)}
              >
                Register
              </button>
              <button
                style={{
                  width: "100%",
                  display: "block",
                  marginBottom: "10px"
                }}
                className="btn btn-outline-success btn-lg btn-block"
              >
                <Link to="/Login">Login</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
