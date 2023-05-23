import React from 'react';
import { Carousel } from 'react-bootstrap';

export const HeroSlider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <div className="col-md-12  col-lg-12 landpage">
                    <p style={{
                        fontSize: "20px",
                        lineHeight: "2rem"
                    }}><h1 style={{
                        fontSize: "30px",
                        lineHeight: "2rem"
                    }}>Choose(Grab) a course, master it !!!</h1><br />
                        Enter in the world of learning, Unlock possibilities and develop a passion for learning with our advanced educator learning system.
                    </p></div>
                {/* <div className="col-md-5 col-lg-5 landpage blob">
                                    <img src={img1} alt="first img" />
                                </div> */}

            </Carousel.Item>
            <Carousel.Item>
                <div className="col-md-12  col-lg-12 landpage">
                    <p style={{
                        fontSize: "20px",
                        lineHeight: "2rem"
                    }}><h1 style={{
                        fontSize: "30px",
                        lineHeight: "2rem"
                    }}>It's time to make a change !!!</h1><br />
                        Enter in the world of learning, Unlock possibilities and develop a passion for learning with our advanced educator learning system.
                    </p></div>
                {/* <div className="col-md-5 col-lg-5 landpage blob">
                                    <img src={img2} alt="first img" />
                                </div> */}

            </Carousel.Item>
            <Carousel.Item>
                <div className="col-md-12  col-lg-12 landpage">
                    <p style={{
                        fontSize: "20px",
                        lineHeight: "2rem"
                    }}><h1 style={{
                        fontSize: "30px",
                        lineHeight: "2rem"
                    }}>Learn at your pace!!!</h1><br />
                        Enter in the world of learning, Unlock possibilities and develop a passion for learning with our advanced educator learning system.
                    </p></div>
                {/* <div className="col-md-5 col-lg-5 landpage blob">
                                    <img src={img3} alt="first img" />
                                </div> */}

            </Carousel.Item>
        </Carousel>
    )
}

export default HeroSlider;