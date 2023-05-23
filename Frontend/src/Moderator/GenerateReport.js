import React, { useEffect, useState } from "react";
import ReactHTMLTableToExcel from '../Components/ReactHTMLTableToExcel';
import "./Table.css";
import {useNavigate} from 'react-router-dom'
import AkrdiEduComplex from "../Assets/dyp.jpg";
const GenerateReport = () => {
  
    var totals={
        colleges:0,
        directors:0,
        teachers:0,
        students:0,
        courses:0
    };
    const increamentVals = (itm)=>{
        totals = {...totals,
            colleges:totals.colleges+1,
            directors:totals.directors+1,
            teachers:totals.teachers+itm.teachers,
            students:totals.teachers+itm.students,
            courses:totals.teachers+itm.courses
          }
    }
  const CollegeList = [
    {
      name: "D. Y. Patil International University",
      director: "Dr. Khule",
      teachers: 54,
      students: 5569,
      courses: 90
    },
    {
      name:
        "D .Y. Patil Institute of Master Computer Applications and Management.",
      director: "K. Niramala",
      teachers: 26,
      students: 972,
      courses: 52
    },
    {
      name: "Dr. D. Y. Patil College of Agriculture Business Management.",
      director: "Ritu Kataria",
      teachers: 34,
      students: 453,
      courses: 89
    },
    {
      name:
        "Dr. D. Y. Patil Institute of Engineering, Management and Research.",
      director: "Nayana Dhawade",
      teachers: 38,
      students: 784,
      courses: 24
    },
    {
        name:
          "Dr. D. Y. Patil College of Pharmacy.",
        director: "Libina Pappachan",
        teachers: 87,
        students: 915,
        courses: 50
      }
  ];
  return (
    <div>
      <br />
      <table className="container container-fluid" id="table-to-xls">
        <thead>
          <tr class="table-headers">
            <th colspan="2">Name</th>
            <th>Director</th>
            <th>No. of Teachers</th>
            <th>No. of Students</th>
            <th>No. of Courses</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {CollegeList.map((itm, ind) => {
            increamentVals(itm);
            return (
              <tr key={ind}>
                <td colspan="2">{itm.name}</td>
                {/* <th class="mobile-header">Director</th> */}
                <td>{itm.director}</td>
                {/* <th class="mobile-header">No. of Teachers</th> */}
                <td>{itm.teachers}</td>
                {/* <th class="mobile-header">No. of Students</th> */}
                <td>{itm.students}</td>
                {/* <th class="mobile-header">No. of Courses</th> */}
                <td>{itm.courses}</td>
                {/* <th class="mobile-header">Action</th> */}
                <td style={{textAlign:'center'}}>
                <button class="btn btn-primary" ><i class="bi bi-pencil-fill" style={{fontSize:'20px',color:'white'}}></i></button>
                <button class="btn btn-danger"><i class="bi bi-trash" style={{fontSize:'20px',color:'white'}}></i></button>
                </td>
              </tr>
            );
          })}
            <tr className="total">
                <td style={{textAlign:'left'}}>Totals</td>
                <td>{totals.colleges}</td>
                <td>{totals.directors}</td>
                <td>{totals.teachers}</td>
                <td>{totals.students}</td>
                <td>{totals.courses}</td>
                <td style={{textAlign:'center'}}>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-success"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="  Export as Excel">
                </ReactHTMLTableToExcel>
                </td>
            </tr>
        </tbody>
      </table>
      <br/>
    </div>
  );
};

export default GenerateReport;
