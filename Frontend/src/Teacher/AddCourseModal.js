import React, { useState, useEffect } from 'react'
import { Link, useLocation, } from 'react-router-dom';
import avtar from "../Assets/avtar.png";
import "../Components/Modal.css"
import TextInput from '../Components/TextInput';
import AddCourseSection from './AddCourseSection';
import headerImg from '../Assets/addCourseHeaderImg.png'

const AddCourseModal = (props) => {
    const [course, setCourse] = useState({
        title: "",
        instructor: "",
        description: "",
        category: "",
        duration: "",
        thumbnail: "",
        rating: "",
        success: false
    });

    useEffect(() => {
        setCourse({ ...course })
        console.log(course);
    }, [])

    const handleChange = (name, event) => {
        //event.preventDefault();
        setCourse({ ...course, [name]: event.target.value })
        console.log(course);
    }

    const [section, setSection] = useState({
        title: [],
    });
    
    const handleChangeSection = (name, event) => {
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

    const [sectionList, setSectionList] = useState([{ section: '' }])

    const addSection = (e) => {
        e.preventDefault()
        setSectionList([...sectionList, { section: '' }])
    }

    const deleteSection = (index) => {
        const newSections = [...sectionList];
        newSections.splice(index, 1);
        setSectionList(newSections)
        console.log('removed section')
    };

    const [videoInfo, setVideoInfo] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [{ items }, setItems] = useState({ items: [] });

    const addItem = () => {
        items.push(<div key={items.length}>{videoInfo}</div>);
        setItems({ items: [...items] });
    };

    const onClose = () => {
        setVideoInfo("");
        setExpanded(false);
    };

    const onAddVideo =(e) =>
    {
        setVideoInfo(e.target.value);
    }

    return (
        <div class="modal" id="addCourseModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: '100%' }}>
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content" style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                    <div class="modal-body">
                        <div className="bg-white bootstrap snippets bootdey p-3" style={{ borderRadius: "15px", width: "100%" }}>
                            <div class="row">
                                <div class="col mb-2">
                                    <img src="https://i.pinimg.com/originals/17/a6/e4/17a6e4f616cc9bff4b8a76b2f1f27bba.jpg" alt="header" style={{ height: "28vh", width: "100%" }} />
                                </div>
                                <form>
                                    <TextInput value={course.title} onChange={e => handleChange("title", e)} placeholder="Enter Course Title" inputStyle={{ height: '6vh' }} label="Course Title" name="title" />
                                    <TextInput value={course.description} onChange={e => handleChange("description", e)} placeholder="Enter Course Decsription" inputStyle={{ height: '6vh' }} label="Course Description" name="description" />
                                    <button style={{ width: '100%', display: 'block', marginBottom: '10px' }} className="btn btn-primary btn-block" onClick={addSection}>
                                        Add Section
                                    </button>
                                </form>
                            </div>
                        </div>
                        {sectionList.map((singleSection, index) => (
                            <div key={index}>
                                <div className="bg-white bootstrap snippets bootdey p-3 mt-2" style={{ borderRadius: "15px", width: "100%" }}>
                                    <div class="row">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Add Section Details</h5>
                                            <button onClick={() => deleteSection(index)} class="btn-close" aria-label="Close"></button>
                                        </div>
                                        <TextInput value={section.title[index]} onChange={e => {
                                            console.log("--------BEFORE---------")
                                            console.log(section)
                                            
                                            setSection({...section,title:section.title[index]=e.target.val})
                                            console.log("--------AFTER---------")
                                            console.log(section)
                                        }} placeholder="Enter Section Title" inputStyle={{ height: '6vh' }} label="Section Title" name="title" />
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <div class="row">
                                                <div class="col">
                                                    <button class="bg bg-primary mt-2" style={{ color: "white", width: "160px", height: "30px" }} onClick={() => setExpanded(!expanded)}>Add Video</button>
                                                </div>
                                                <div class="col">
                                                    <button class="bg bg-primary mt-2" style={{ color: "white", width: "160px", height: "30px" }}>Add Quiz</button>
                                                </div>
                                                <div class="col">
                                                    <button class="bg bg-primary mt-2" style={{ color: "white", width: "160px", height: "30px" }}>Add MCQ Quiz</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            Videos
                                            {items}
                                        </div>
                                        {expanded && <div class="row">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add Video Details</h5>
                                                <button onClick={ onClose }class="btn-close" aria-label="Close"></button>
                                            </div>
                                            <div class="col">
                                                <TextInput value={videoInfo} onChange={onAddVideo} placeholder="Enter Video Title" inputStyle={{ height: '6vh' }} name="video title" />
                                            </div>
                                            <div class="col mt-auto mb-auto">
                                                <button class="bg bg-primary mt-2" style={{ color: "white", width: "160px", height: "30px" }} onClick={videoUpload}>Upload Video</button>
                                                <input type="file" style={{ display: 'none' }} accept="video/mp4,video/x-m4v,video/*" name="file" onChange={onChange} id="selectVideo" />
                                            </div>
                                            <div class="col mt-auto mb-auto">
                                                <button class="bg bg-primary mt-2" style={{ color: "white", width: "160px", height: "30px" }} onClick={ () => {addItem(); onClose();}}disabled={videoInfo.length < 1}>Add</button>
                                            </div>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourseModal