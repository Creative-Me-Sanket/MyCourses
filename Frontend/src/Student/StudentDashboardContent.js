import { React, useState, useEffect } from 'react'
import Avtar from '../Assets/avtar.png';
import { isAuthenticated } from '../Auth/Helper';
import headerImg from '../Assets/dashboard_bg.svg'
import { Link, Outlet } from 'react-router-dom';
import CountUp from 'react-countup';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import AddCollegeModal from "./AddCollegeModal";
import Progressbar from "../Components/Progressbar"
import { Rating } from '@mui/material';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Label,
} from "recharts";
import { padding } from '@mui/system';

const StudentDashboardContent = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        const data = isAuthenticated();
        setUser(data.user);
    }, [])

    // combined demo data for all demo charts original different will be fetched from data for each chart
    const data = [
        {
            month: "Jan",
            activity: 0,
        },
        {
            month: "Feb",
            activity: 10,
        },
        {
            month: "Mar",
            activity: 12,
        },
        {
            month: "Apr",
            activity: 20,
        },
        {
            month: "May",
            activity: 30,
        },
        {
            month: "June",
            activity: 15,
        },
        {
            month: "Jul",
            activity: 25,
        }
    ];
    const studentProgress = [
        { name: 'Progress', value: 68 },

    ];
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoWidth: true,
        rewind: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,

            }
        },
    };

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
                        <div class="card" style={{ backgroundColor: "rgba(128,191,255,0.5)" }}>
                            <div class="card-header" style={{ backgroundColor: "rgba(128,191,255,0.9)", textAlign: "center", textDecoration: "center", fontSize: "22px" }}>Want to Learn More?</div>
                            <div class="card-content d-flex flex-col justify-content-center p-3">
                                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCollegeModal"> ➕ Browse Course</button>
                                {/* <Outlet />
                <AddCollegeModal /> */}
                            </div>
                        </div>
                        <div class="card mt-2" style={{ width: "100%" }} >
                            <div class="card-header" style={{ backgroundColor: "rgba(128,191,255,0.9)", textAlign: "center", textDecoration: "center", fontSize: "22px" }}>Enrolled Courses Count</div>
                            <div class="card-body d-flex" style={{ backgroundColor: "rgba(128,191,255,0.5)", alignItems: "center", justifyContent: "center" }}>
                                {/* Add count of active dicusiion forum */}
                                <h5 class="card-title" style={{ fontSize: "26px" }}><CountUp end={5} duration={3} /></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container mt-2">
                <div>
                    <h1 style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        margin: 4
                    }}> Running Courses
                    </h1>
                </div>
                <div className='container'>
                    <OwlCarousel className='owl-theme' {...options}>
                        <div class='item'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="https://miro.medium.com/max/750/0*kQ7HxB1t_RBDIxyH.jpg" alt="Card image cap" style={{ height: "15vw" }} />
                                <div class="card-body" style={{ height: "9rem" }}>
                                    <div class="card-title text-black fw-bold" style={{ fontSize: "18px" }}>Learn Python Programming Masterclass</div>
                                    <h4 class="card-text text-black fw-bold">Author: Sheetal Sharma</h4>
                                    <div class="mt-3"><Progressbar progress={70} /></div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="https://cdn.auth0.com/blog/angular5/logo.png" alt="Card image cap" style={{ height: "15vw" }} />
                                <div class="card-body" style={{ height: "9rem" }}>
                                    <div class="card-title text-black fw-bold" style={{ fontSize: "18px" }}>Angular - The Complete Guide</div>
                                    <h4 class="card-text text-black fw-bold">Author: Snehal Patil</h4>
                                    <div class="mt-3"><Progressbar progress={50} /></div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="https://www.latestlaws.com/media/2021/01/1610976417-0.jpg" alt="Card image cap" style={{ height: "15vw" }} />
                                <div class="card-body" style={{ height: "9rem" }}>
                                    <div class="card-title text-black fw-bold" style={{ fontSize: "18px" }}>Become a Web Developer from Scratch</div>
                                    <h4 class="card-text text-black fw-bold">Author: Snehal Patil</h4>
                                    <div class="mt-3"><Progressbar progress={80} /></div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png" alt="Card image cap" style={{ height: "15vw" }} />
                                <div class="card-body" style={{ height: "9rem" }}>
                                    <div class="card-title text-black fw-bold" style={{ fontSize: "18px" }}>React Native - For Beginners</div>
                                    <h4 class="card-text text-black fw-bold">Author: Nisarga Sabale</h4>
                                    <div class="mt-3"><Progressbar progress={50} /></div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src="https://play-lh.googleusercontent.com/bJH4mRLa6-tvpTQW_1oOQXWUqwqHTseA4cJcTI1IDn15lyGuGHYlb77J3UFggM8ydA" alt="Card image cap" style={{ height: "15vw" }} />
                                <div class="card-body" style={{ height: "9rem" }}>
                                    <div class="card-title text-black fw-bold" style={{ fontSize: "18px" }}>DBMS - The Complete Guide</div>
                                    <h4 class="card-text text-black fw-bold">Author: Arati Patil</h4>
                                    <div class="mt-3"><Progressbar progress={40} /></div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div class="container mt-4">
                <div class="row">
                    <div class="col-xl-8 col-12">
                        <div class="card">
                            <div class="card-content">
                                <div><h1 style={{
                                    textAlign: "center",
                                    textDecoration: "center",
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    margin: 4
                                }}> Activity </h1></div>

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
                                            <Area type="monotone" dataKey="activity" stroke='rgba(54, 162, 235, 1)' fill='rgba(54, 162, 235, 0.5)' />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-xl-4 col-12">
                        <div class="card">
                            <div class="card-content">
                                <div><h1 style={{
                                    textAlign: "center",
                                    textDecoration: "center",
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    margin: 4
                                }}> My Progress </h1></div>

                                <div style={{ width: "100%", height: 370 }}>
                                    <ResponsiveContainer height="80%">
                                        <PieChart width={400} height={300}>
                                            <Pie
                                                data={studentProgress}
                                                cx="50%"
                                                cy="50%"
                                                dataKey="value" // make sure to map the dataKey to "value"
                                                innerRadius={60} // the inner and outer radius helps to create the progress look
                                                outerRadius={80}
                                            >
                                                {studentProgress.map((entry, index) => {
                                                    if (index === 0) {
                                                        return <Cell key={`cell-${index}`} fill="rgba(147,250,165,0.5)" stroke="rgba(147,250,165,1)" />; // make sure to map the index to the colour you want
                                                    }
                                                    return <Cell key={`cell-${100 - index}`} fill="#f3f6f9" />;
                                                })}
                                                <Label
                                                    value={`${studentProgress[0].value} %`}
                                                    position="center"
                                                    fill="grey"
                                                    style={{
                                                        fontSize: "32px",
                                                        fontWeight: "bold",
                                                        fontFamily: "Roboto"
                                                    }}
                                                />
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <h1 style={{
                                        textAlign: "center",
                                        textDecoration: "center",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        margin: 4
                                    }}> Good Work Learner! <br />Your Progress is Great 👍</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div>
                    <h1 style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        margin: 4
                    }}> Recommended Courses
                    </h1>
                </div>
                <div className='container mt-2'>
                    <div class="row mt-3 mb-2">
                        <div class="col-xl-6 col-12">
                            <div class="recommendedcard">
                                <div class="row no-gutters">
                                    <div class="col-sm-5">
                                        <img class="card-img" style={{ height: "15vw" }} src="https://www.igmguru.com/uploads/products/machine-learning-training-igmguru_1499895199_xl.jpg" alt="Header Image" />
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="card-body mt-4">
                                            <h1 class="card-title mb-4" style={{ fontSize: "25px", fontWeight: "bolder" }}>Machine Learning - Beginner</h1>
                                            <p class="card-text" style={{ fontSize: "18px", margin: 0, padding: 0 }}>Author : Dipti Nashine</p>
                                            <h1><span>Rating : </span><span><Rating name="half-rating-read" value={5} max = {5} precision={0.5} readOnly /></span></h1>
                                            <a href="#" class="btn btn-primary mt-4">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-12">
                            <div class="recommendedcard">
                                <div class="row no-gutters">
                                    <div class="col-sm-5">
                                        <img class="card-img" style={{ height: "15vw" }} src="https://i.pinimg.com/originals/cb/6d/07/cb6d07ce3ed6d97d88b0140963844161.jpg" alt="Header Image" />
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="card-body mt-4">
                                            <h1 class="card-title mb-4" style={{ fontSize: "25px", fontWeight: "bolder" }}>MERN Stack - Beginner to Advance</h1>
                                            <p class="card-text" style={{ fontSize: "18px", margin: 0, padding: 0 }}>Author : Snehal Patil</p>
                                            <h1><span>Rating : </span><span><Rating name="half-rating-read" value={4.5} max = {5} precision={0.5} readOnly /></span></h1>
                                            <a href="#" class="btn btn-primary mt-4">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3 mb-2">
                        <div class="col-xl-6 col-12">
                            <div class="recommendedcard">
                                <div class="row no-gutters">
                                    <div class="col-sm-5">
                                        <img class="card-img" style={{ height: "15vw" }} src="https://www.androidbeat.com/wp-content/uploads/2021/12/android.png" alt="Header Image" />
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="card-body mt-4">
                                            <h1 class="card-title mb-4" style={{ fontSize: "25px", fontWeight: "bolder" }}>Android Development</h1>
                                            <p class="card-text" style={{ fontSize: "18px", margin: 0, padding: 0 }}>Author : Rahul Choudhary</p>
                                            <h1><span>Rating : </span><span><Rating name="half-rating-read" value={4.5} max = {5} precision={0.5} readOnly /></span></h1>
                                            <a href="#" class="btn btn-primary mt-4">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-12">
                            <div class="recommendedcard">
                                <div class="row no-gutters">
                                    <div class="col-sm-5">
                                        <img class="card-img" style={{ height: "15vw" }} src="https://ewscripps.brightspotcdn.com/56/0b/f4277e47417a8491b3675333b4c7/blockchain-featured.jpg" alt="Header Image" />
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="card-body mt-4">
                                            <h1 class="card-title mb-4" style={{ fontSize: "25px", fontWeight: "bolder" }}>Blockchain Technology - Beginner</h1>
                                            <p class="card-text" style={{ fontSize: "18px", margin: 0, padding: 0 }}>Author : Nisarga Sabale</p>
                                            <h1><span>Rating : </span><span><Rating name="half-rating-read" value={4.5} max = {5} precision={0.5} readOnly /></span></h1>
                                            <a href="#" class="btn btn-primary mt-4">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3 mb-2">
                        <div class="col-xl-6 col-12">
                            <div class="recommendedcard">
                                <div class="row no-gutters">
                                    <div class="col-sm-5">
                                        <img class="card-img" style={{ height: "15vw" }} src="https://i.ytimg.com/vi/FGu9Z0OYzJk/maxresdefault.jpg" alt="Header Image" />
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="card-body mt-4">
                                            <h1 class="card-title mb-4" style={{ fontSize: "25px", fontWeight: "bolder" }}>Introduction to Computer Networking </h1>
                                            <p class="card-text" style={{ fontSize: "18px", margin: 0, padding: 0 }}>Author : Sarika Choudhary</p>
                                            <h1><span>Rating : </span><span><Rating name="half-rating-read" value={5} max = {5} precision={0.5} readOnly /></span></h1>
                                            <a href="#" class="btn btn-primary mt-4">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-12">
                            <div class="recommendedcard">
                                <div class="row no-gutters">
                                    <div class="col-sm-5">
                                        <img class="card-img" style={{ height: "15vw" }} src="https://oracle-patches.com/images/2022/01/01/SQL_Queries_Clean_large.jpg" alt="Header Image" />
                                    </div>
                                    <div class="col-sm-7">
                                        <div class="card-body mt-4">
                                            <h1 class="card-title mb-4" style={{ fontSize: "25px", fontWeight: "bolder" }}>SQL - Introduction</h1>
                                            <p class="card-text" style={{ fontSize: "18px", margin: 0, padding: 0 }}>Author : Arati Patil</p>
                                            <h1><span>Rating : </span><span><Rating name="half-rating-read" value={4} max = {5} precision={0.5} readOnly /></span></h1>
                                            <a href="#" class="btn btn-primary mt-4">Enroll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboardContent
