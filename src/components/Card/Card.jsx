import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div class="card Card" style={{ width: "18rem" }}>
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.projectName}</h5>
        <p class="card-text">{props.projectDescription}</p>
        <a href={props.link} target="_blank" class="btn btn-info btn-color">
          Go to Project
        </a>
      </div>
    </div>

    // <div class="card" style="width: 18rem;">
    // <img src="..." class="card-img-top" alt="...">
    // <div class="card-body">
    //   <h5 class="card-title">Card title</h5>
    //   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //   <a href="#" class="btn btn-primary">Go somewhere</a>
    // </div>
    // </div>
  );
};

export default Card;
