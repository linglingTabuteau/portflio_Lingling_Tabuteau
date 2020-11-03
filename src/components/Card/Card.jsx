import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div class="card Card" style={{ width: "18rem" }}>
      <img src="..." class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">{props.projectName}</h5>
        <p class="card-text">{props.projectDescription}</p>
        <a href={props.link} target="_blank" class="btn btn-info btn-color">
          Go to Project
        </a>
      </div>
    </div>
  );
};

export default Card;
