import React from "react";
import "./HorizontalCard.css";
import Progressbar from "./Progressbar";
const EnrolledCoursesCard = () => {
  return (
    <ul>
      <li class="card2">
        <a
          href="#"
          class="featured-image"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dgu7vsmfd/image/upload/v1544375649/NGA_Screenshot_510x365.jpg")'
          }}
        />
        <article class="card2-body">
          <header>
            <a href="utilidata-national-governors-association-meeting">
              <span class="pre-heading">Blog</span>
              <div class="title">
                <h3>Test this responsively to see the horizontal magik</h3>
              </div>
              <p class="meta">
                <span class="author">Utilidata</span>
                <span> | </span>
                <time class="updated" datetime="" itemprop="datePublished">
                  July 27, 2017
                </time>
              </p>
            </a>
          </header>
          <div style={{width:'100%'}}>
          <Progressbar progress={60}/>
          </div>
        </article>
      </li>
    </ul>
  );
};

export default EnrolledCoursesCard;
