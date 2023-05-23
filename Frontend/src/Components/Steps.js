import React from "react";
import "./steps.css"
import girl from "../Assets/stepsgirl.png"

const Steps = () => {
    return (
        <React.Fragment>
            <div class="row">
                <h1 style={{textAlign: "center", fontWeight: "bolder", fontSize:"28px", margin: "2px"}}>Frequently Asked Questions</h1>
                <div class="col">

                    <div >
                        <div class="card-body">

                            <div id="content">
                                <ul class="timeline">

                                    <li class="event" data-date="">
                                        <h3>STEP 1</h3>
                                        <p>First step is to register yourself with our application.</p>
                                    </li>
                                    <li class="event" data-date="">
                                        <h3>STEP 2</h3>
                                        <p>Then find your favorite course to complete and enroll in it.</p>
                                    </li>
                                    <li class="event" data-date="">
                                        <h3>STEP 3</h3>
                                        <p>You can choose and select as many courses as you can and enroll in it.</p>
                                    </li>
                                    <li class="event" data-date="">
                                        <h3>STEP 4</h3>
                                        <p>Complete the course and earn a certificate of approval.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col stepsbg">
                    <img src={girl} alt="" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}/>                
                </div>

            </div>


        </React.Fragment>
    )
}

export default Steps;