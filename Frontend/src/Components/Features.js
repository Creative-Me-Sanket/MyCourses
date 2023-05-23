import React from 'react'
import './Features.css'

export const Features = () => {
    return (
        <section className="container features_homepage bg-transparent">
            <div class="container-fluid mb-5">
                <div class="text-center mt-5">
                    <h1 style={{fontSize: "30px", fontWeight: "bold"}}>Our Services</h1>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="box">
                            <div class="our-services settings toggle-inner">
                                <div class="icon"> <img src="https://i.imgur.com/6NKPrhO.png" /> </div>
                                <h4>Discussion Forum</h4>
                                <p>One step away from solving your errors</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box">
                            <div class="our-services speedup toggle-inner">
                                <div class="icon"> <img src="https://i.imgur.com/KMbnpFF.png" /> </div>
                                <h4>Assessment</h4>
                                <p>Test Assessment to ensure and enhance your skills!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box">
                            <div class="our-services privacy toggle-inner">
                                <div class="icon"> <img src="https://i.imgur.com/AgyneKA.png" /> </div>
                                <h4>User Profile</h4>
                                <p>Have you own area to manage various course</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="box">
                            <div class="our-services backups toggle-inner">
                                <div class="icon"> <img src="https://i.imgur.com/vdH9LKi.png" /> </div>
                                <h4>Teacher Assistant</h4>
                                <p>Want to share your knowledge with others. Join us !!!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box">
                            <div class="our-services ssl toggle-inner">
                                <div class="icon"> <img src="https://i.imgur.com/v6OnUqu.png" /> </div>
                                <h4>Enhanced User Experience</h4>
                                <p>Fun and easy way to learn through roadmaps.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <div className="our-services database toggle-inner">
                                <div class="icon"> <img src="https://i.imgur.com/VzjZw9M.png" /> </div>
                                <h4>Report</h4>
                                <p>See your reports to track your own progress.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
