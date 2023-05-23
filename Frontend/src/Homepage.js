import React from 'react'
import Nav from './Components/Nav';
import { Outlet } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import HeroSlider from './Components/HeroSlider';
import { Testimonial } from './Components/Testimonial';
import { Features } from './Components/Features'
import Footer from './Components/Footer';

const Homepage = () => {
    return (
        <main>
            <Nav />
            <Outlet/>
            <section className="landingpage bg-transparent">

                <HeroSlider />

                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </section >

            <Features />

            <section className="bg-transparent">
                <h1 style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>Popular Courses</h1>
                <div className=" container coursecontainer overflow-hidden">

                    <div className="coursecard">
                        <div className="face face1">
                            <div className="coursecontent">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                                <h3>Code</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="coursecontent">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="coursecard">
                        <div className="face face1">
                            <div className="coursecontent">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                                <h3>Code</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="coursecontent">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="coursecard">
                        <div className="face face1">
                            <div className="coursecontent">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                                <h3>Launch</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="coursecontent">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="homepage_thought bg-transparent">
                <figure className="fancy-quote">
                    <div className="container thought">
                        <blockquote><p>The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.  <br /><i>- Brian Herbert</i></p></blockquote>
                    </div>
                </figure>
            </section>

            <section className="steps bg-transparent" style={{
                padding: "70px 0px"
            }}>
                <h1 style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>5 Easy Steps To Follow</h1>
                <div className="px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                <h1 style={{fontSize: "20px", fontWeight: "bold", letterSpacing: "2px"}}>STEP 1</h1>
                                    <p style={{fontSize: "18px", marginTop: "2px"}}>First step is to register yourself with our application.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                <h1 style={{fontSize: "20px", fontWeight: "bold", letterSpacing: "2px"}}>STEP 2</h1>
                                    <p style={{fontSize: "18px", marginTop: "2px"}}>Then find your favorite course to complete and enroll in it.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <circle cx="12" cy="5" r="3"></circle>
                                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                <h1 style={{fontSize: "20px", fontWeight: "bold", letterSpacing: "2px"}}>STEP 3</h1>
                                    <p style={{fontSize: "18px", marginTop: "2px"}}>You can choose and select as many courses as you can and enroll in it.</p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                <h1 style={{fontSize: "20px", fontWeight: "bold", letterSpacing: "2px"}}>STEP 4</h1>
                                    <p style={{fontSize: "18px", marginTop: "2px"}}>Complete the course and earn a certificate of approval.</p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                <h1 style={{fontSize: "20px", fontWeight: "bold", letterSpacing: "2px"}}>FINISH</h1>
                                    <p style={{fontSize: "18px", marginTop: "2px"}}>Learn at your own pace and get certified from our well educated trainers.</p>
                                </div>
                            </div>
                        </div>
                        <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 steps-img" src="https://cdn.pixabay.com/photo/2016/11/08/05/10/students-1807505_960_720.jpg" alt="step" />
                    </div>
                </div>
            </section>

            <Testimonial />

            <Footer />
        </main>
    )
}

export default Homepage;
