import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="Cards">
      <Card
        projectName="Ghibli Film"
        projectDescription="Ghibli Film Adventure"
        link="https://lingling-tabuteau-movie-list.herokuapp.com/"
      />
      <Card
        projectName="Game Dice"
        projectDescription="Funny small game Think nothing Just have fun Enjoy your gameˆ-ˆ"
        link="https://game-dice-lingling-tabuteau.herokuapp.com/"
      />
      <Card
        projectName="Budget Management"
        projectDescription="simple way to manage your budget"
        link="https://budget-project-ltabuteau.herokuapp.com/"
      />
      <Card
        projectName="Site Vitrine ANEKO - ongoning"
        projectDescription="site vitrine for start-up ANEKO"
        link="ongoning"
      />
      <Card
        projectName="E-commerce site - ongoning"
        projectDescription="E-commerce site - ongoing"
        link="ongoning"
      />
      <Card
        projectName="Sharing your experiences"
        projectDescription="Anonymous social network - ongoing"
        link="ongoning"
      />
      <Card
        projectName="Linkedin Lingling Tabuteau"
        projectDescription="Hope to continue my following adventures with you ˆ-ˆ"
        link="https://www.linkedin.com/in/lingling-tabuteau/"
      />
      <Card
        projectName="Next Adventure ..."
        projectDescription="Hope to continue my following adventures with you ˆ-ˆ"
        link="ongoning"
      />
    </div>
  );
};

export default Cards;
