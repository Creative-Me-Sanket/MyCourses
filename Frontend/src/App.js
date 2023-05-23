import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import About from './About';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Contact from './Contact';
import CourseList from './CourseList';
import EnrolledCoursesList from './EnrolledCoursesList';
import Homepage from './Homepage';
import CollegesContent from './Moderator/CollegesContent';
import ModeratorDashboardContent from './Moderator/ModeratorDashboardContent';
import ModeratorDashboard from './Moderator/ModeratorDashboard';
import TestComponent from './TestComponent';
import AdminDashboardContent from './Admin/AdminDashboardContent';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherDashboardContent from './Teacher/TeacherDashboardContent';
import AdminDashboard from './Admin/AdminDashboard';
import CoursesContent from './Teacher/CoursesContent';
import StudentsContent from './Teacher/StudentsContent'
import CertificateValidate from './CertificateValidate';
import Upload from './VideoTests/Upload';
import Stream from './VideoTests/Stream';
import CertificateGenerateTest from './VideoTests/CertificateGenerateTest';
import TeachersContent from './Admin/TeachersContent'
import { isAuthenticated } from './Auth/Helper';
import AddCollege from './Moderator/AddCollege';
import EditAdmin from './Moderator/EditAdmin';
import UpdateCollege from './Moderator/UpdateCollege';
import ViewCollege from './Moderator/ViewCollege';
import CollegeAdmins from './Moderator/CollegeAdmins';
import ViewCollegeAdmins from './Moderator/ViewCollegeAdmins';
import ViewTeachers from './Admin/ViewTeachers';
import EditTeacher from './Admin/EditTeacher';
import EditStudent from './Teacher/EditStudent';
import ViewStudents from './Teacher/ViewStudents';
import CourseScreen from './CourseScreen';
import EnrolledCourses from './EnrolledCourses';
import PageNotFound from './PageNotFound';
import SiteUnderMaintenace from './SiteUnderMaintenance';
import StudentDashboard from './Student/StudentDashboard';
import StudentDashboardContent from './Student/StudentDashboardContent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="/Course" element={<CourseList />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route element={<PublicRoutes />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Route>
        </Route>

        <Route path="/Testing" element={<Homepage />}>
          <Route path="VideoUpload" element={<Upload />} />
          <Route path="CertificateGenerate" element={<CertificateGenerateTest />} />
          <Route path="VideoStream" element={<Stream />} />
          <Route path="CourseScreen" element={<CourseScreen />} />
          <Route path="EnrolledCoursesList" element={<EnrolledCoursesList />} />
          <Route path="CertificateValidate" element={<CertificateValidate />} />
        </Route>
        
        <Route element={<ProtectedRoutes />}>
          <Route element={<ModeratorRoutes />} >
            <Route path="/ModeratorDashboard" element={<ModeratorDashboard />}>
              <Route path="" element={<ModeratorDashboardContent />} />
              <Route path="Dashboard" element={<ModeratorDashboardContent />} />
              <Route path="Colleges" element={<CollegesContent />}>
                <Route path="" element={<ViewCollege/>}/>
                <Route path="AddCollege" element={<AddCollege/>}/>
                <Route path="UpdateCollege" element={<UpdateCollege/>}/>
              </Route>
              <Route path="Admins" element={<CollegeAdmins />}>
                  <Route path="ViewAdmins" element={<ViewCollegeAdmins/>}/>
                  <Route path="EditAdmin" element={<EditAdmin/>}/>
              </Route>
            </Route>
          </Route>
          <Route element={<AdminRoutes />} >
            <Route path="/AdminDashboard" element={<AdminDashboard />}>
              <Route path="" element={<AdminDashboardContent />} />
              <Route path="Dashboard" element={<AdminDashboardContent />} />
              <Route path="Teachers" element={<TeachersContent />}>
                  <Route path="" element={<ViewTeachers/>}/>
                  <Route path="ViewTeachers" element={<ViewTeachers/>}/>
                  <Route path="EditTeachers" element={<EditTeacher/>}/>
              </Route>
              <Route path="Courses" element={<CoursesContent />} />
            </Route>
          </Route>
          <Route element={<TeacherRoutes />} >
            <Route path="/TeacherDashboard" element={<TeacherDashboard />}>
              <Route path="" element={<TeacherDashboardContent />} />
              <Route path="Dashboard" element={<TeacherDashboardContent />} />
              <Route path="Courses" element={<CoursesContent />} />
              <Route path="Students" element={<StudentsContent />}>
                <Route path="" element={<ViewStudents/>}/>
                <Route path="ViewStudents" element={<ViewStudents/>}/>
                <Route path="EditStudents" element={<EditStudent />} />
              </Route>
            </Route>
          </Route>

          <Route element={<StudentRoutes />} >
            <Route path="/StudentDashboard" element={<StudentDashboard />}>
            <Route path="" element={<StudentDashboardContent />} />
              {/* <Route path="" element={<CourseScreen/>} /> */}
              <Route path="EnrolledCourses" element={<EnrolledCourses/>} />
            </Route>
          </Route>
        </Route>
        <Route path='*' exact={true} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const ProtectedRoutes = () => {
  const authenticated = isAuthenticated();
  return (
    authenticated ? <Outlet /> : <Navigate replace to="/Login" />
  )
}

const PublicRoutes = () => {
  const authenticated = isAuthenticated();
  return (
    !authenticated ? <Outlet /> : <Navigate replace to="/" />
  )
}

const ModeratorRoutes = () => {
  const authenticated = isAuthenticated();
  return (
    authenticated && authenticated.user.role === "moderator" ? <Outlet /> : <Navigate replace to="/" />
  );
}

const StudentRoutes = () => {
  const authenticated = isAuthenticated();
  return (
    authenticated && authenticated.user.role === "student" ? <Outlet /> : <Navigate replace to="/" />
  );
}

const TeacherRoutes = () => {
  const authenticated = isAuthenticated();
  return (
    authenticated && authenticated.user.role === "teacher" ? <Outlet /> : <Navigate replace to="/" />
  );
}


const AdminRoutes = () => {
  const authenticated = isAuthenticated();
  return (
    authenticated && authenticated.user.role === "admin" ? <Outlet /> : <Navigate replace to="/" />
  );
}


export default App;


