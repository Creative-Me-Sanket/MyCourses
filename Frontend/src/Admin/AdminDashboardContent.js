import { React, useState, useEffect } from 'react'
import CountUp from 'react-countup';
import { Link, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../Auth/Helper';
import Avtar from '../Assets/avtar.png';
import Teacher from './EditTeacher';
import headerImg from '../Assets/dashboard_bg.svg'
import AddTeacherModel from "./AddTeacherModel";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar,
    Legend,
    LineChart,
    Line,
} from "recharts";

const AdminDashboardContent = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        const data = isAuthenticated();
        setUser(data.user);
    }, [])

    // combined demo data for all demo charts original different will be fetched from data for each chart
    const data = [
        {
            month: "Jan",
            users: 4000,
            progress: 0,
            college: "PCOE",
            courses: 1450,
            teachers: 150,
            content: 55,

        },
        {
            month: "Feb",
            users: 3000,
            progress: 20,
            college: "DYPIMCA",
            courses: 1600,
            teachers: 250,
            content: 75,
        },
        {
            month: "Mar",
            users: 2000,
            progress: 25,
            college: "DYPIMBA",
            courses: 1200,
            teachers: 110,
            content: 60,
        },
        {
            month: "Apr",
            users: 2780,
            progress: 40,
            college: "XYZ",
            courses: 1750,
            teachers: 138,
            content: 30,
        },
        {
            month: "May",
            users: 1890,
            progress: 50,
            college: "JKLMN",
            courses: 980,
            teachers: 128,
            content: 45,
        },
        {
            month: "June",
            users: 2390,
            progress: 55,
            college: "YOLO",
            courses: 1050,
            teachers: 170,
            content: 40,
        },
        {
            month: "Jul",
            users: 3490,
            progress: 70,
            college: "POLO",
            courses: 1840,
            teachers: 220,
            content: 75,
        }
    ];
    return (
        <div>
            <div class="container container-fluid">
                <div class="row">
                    <div class="col-xl-9 col-12">
                        <div class="card" style={{ backgroundColor: "rgba(128,191,255,0.5)", borderRadius: "15px" }}>
                            <div class="row no-gutters">
                                <div class="col-sm-5">
                                    <img class="card-img" style={{ height: "15vw" }} src={headerImg} alt="Header Image" />
                                </div>
                                <div class="col-sm-7">
                                    <div class="card-body mt-4">
                                        <h1 class="card-title mb-4" style={{ fontSize: "25px", fontWeight: "bolder" }}>Hello {user?.name} 👋, Welcome Back!</h1>
                                        <p class="card-text" style={{ fontSize: "18px", margin: 0, padding: 0 }}>Education is the Passport to the Future, So Learn More and More</p>
                                        <a href="#" class="btn btn-primary mt-4">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-12">
                        {/* Add Discussion Forum Link */}
                        <Link to="/">
                            <div class="card" style={{ width: "100%", height: "15vw", borderRadius: "15px" }} >
                                <div class="card-header" style={{ backgroundColor: "rgba(128,191,255,0.9)", textAlign: "center", textDecoration: "center", fontSize: "22px" }}>Discussion Forum</div>
                                <div class="card-body d-flex" style={{ backgroundColor: "rgba(128,191,255,0.5)", alignItems: "center", justifyContent: "center" }}>
                                    {/* Add count of active dicusiion forum */}
                                    <h5 class="card-title" style={{ fontSize: "30px" }}><CountUp end={25} duration={3} /></h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="container container-fluid mt-4">
                <div class="row">
                    <div class="col">
                        <div class="card" style={{ backgroundColor: "rgba(128,191,255,0.5)" }}>
                            <div class="card-header" style={{ backgroundColor: "rgba(128,191,255,0.9)", textAlign: "center", textDecoration: "center", fontSize: "22px" }}>Have more teachers to Add?</div>
                            <div class="card-content d-flex flex-col justify-content-center p-3">
                                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addTeacherModal"> ➕ Add New Teacher</button>
                                <Outlet />
                                <AddTeacherModel />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ backgroundColor: "rgba(128,191,255,0.5)" }}>
                            <div class="card-header" style={{ backgroundColor: "rgba(128,191,255,0.9)", textAlign: "center", textDecoration: "center", fontSize: "22px" }}>Have more knowledge to share?</div>
                            <div class="card-content d-flex flex-col justify-content-center p-3">
                                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCollegeModal"> ➕ Add New Course</button>
                                {/* <Outlet />
                <AddCollegeModal /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-fluid mt-4">
                <div class="row">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <div class="media-body text-left">
                                            <h3 class="danger">278</h3>
                                            <span class="danger">Courses</span>
                                        </div>
                                        <div class="align-self-center">
                                            <i class="icon-rocket danger font-large-2 float-right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <div class="media-body text-left">
                                            <h3 class="text-success">36</h3>
                                            <span class="text-success">Teachers</span>
                                        </div>
                                        <div class="align-self-center">
                                            <i class="icon-user text-success font-large-2 float-right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <div class="media-body text-left">
                                            <h3 class="text-warning">2000</h3>
                                            <span class="text-warning">Students</span>
                                        </div>
                                        <div class="align-self-center">
                                            {/* <i class="icon-pie-chart text-warning font-large-2 float-right" /> */}
                                            <i class="fas fa-users text-warning font-large-2 float-right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <div class="media d-flex">
                                        <div class="media-body text-left">
                                            <h3 class="text-primary">4</h3>
                                            <span class="text-primary">Colleges</span>
                                        </div>
                                        <div class="align-self-center">
                                            {/* <i class="icon-support text-primary font-large-2 float-right" /> */}
                                            <i class="fas fa-university  text-primary font-large-2 float-right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-xl-8 col-sm-6 col-md-8 col-12">
                        <div class="card">
                            <div class="card-content">
                                <div><h1 style={{
                                    textAlign: "center",
                                    textDecoration: "center",
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    margin: 4
                                }}> Number of Students Enrolled </h1></div>

                                <div style={{ width: "100%", height: 370 }}>
                                    <ResponsiveContainer height="100%">
                                        <AreaChart
                                            data={data}
                                            margin={{
                                                top: 10,
                                                right: 30,
                                                left: 0,
                                                bottom: 0
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Area type="monotone" dataKey="progress" stroke='rgba(54, 162, 235, 1)' fill='rgba(54, 162, 235, 0.5)' />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-4 col-12">
                        <div class="card">
                            <div class="card-content">
                                <h1 class="p-3"><span style={{
                                    fontSize: "22px",
                                    fontWeight: "lighter",
                                    margin: 4,
                                }}>Best Instructors</span><span style={{ float: "right", fontSize: "1.5rem", padding: "1rem" }}><Link to="" >See All</Link></span></h1>
                            </div>
                        </div>
                        <div class="card" >
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-3 col-12">
                                        <img class="m-auto w-20 float-left" src={Avtar} alt="teacher 1"></img>
                                    </div>
                                    <div class="col-xl-5 col-12 mt-auto mb-auto">
                                        <h5 class="card-title" style={{ fontSize: "1.1rem" }}>Sarika Choudhary</h5>
                                        <p class="card-text m-0 p-0">5 Design Course</p>
                                    </div>
                                    <div class="col-xl-3 col-12 mt-auto mb-auto dashboard_btn">
                                        <a href="#" class="btn btn-primary">Courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" >
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-3 col-12">
                                        <img class="m-auto w-20 float-left" src={Avtar} alt="teacher 1"></img>
                                    </div>
                                    <div class="col-xl-5 col-12 mt-auto mb-auto">
                                        <h5 class="card-title" style={{ fontSize: "1.1rem" }}>Rahul Choudhary</h5>
                                        <p class="card-text m-0 p-0">5 Android Course</p>
                                    </div>
                                    <div class="col-xl-3 col-12 mt-auto mb-auto dashboard_btn">
                                        <a href="#" class="btn btn-primary">Courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" >
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-3 col-12">
                                        <img class="m-auto w-20 float-left" src={Avtar} alt="teacher 1"></img>
                                    </div>
                                    <div class="col-xl-5 col-12 mt-auto mb-auto">
                                        <h5 class="card-title" style={{ fontSize: "1.1rem" }}>Arati Patil</h5>
                                        <p class="card-text m-0 p-0">5 DBMS Course</p>
                                    </div>
                                    <div class="col-xl-3 col-12 mt-auto mb-auto dashboard_btn">
                                        <a href="#" class="btn btn-primary">Courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section className="">
                <h1 style={{ textAlign: "center" }}>Popular Courses</h1>
                <div className=" container coursecontainer">

                    <div className="coursecard">
                        <div className="face face1">
                            <div className="coursecontent">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                                <h3>Code</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="coursecontent">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="coursecard">
                        <div className="face face1">
                            <div className="coursecontent">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                                <h3>Code</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="coursecontent">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="coursecard">
                        <div className="face face1">
                            <div className="coursecontent">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                                <h3>Launch</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="coursecontent">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AdminDashboardContent;