import React from 'react'
import './Testimonial.css'
import { Carousel } from 'react-bootstrap';

export const Testimonial = () => {
    return (
        <section class="testimonial text-center">
            <h1 className='heading'>Testimonial</h1>
            <Carousel>
                <Carousel.Item>
                    <div class="testimonial4_slide">
                        <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <h4>Client 1</h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="testimonial4_slide">
                        <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" /><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <h4>Client 2</h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="testimonial4_slide">
                        <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <h4>Client 3</h4>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>

    );
}