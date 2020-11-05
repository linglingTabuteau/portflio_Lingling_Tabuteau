import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div class="card Card" style={{ width: "18rem" }}>
      <img src={props.img} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.projectName}</h5>
        <p className="card-text">{props.projectDescription}</p>
        <a href={props.link} target="_blank" class="btn btn-info btn-color">
          Go to Project
        </a>
      </div>
    </div>
  );
};

export default Card;
