import React from 'react';
import HomeImg from './Assets/about.jpg';
import DYP from './Assets/dypp.jpg';
import './Contact.css';
import Sanjay from './Assets/Sanjay.jpg';
import Satej from './Assets/satej.jpg';
import Tejas from './Assets/Tejaspatil.jpg';
import Joshi from './Assets/joshi.jpg';
import Nirmala from './Assets/nirmala.png';
import Vision from './Assets/vision.png';
import Mission from './Assets/mission.png';
import Footer from './Components/Footer';

const About = () => {
    return (
        <React.Fragment>
            <div className="main" style={{ backgroundImage: `url(${HomeImg})` }}>
                <h2 style={{ textAlign: "center", color: "#fff", fontSize: "45px" }}> About Us</h2>
            </div>
            <section>
                <div className="warpper">
                    <h2>Welcome To DYPIMCAM</h2>
                    <p>D. Y. Patil Institute of Master of Computer Applications and Management is one of the premier institutes of Computer Application established during 2002 by Dr. D. Y. Patil Pratishthan. This institute has carved-out a special niche for imparting quality education to cater to the needs of community at large. Since its inception, the institute is striving in the pursuit of academic excellence and good governance. The institute is situated on the green and scenic campus of D. Y. Patil Pratishthan’s Educational Complex, Akurdi, Pune. The institute has state-of-the-art infrastructure with modern amenities to meet the current needs of the technical education.</p>
                </div>
            </section>

            <section className='president'>
                <div className="row">
                    <h2 style={{ textAlign: "Center" }}>Founder President Message</h2>
                    <center><img src={DYP}></img></center>
                    <p style={{ textAlign: "center" }}><b>His Excellency Padmashree Dr. D. Y. Patil</b><br />
                        (Ex-Governor, State of Bihar)<br />
                        Founder President of Dr. D. Y. Patil Pratishthan and D.Y. Patil Group</p>
                    <p>I am very proud to share that our Institute under D. Y. Patil Pratishthan's one of the most eminent Higher Educational Institution today and is renowned for standards of its Faculties, Students and Alumni. It is constantly pushing the frontiers of knowledge and ensures the futuristic approach that keeps pace with the changing trends of the professional world. It is a matter of pride and privilege for me to see all of you doing well as Teachers and Students. Let me remind you that, academic success has always been cherished tenfold when coupled with achievements in the various other non-academic arenas. I wish and hope that all of you continue with same zest and contribute nobly as future pillars of the nation.<br /> <b>I wish the students studying at D. Y. Patil Institute of Master of Computer Applications and Management all the very best in their future endeavours and grand success to the faculties in their efforts to impart excellent education. God Bless. </b></p>
                </div>
            </section>
            <section className='president' >
                <h2 style={{ textAlign: "Center" }}>Prestigious Member</h2><br />
                
                <div class="row-span-2">

                    <div class="grid grid-cols-3 px-10 gap-2">
                        <div class="flex justify-center items-center">
                            <a class="cursor-pointer" >
                                <div class="hover:scale-105 transform transition-all duration-500">
                                    <img class="h-30 rounded-lg" src={Sanjay} alt="image" style={{ widht: "250px", height: "300px" }} />
                                    <p style={{ textAlign: "center" }}><b>Hon. Dr. Sanjay D. Patil</b><br />
                                        President </p>
                                </div>
                            </a>
                        </div>
                        <div class="flex justify-center items-center">
                            <a class="cursor-pointer" >
                                <div class="hover:scale-105 transform transition-all duration-500">
                                    <img class="h-30 rounded-lg" src={Satej} alt="image" style={{ widht: "250px", height: "300px" }} />
                                    <p style={{ textAlign: "center" }}><b>Hon. Shri Satej D Patil</b><br />
                                        Vice President and Chairman </p>
                                </div>
                            </a>
                        </div>
                        <div class="flex justify-center items-center">
                            <a class="cursor-pointer" >
                                <div class="hover:scale-105 transform transition-all duration-500">
                                    <img class="h-30 rounded-lg" src={Tejas} alt="image" style={{ widht: "250px", height: "300px" }} />
                                    <p style={{ textAlign: "center" }}><b>Hon. Mr. Tejas Satej Patil</b><br />
                                        Trustee DR. D. Y. Patil Pratisthan </p>
                                </div>
                            </a>
                        </div>

                        <div class="flex justify-center items-center">
                            <a class="cursor-pointer" >
                                <div class="hover:scale-105 transform transition-all duration-500">
                                    <img class="h-30 rounded-lg" src={Joshi} alt="image" style={{ widht: "250px", height: "300px" }} />
                                    <p style={{ textAlign: "center" }}><b>Col. S. K. Joshi </b><br />
                                        Campus Director </p>
                                </div>
                            </a>
                        </div>
                        <div class="flex justify-center items-center">
                            <a class="cursor-pointer" >
                                <div class="hover:scale-105 transform transition-all duration-500">
                                    <img class="h-30 rounded-lg" src={Nirmala} alt="image" style={{ widht: "250px", height: "300px" }} />
                                    <p style={{ textAlign: "center" }}><b>Dr.K. Nirmala Kumaraswamy</b><br />
                                        Director</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </section>

            <section className='vision'>
                <div class="grid grid-cols-2 px-10 gap-2">
                    <div class="flex justify-center items-center">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src={Vision} alt="Our Vision" style={{width:"384px",height:"230px"}}/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Our Vision</div>
                                <p class="text-gray-700 text-base">
                                To facilitate vibrant learning environment which provides academic excellence, innovation, experiential learning, research and employability to students and hence contribute to the growth and development of society.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center items-center">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src={Mission} alt="Our Vision" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Our Mission</div>
                                <p class="text-gray-700 text-base">
                                To facilitate vibrant learning environment which provides academic excellence, innovation, experiential learning, research and employability to students and hence contribute to the growth and development of society.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default About
