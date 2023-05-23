import React from "react";
import Card from "./Components/Card";
import Nav from "./Components/Nav";
import SearchBar from "./Components/SearchBar";

const CourseList = () => {
  return (
    <div>
        <SearchBar style={{marginTop:'2vh'}}/>
        <br/>
        <div className="container">
            <div className="row gy-5">
                <Card className="col-md-4"/>
                <Card className="col-md-4"/>
                <Card className="col-md-4"/>
                <Card className="col-md-4"/>
                <Card className="col-md-4"/>
                <Card className="col-md-4"/>
                <Card className="col-md-4"/>
                <Card className="col-md-4"/>
                <Card className="col-md-4"/>
                <Card className="col-md-4"/>
            </div>
        </div>
    </div>
  );
};

export default CourseList;
