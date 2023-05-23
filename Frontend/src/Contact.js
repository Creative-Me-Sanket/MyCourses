import React from 'react';
import Nav from './Components/Nav';
import HomeImg from './Assets/dyp.jpg';
import './Contact.css';
import  Button  from './Components/Button';
import TextInput from './Components/TextInput'
import TextArea from './Components/TextArea'
import Footer from './Components/Footer';


const Contact = () => {
    return (
        <React.Fragment>
            <div className="main" style={{ backgroundImage: `url(${HomeImg})` }}></div>
            <section>
                <div className="warpper">

                    <h2>Contact Us</h2>
                    <p>Interested in what we do? Let’s catch up over a cup of Coffee and discuss Work. Provide us your details below and we will get in touch with you within 2 working days. </p>
                </div>
            </section>
            <section className="contact">
                <h2 style={{ textAlign: 'center' }}>Get In Touch With US</h2>
                <p></p>
                <div className="row">
                    <div className="col-md-6">
                    
                       
                            <div className="form-box">
                                <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
                                <form action="">
                                    <div className="form-item">
                                        <TextInput name="fullname" className='form-item' required="true" placeholder="Full Name" 
                                       style={{ border: "1px solid rgb(128, 191, 255)", borderRadius : "5px",textAlign: "unset",
                                           height: "7vh",width:"100%"}} />
                                    </div>
                                    <div className="form-item">
                                        <TextInput name="email" className='form-item' required="true"  placeholder="Email" 
                                            style={{ border: "1px solid rgb(128, 191, 255)", borderRadius : "5px",textAlign: "unset",
                                           height: "7vh",width:"100%"}} 
                                        />
                                    </div>
                                    <div className="form-item">
                                        <TextInput name="mobile" className='form-item' required="true"  placeholder="Phone Number" 
                                            style={{ border: "1px solid rgb(128, 191, 255)", borderRadius : "5px",textAlign: "unset",
                                           height: "7vh",width:"100%"}} 
                                        />
                                    </div>
                                    <div className="form-item">
                                    <TextArea name="message" placeholder="Your Message" required="true"  style={{border: "2px solid rgb(128, 191, 255)",
                                        borderRadius: "5px",width: "100%",height: "30vh",fontSize:"1rem",padding:"10px"}} />
                                    </div>
                                    <div className="form-item">
                                    <Button
                                style={{ width: "100%", fontSize: "18px", backgroundColor: "#80BFFF", border: "1px solid #80BFFF", color: "#ffffff" }}
                                className="btn-outline-success"
                                name="Submit"
                            />
                                    </div>
                                </form>
                            </div>
                       
                    </div>
                    <div className="col-md-4">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.381673222643!2d73.75824831479008!3d18.64686117016656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e7aaaaaaab%3A0xeaf569250e87c658!2sD.%20Y.%20PATIL%20INSTITUTE%20OF%20MASTER%20OF%20COMPUTER%20APPLICATIONS!5e0!3m2!1sen!2sin!4v1638016346516!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                
            </section>
            <Footer/>
        </React.Fragment>
    )
}

export default Contact
