import React, { useState, useEffect } from "react";
import TextInput from "../Components/TextInput";

const AddCourseSection = (props) => {
    const [section, setSection] = useState({
        title: "",
    });
    const handleChange = (name, event) => {
        //event.preventDefault();
        setSection({ ...section, [name]: event.target.value })
        console.log(section);
    }
    const [selectedFile, setSelectedFile] = useState();
    const onChange = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files);
    };

    const videoUpload = (e) => {
        document.getElementById('selectVideo').click()
    }


    return (
        <React.Fragment>
            <div className="bg-white bootstrap snippets bootdey p-3 mt-2" style={{ borderRadius: "15px", width: "100%" }}>
                <div class="row">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Section Details</h5>
                        <button onClick={props.deleteSection} class="btn-close" aria-label="Close"></button>
                    </div>
                    <TextInput value={section.title} onChange={e => handleChange("title", e)} placeholder="Enter Section Title" inputStyle={{ height: '6vh'}} label="Section Title" name="title" />
                    <div class="row ml-0 mr-0">
                        <div class="col-sm-4 col-12">
                        {/* <TextInput type="file" onChange={onChange}></TextInput> */}
                        <button class="bg bg-primary mt-2" style={{color: "white", width: "160px", height: "30px"}} onClick={videoUpload}>Upload Video</button>
                        <input type="file" style={{display: 'none'}} accept="video/mp4,video/x-m4v,video/*" name="file" onChange={onChange} id="selectVideo"/>
                        </div>
                        <div class="col-sm-4 col-12">
                        <button class="bg bg-primary mt-2" style={{color: "white", width: "160px", height: "30px"}}>Add Quiz</button>
                        </div>
                        <div class="col-sm-4 col-12">
                        <button class="bg bg-primary mt-2" style={{color: "white", width: "160px", height: "30px"}}>Add MCQ Quiz</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddCourseSection