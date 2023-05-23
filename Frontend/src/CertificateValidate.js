import React from 'react';
import Nav from './Components/Nav';
import Certificate from './Assets/Certificate2.jpg';
import  Button  from './Components/Button';

const CertificateValidate = () => {
    return (
        <React.Fragment>
            {/* <Nav /> */}
            <section className='president' >
                <div class="row">
                    <div class="col-md-8  col-sm-6 col-xs-12">
                        <div class="flex justify-center items-center">
                            <a class="cursor-pointer" >
                                <div class="hover:scale-105 transform transition-all duration-500">
                                    <img class="h-30 rounded-lg img-fluid shadow-lg" src={Certificate} alt="image" style={{ widht: "1000px", height: "auto" }} />
                                    <p class="lead mt-4" style={{ fontWeight: "400" }}>This certificate above verifies that <span class="text-primary" style={{ fontWeight: "500" }}>Siddhesh Ulhas Pathak</span> successfully completed the <span class="text-primary" style={{ fontWeight: "500" }}>Python and Data Analytics Nandani</span> on the date given on the certificate above. This certificate indicates that the entire Python and Data Analytics Nandani was completed by the student.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        {/* <a class="cursor-pointer" >
                            <div class="hover:scale-105 transform transition-all duration-500">
                                <Button   className="btn-outline-success certifybtn" name="Download" style={{
                                    width: "auto",
                                    fontSize: "18px",
                                    backgroundColor: "#ffffff", 
                                    border: "1px solid #80BFFF",
                                    color: "#80BFFF"
                                }}>Download</Button>
                               
                            </div>
                        </a>                         */}
                        <div>
                            <div className="inline-btn-container">
                                <span>
                                    <div>
                                        <a class="cursor-pointer" >
                                            <div class="hover:scale-105 transform transition-all duration-500">
                                                <Button className="btn-outline-success certifybtn" name="Download" style={{
                                                    width: "auto",
                                                    fontSize: "18px",
                                                    backgroundColor: "#ffffff",
                                                    border: "1px solid #80BFFF",
                                                    color: "#80BFFF"
                                                }}>Download</Button>

                                            </div>
                                        </a>
                                    </div>
                                </span>
                            </div>
                            <div className="inline-btn-container">
                                <span className="overlay-with-pointer">
                                    <div>
                                        <Button className="btn-outline-success certifybtn" name="Share" style={{
                                            textAlign: "center",
                                            width: "auto",
                                            fontSize: "18px",
                                            backgroundColor: "#ffffff",
                                            border: "1px solid #80BFFF",
                                            color: "#80BFFF"
                                        }}>Share</Button>
                                        <span id="share-container"></span>
                                        <span id="share-popover-container" className="hidden">
                                            <a target="_blank" href="https://twitter.com/intent/tweet?url=http://courses.learncodeonline.in/learn/certificate/1713539-82228&amp;text=My+course+completion+certificate+for+%22Complete React Native Mobile App developer - Build 10 apps%22" rel="noopener noreferrer" className="btn-media twitter">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a target="_blank" href="https://www.facebook.com/dialog/feed?app_id=466796236999828&amp;display=popup&amp;link=http://courses.learncodeonline.in/learn/certificate/1713539-82228&amp;redirect_uri=https://www.facebook.com&amp;picture=https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/82228/1713539_82228.png&amp;link=http://courses.learncodeonline.in/learn/certificate/1713539-82228&amp;redirect_uri=http://courses.learncodeonline.in/learn/certificate/1713539-82228" rel="noopener noreferrer" className="btn-media facebook">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a target="_blank" href="https://www.linkedin.com/shareArticle?source=&amp;smp;summary=My+course+completion+certificate+for+%22Complete React Native Mobile App developer - Build 10 apps%22&amp;url=http://courses.learncodeonline.in/learn/certificate/1713539-82228&amp;title=Complete React Native Mobile App developer - Build 10 apps&amp;mini=true&amp;title=My+course+completion+certificate+for+%22Complete React Native Mobile App developer - Build 10 apps%22&amp;summary=My+course+completion+certificate+for+%22Complete React Native Mobile App developer - Build 10 apps%22" rel=" noopener noreferrer" className="btn-media linkedin">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default CertificateValidate
