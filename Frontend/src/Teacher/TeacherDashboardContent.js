import { React, useState, useEffect, PureComponent } from 'react'
import Courses from '../Assets/Courses.jpg';
import Courses1 from '../Assets/Courses1.png';
import Courses2 from '../Assets/Courses2.jpg';
import { isAuthenticated } from '../Auth/Helper';
import teacherdash from '../Assets/teacherdash.gif';
import { Link, Outlet } from 'react-router-dom';
import CountUp from 'react-countup';
import { Carousel } from "react-bootstrap";
import AddCourseModal from './AddCourseModal';

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
  PieChart, Pie, Sector,
} from "recharts";
const TeacherDashboardContent = () => {
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
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];


  return (
    <div>
      <div class="container container-fluid">
        <div class="row">
          <div class="col-xl-9 col-12">
            <div class="card" style={{ backgroundColor: "rgba(128,191,255,0.5)", borderRadius: "15px" }}>
              <div class="row no-gutters">
                <div class="col-sm-5">
                  <img class="card-img" style={{ height: "15vw" }} src={teacherdash} alt="Header Image" />
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
              <div class="card-header" style={{ backgroundColor: "rgba(128,191,255,0.9)", textAlign: "center", textDecoration: "center", fontSize: "18px" }}>Have more Knowledge to Share?</div>
              <div class="card-content d-flex flex-col justify-content-center p-3">
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCourseModal"> ➕ Add New Course</button>
                <Outlet />
                <AddCourseModal />
              </div>
            </div>
            {/* Add Discussion Forum Link */}
            <Link to="/">
              <div class="card mt-2" style={{ width: "100%" }} >
                <div class="card-header" style={{ backgroundColor: "rgba(128,191,255,0.9)", textAlign: "center", textDecoration: "center", fontSize: "22px" }}>Discussion Forum</div>
                <div class="card-body d-flex" style={{ backgroundColor: "rgba(128,191,255,0.5)", alignItems: "center", justifyContent: "center" }}>
                  {/* Add count of active dicusiion forum */}
                  <h5 class="card-title" style={{ fontSize: "26px" }}><CountUp end={25} duration={3} /></h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="container container-fluid mt-2">
        <div class="row">
          <div class="col-xl-3 col-sm-6 col-12">
            <div class="card">
              <div class="card-content">
                <div class="card-body">
                  <div class="media d-flex">
                    <div class="media-body text-left">
                      <h3 class="danger text-danger">278</h3>
                      <span class="danger text-danger">Courses</span>
                    </div>
                    <div class="align-self-center">
                      <i class="icon-rocket text-danger font-large-2 float-right" />
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
                      <h3 class="text-success">156</h3>
                      <span class="text-success">Student</span>
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
                      <h3 class="text-warning">64.89 %</h3>
                      <span class="text-warning">Feedback</span>
                    </div>
                    <div class="align-self-center">
                      <i class="icon-pie-chart text-warning font-large-2 float-right" />
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
                      <h3 class="text-primary">423</h3>
                      <span class="text-primary">Quiz</span>
                    </div>
                    <div class="align-self-center">
                      <i class="icon-support text-primary font-large-2 float-right" />
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
          <div class="col-xl-8 col-sm-6 col-12">
            <div class="card">
              <div class="card-content">
                <div><h1 style={{
                  textAlign: "center",
                  textDecoration: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: 4
                }}> Monthly Progress of Students </h1></div>

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
                }}>Recently Uploded Courses</span><span style={{ float: "right" }}><Link to="" >See All</Link></span></h1>
              </div>
            </div>
            <div class="card" >
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-3 col-12">
                    <img class="m-auto w-20 float-left" src={Courses} alt="teacher 1"></img>
                  </div>
                  <div class="col-xl-6 col-12 mt-auto mb-auto">
                    <h5 class="card-title">Python </h5>
                    <p class="card-text m-0 p-0">5 Design Course</p>
                  </div>
                  <div class="col-xl-3 col-12 mt-auto mb-auto">
                    <a href="#" class="btn btn-primary">Courses</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card" >
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-3 col-12">
                    <img class="m-auto w-20 float-left" src={Courses} alt="teacher 1"></img>
                  </div>
                  <div class="col-xl-6 col-12 mt-auto mb-auto">
                    <h5 class="card-title">Android  </h5>
                    <p class="card-text m-0 p-0">5 Android Course</p>
                  </div>
                  <div class="col-xl-3 col-12 mt-auto mb-auto">
                    <a href="#" class="btn btn-primary">Courses</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="card" >
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-3 col-12">
                    <img class="m-auto w-20 float-left" src={Courses} alt="teacher 1"></img>
                  </div>
                  <div class="col-xl-6 col-12 mt-auto mb-auto">
                    <h5 class="card-title">Advance Java</h5>
                    <p class="card-text m-0 p-0">5 Java Courses</p>
                  </div>
                  <div class="col-xl-3 col-12 mt-auto mb-auto">
                    <a href="#" class="btn btn-primary">Courses</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card" >
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-3 col-12">
                    <img class="m-auto w-20 float-left" src={Courses} alt="teacher 1"></img>
                  </div>
                  <div class="col-xl-6 col-12 mt-auto mb-auto">
                    <h5 class="card-title">Core Java</h5>
                    <p class="card-text m-0 p-0">5 Java Courses</p>
                  </div>
                  <div class="col-xl-3 col-12 mt-auto mb-auto">
                    <a href="#" class="btn btn-primary">Courses</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>



      <div class="container mt-2">
        <div class="row">
          <div class="col-xl-4 col-sm-3 col-12">
            <div class="card">
              <div class="card-content">
                <div><h1 style={{
                  textAlign: "center",
                  textDecoration: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: 4
                }}>  Students Score </h1></div>

                <div style={{ width: "100%", height: 370 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                      <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                      <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-8 col-12">
            <div class="card" >
              <div class="card-content" style={{ backgroundColor: "rgba(128,191,255,0.5)", }}>
                <h1 class="p-3"><span style={{
                  fontSize: "22px",
                  fontWeight: "lighter",
                  margin: 4,
                }}>Popular Courses</span><span style={{ float: "right", }}></span></h1>
              </div>
            </div>
            <Carousel>
              <Carousel.Item >
                <center><img src={Courses} height="600px" width="600vw" alt="bg1" border-radius="50%" /></center>
              </Carousel.Item>
              <Carousel.Item>
                <center> <img src={Courses1} height="600px" width="550px" alt="bg1" /></center>
              </Carousel.Item>
              <Carousel.Item>
                <center><img src={Courses2} height="500px" width="550px" alt="bg1" /></center>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TeacherDashboardContent
