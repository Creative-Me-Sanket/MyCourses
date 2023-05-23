import React from "react";
import Img1 from "../Assets/CardThumbnail1.png";
const Card = (props) => {
  return (
      <div className={props.className||""} style={props.style||null}>
    <div class="card">
      <img src={Img1} class="card-img-top" alt="Thumbnail" />
      <div class="card-body">
        <h5 class="card-title" style={{textAlign:'center',fontSize:'25px'}}>{props.courseName}</h5>
        <p class="card-text">
          {props.courseDetails}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Card;
