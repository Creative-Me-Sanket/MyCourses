import React, { useEffect, useState } from 'react'
import Accordion2 from './Components/Accordion2';
import Nav from './Components/Nav'
import Progressbar from './Components/Progressbar';
import TabBar from './Components/TabBar';
import Stream from './VideoTests/Stream';
import {useLocation} from 'react-router-dom'
const CourseScreen = () => {
    const location = useLocation();
    const [id,setId] = useState("621c5f139e963d36321acc64");
    
    useEffect(()=>{
        if(location.state!=undefined){
            setId(location.state)
            console.log(location.state);
        }else{
            setId("621c5f139e963d36321acc64")
        } 
        console.log(location.state); 
    },[location])
    var obj = [
        {
            section: "Before You Go Into The Course",
            videoList: [
                {
                    name: "01 Course Contents",
                    linkToVideo: "621c5f139e963d36321acc64",
                    linkToAttachment: ""
                }
            ],
            quiz: []
        },
        {
            section: "Basics of Java",
            videoList: [
                {
                    name: "01  Variables",
                    linkToVideo: "621c5e779e963d36321ac674",
                    linkToAttachment: ""
                },
                {
                    name: "02  Control Statement",
                    linkToVideo: "621c5e969e963d36321ac86e",
                    linkToAttachment: ""
                }
            ],
            quiz: []
        },
        {
            section: "Going one step further",
            videoList: [
                {
                    name: "01  Loops in Java",
                    linkToVideo: "621c5ec79e963d36321aca39",
                    linkToAttachment: ""
                },
                {
                    name: "01  Pattern Printing",
                    linkToVideo: "621c60039e963d36321acdaf",
                    linkToAttachment: ""
                }
            ],
            quiz: []
        },
        {
            section: "Arrays Introduction",
            videoList: [
                {
                    name: "01  Introduction to Recursion",
                    linkToVideo: "",
                    linkToAttachment: ""
                },
                {
                    name: "02  Classical Recursion Problem!",
                    linkToVideo: "",
                    linkToAttachment: ""
                },
                {
                    name: "03 Types of Recursion",
                    linkToVideo: "",
                    linkToAttachment: ""
                }
            ],
            quiz: []
        },
        {
            section: "Functions in Java",
            videoList: [
                {
                    name: "01  Introduction to Recursion",
                    linkToVideo: "",
                    linkToAttachment: ""
                },
                {
                    name: "02  Classical Recursion Problem!",
                    linkToVideo: "",
                    linkToAttachment: ""
                },
                {
                    name: "03 Types of Recursion",
                    linkToVideo: "",
                    linkToAttachment: ""
                }
            ],
            quiz: []
        }
    ];
    return (
        <div class="container-fluid">
            <div class="row p-3" style={{ backgroundColor: '#000033' }}>
                <div class="col-8">
                    <h4 style={{ fontSize: '18px', color: 'white' }}>Complete Java Bootcamp</h4>
                </div>
                <div class="col-4"><h4 style={{ textAlign: 'center', fontSize: '18px', color: 'white' }}>Course Content</h4></div>
            </div>
            <div class="row">
                <div class="col-8 p-0" style={{overflowY:'scroll',height:'650px'}}>
                    <Stream id={id}/>
                    <TabBar/>
                </div>
                <div class="col-4 p-0" style={{ height: '84.15vh' }}>
                    <div
                        style={{
                            backgroundColor: "#000033", padding: "3vh"
                        }}
                    >
                        <Progressbar progress={70}/>
                        <br />
                        <div>
                            {obj.map((itm, index) =>
                                <Accordion2 key={index} expand={false} data={itm} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseScreen