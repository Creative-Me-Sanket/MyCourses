import { React, useState, useEffect } from 'react'
import { getHodDetails, getCollegeCount, getCourseCount, getStudentCount, getAdminCount, getTeacherCount, getMonthlyUserCount } from './Helper';
import Avtar from '../Assets/avtar.png';
import { isAuthenticated } from '../Auth/Helper';
import headerImg from '../Assets/dashboard_bg.svg'
import { Link, Outlet } from 'react-router-dom';
import CountUp from 'react-countup';
import AddCollegeModal from "./AddCollegeModal";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Label,
} from "recharts";

const ModeratorDashboardContent = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const data = isAuthenticated();
    setUser(data.user);
  }, [])

  const [courseCount, setCourseCount] = useState(0);
  useEffect(() => {
    getCourseCount().then((data) => {
      if (data.error) {
        setCourseCount(0);
      } else {
        setCourseCount(data.count);
      }
    }).catch((err) => console.log(err))
  }, [courseCount])

  const [adminCount, setAdminCount] = useState(0);
  useEffect(() => {
    getAdminCount().then((data) => {
      if (data.error) {
        setAdminCount(0);
      } else {
        setAdminCount(data.count);
      }
    }).catch((err) => console.log(err))
  }, [adminCount])

  const [teacherCount, setTeacherCount] = useState(0);
  useEffect(() => {
    getTeacherCount().then((data) => {
      if (data.error) {
        setTeacherCount(0);
      } else {
        setTeacherCount(data.count);
      }
    }).catch((err) => console.log(err))
  }, [teacherCount])

  const [studentCount, setStudentCount] = useState(0);
  useEffect(() => {
    getStudentCount().then((data) => {
      if (data.error) {
        setStudentCount(0);
      } else {
        setStudentCount(data.count);
      }
    }).catch((err) => console.log(err))
  }, [studentCount])

  const [monthlyUserCount, setMonthlyUserCount] = useState([]);
  useEffect(() => {
    getMonthlyUserCount().then((data) => {
      if (data.error) {
        setMonthlyUserCount([]);
      } else {
        setMonthlyUserCount(data);
      }
    }).catch((err) => console.log(err))
  }, [monthlyUserCount])

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
  const overallPassData = [
    { gender: 'Boys', percent: 44 },
    { gender: 'Girls', percent: 54 },
  ];
  return (
    <div>
      <div className="container container-fluid">
        <div className="row">
          <div className="col-xl-9 col-12">
            <div className="card" style={{ backgroundColor: "rgba(128,191,255,0.5)", borderRadius: "15px" }}>
              <div className="row no-gutters">
                <div className="col-sm-5">
                  <img className="card-img" style={{ height: "15vw" }} src={headerImg} alt="Header Image" />
                </div>
                <div className="col-sm-7">
                  <div className="card-body mt-4">
                    <h1 className="card-title mb-4" style={{ fontSize: "25px", fontWeight: "bolder" }}>Hello {user?.name} 👋, Welcome Back!</h1>
                    <p className="card-text" style={{ fontSize: "18px", margin: 0, padding: 0 }}>Education is the Passport to the Future, So Learn More and More</p>
                    <a href="##" className="sidebar-user" data-bs-toggle="modal" data-bs-target="#exampleModal"><button className="btn btn-primary mt-4">View Profile</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-12">
            <div className="card" style={{ backgroundColor: "rgba(128,191,255,0.5)" }}>
              <div className="card-header" style={{ backgroundColor: "rgba(128,191,255,0.9)", textAlign: "center", textDecoration: "center", fontSize: "22px" }}>Have more colleges to Add?</div>
              <div className="card-content d-flex flex-col justify-content-center p-3">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCollegeModal"> ➕ Add New College</button>
                <Outlet />
                <AddCollegeModal />
              </div>
            </div>
            {/* Add Discussion Forum Link */}
            <Link to="/">
              <div className="card mt-2" style={{ width: "100%" }} >
                <div className="card-header" style={{ backgroundColor: "rgba(128,191,255,0.9)", textAlign: "center", textDecoration: "center", fontSize: "22px" }}>Discussion Forum</div>
                <div className="card-body d-flex" style={{ backgroundColor: "rgba(128,191,255,0.5)", alignItems: "center", justifyContent: "center" }}>
                  {/* Add count of active dicusiion forum */}
                  <h5 className="card-title" style={{ fontSize: "26px" }}><CountUp end={25} duration={3} /></h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="container container-fluid mt-2">
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="danger text-danger">{courseCount}</h3>
                      <span className="danger text-danger">Courses</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-rocket text-danger font-large-2 float-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="text-success">{adminCount}</h3>
                      <span className="text-success">Admin</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-user text-success font-large-2 float-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="text-warning">{teacherCount}</h3>
                      <span className="text-warning">Teachers</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-pie-chart text-warning font-large-2 float-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="text-primary">{studentCount}</h3>
                      <span className="text-primary">Student</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-support text-primary font-large-2 float-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-xl-8 col-12">
            <div className="card">
              <div className="card-content">
                <div><h1 style={{
                  textAlign: "center",
                  textDecoration: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: 4
                }}> Monthly Progress </h1></div>

                <div style={{ width: "100%", height: 370 }}>
                  <ResponsiveContainer height="100%">
                    <AreaChart
                      data={monthlyUserCount}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month_year" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="users_registered" stroke='rgba(54, 162, 235, 1)' fill='rgba(54, 162, 235, 0.5)' />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

          </div>
          <div className="col-xl-4 col-12">
            <div className="card">
              <div className="card-content">
                <h1 className="p-3"><span style={{
                  fontSize: "22px",
                  fontWeight: "lighter",
                  margin: 4,
                }}>Best Instructors</span><span style={{ float: "right" }}><Link to="" >See All</Link></span></h1>
              </div>
            </div>
            <div className="card" >
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-3 col-12">
                    <img className="m-auto w-20 float-left" src={Avtar} alt="teacher 1"></img>
                  </div>
                  <div className="col-xl-5 col-12 mt-auto mb-auto">
                    <h5 className="card-title">Sarika Choudhary</h5>
                    <p className="card-text m-0 p-0">5 Design Course</p>
                  </div>
                  <div className="col-xl-3 col-12 mt-auto mb-auto">
                    <a href="#" className="btn btn-primary">Courses</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" >
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-3 col-12">
                    <img className="m-auto w-20 float-left" src={Avtar} alt="teacher 1"></img>
                  </div>
                  <div className="col-xl-5 col-12 mt-auto mb-auto">
                    <h5 className="card-title">Rahul Choudhary</h5>
                    <p className="card-text m-0 p-0">5 Android Course</p>
                  </div>
                  <div className="col-xl-3 col-12 mt-auto mb-auto">
                    <a href="#" className="btn btn-primary">Courses</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" >
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-3 col-12">
                    <img className="m-auto w-20 float-left" src={Avtar} alt="teacher 1"></img>
                  </div>
                  <div className="col-xl-5 col-12 mt-auto mb-auto">
                    <h5 className="card-title">Arati Patil</h5>
                    <p className="card-text m-0 p-0">5 DBMS Course</p>
                  </div>
                  <div className="col-xl-3 col-12 mt-auto mb-auto">
                    <a href="#" className="btn btn-primary">Courses</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="card">
              <div className="card-content">
                <h1 style={{
                  textAlign: "center",
                  textDecoration: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: 4
                }}> Top 5 College Performance </h1>
                <ResponsiveContainer width="100%" height="100%" aspect={2}>
                  <BarChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="college" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="users" stackId="a" fill="rgba(54, 162, 235, 0.5)" stroke='rgba(54, 162, 235, 1)' />
                    <Bar dataKey="courses" stackId="a" fill='rgba(75, 192, 192, 0.5)' stroke='rgba(75, 192, 192, 1)' />
                    <Bar dataKey="teachers" stackId="a" fill='rgba(255, 99, 132, 0.5)' stroke='rgba(255, 99, 132, 1)' />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
          <div className="col-xl-6 col-12">
            <div className="card">
              <div className="card-content">
                <h1 style={{
                  textAlign: "center",
                  textDecoration: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: 4
                }}> Content Usage </h1>
                <ResponsiveContainer width="100%" height="100%" aspect={2}>
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 0
                    }}
                    padding={{ bottom: 0 }}
                  >

                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={false} />
                    <YAxis axisLine={false} tickLine={false} tick={false} />
                    <Tooltip />
                    <Legend />
                    <Line

                      dataKey="content"
                      stroke="#8884d8"
                      activeDot={{ r: 10 }}
                      strokeWidth={5}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="card">
              <div className="card-content">
                <h1 style={{
                  textAlign: "center",
                  textDecoration: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  margin: 4
                }}> Overall Pass percentage </h1>
                <ResponsiveContainer height="80%" aspect={2}>
                  <PieChart width={400} height={400}>
                    <Pie
                      data={overallPassData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={50}
                      dataKey="percent"
                      nameKey="gender"
                    >
                      {data.map((entry, index) => {
                        if (index === 1) {
                          return <Cell key={`cell-${index}`} fill="#8884d8" />;
                        }
                        return <Cell key={`cell-${index}`} fill="rgba(75, 192, 192, 1)" />;
                      })}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="card bg bg-warning text-center justify-center fw-bold h-20 mt-2"><h1 style={{ fontSize: "22px", padding: 3 }}>250K+ Completed Course</h1></div>
            <div className="card bg bg-danger text-center justify-center fw-bold h-20 mt-2"><h1 style={{ fontSize: "22px", padding: 3 }}>200K+ Video Course</h1></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModeratorDashboardContent
