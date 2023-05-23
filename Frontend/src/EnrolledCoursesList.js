import React from 'react'
import EnrolledCoursesCard from './Components/EnrolledCoursesCard'
import SearchBar from './Components/SearchBar'

const EnrolledCoursesList = (props) => {
    return (
        <div>
            <SearchBar  style={{marginTop:'2vh'}}/>
            <div className="container">
                <EnrolledCoursesCard />
                <EnrolledCoursesCard />
                <EnrolledCoursesCard />
                <EnrolledCoursesCard />
                <EnrolledCoursesCard />
                <EnrolledCoursesCard />
                <EnrolledCoursesCard />
            </div>
        </div>
    )
}

export default EnrolledCoursesList
