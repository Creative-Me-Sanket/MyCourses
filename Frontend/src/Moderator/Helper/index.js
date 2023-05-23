export const AddNewCollege = (college) => {
    return (
        fetch("http://localhost:4000/college",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(college)
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const getAllColleges=()=>{
    return(
        fetch("http://localhost:4000/college/getall",
            {
                method: "GET"
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const AddAdminToCollege=(id,data)=>{
    return(
        fetch("http://localhost:4000/college/addadmin/"+id,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
} 



export const getCollege=(id)=>{
    return(
        fetch("http://localhost:4000/college/"+id,
            {
                method: "GET"
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const getHodDetails=(id)=>{
    return(
        fetch("http://localhost:4000/user/"+id,
            {
                method: "GET"
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const DeleteAdmin=(id)=>{
    return(
        fetch("http://localhost:4000/user/"+id,
            {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}
export const RemoveAdminFromCollege=(collegeId,data)=>{
    return(
        fetch("http://localhost:4000/college/removeadmin/"+collegeId,
            {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
} 
export const UpdateAdmin=(id,data)=>{
    return(
        fetch("http://localhost:4000/user/"+id,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const getCollegeCount=()=>{
    return(
        fetch("http://localhost:4000/collegesCount",
            {
                method: "GET",
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const getCourseCount=()=>{
    return(
        fetch("http://localhost:4000/coursesCount",
            {
                method: "GET",
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const getAdminCount=()=>{
    return(
        fetch("http://localhost:4000/adminsCount",
            {
                method: "GET",
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const getTeacherCount=()=>{
    return(
        fetch("http://localhost:4000/teachersCount",
            {
                method: "GET",
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const getStudentCount=()=>{
    return(
        fetch("http://localhost:4000/studentsCount",
            {
                method: "GET",
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}

export const getMonthlyUserCount=()=>{
    return(
        fetch("http://localhost:4000/monthlyUsersCount",
            {
                method: "GET",
            }
        ).then((res) => {
            return res.json()
        }).catch((err) => console.log(err))
    )
}
