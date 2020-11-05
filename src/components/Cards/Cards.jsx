import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const cardsList = [
  {
    projectName: "Ghibli Film",
    projectDescription: "Ghibli Film Adventure",
    link: "https://lingling-tabuteau-movie-list.herokuapp.com/",
    img: "./images/ghibli.png",
  },
  {
    projectName: "Game Dice",
    projectDescription: "Funny small game Just have fun Enjoy your gameˆ-ˆ",
    link: "https://game-dice-lingling-tabuteau.herokuapp.com/",
    img: "./images/dice_.jpg",
  },
  {
    projectName: "Budget Management",
    projectDescription: "simple way to manage your budget",
    link: "https://budget-project-ltabuteau.herokuapp.com/",
    img: "./images/budget.jpg",
  },
  {
    projectName: "Site Vitrine ANEKO - ongoning",
    projectDescription: "site vitrine for start-up ANEKO",
    link: "ongoning",
    img: "./images/dice.jpg",
  },
  {
    projectName: "Sharing your experiences",
    projectDescription: "Anonymous social network - ongoing",
    link: "ongoning",
    img: "./images/dice.jpg",
  },
  {
    projectName: "E-commerce site - ongoning",
    projectDescription: "E-commerce site - ongoing",
    link: "ongoning",
    img: "./images/e-commerce.jpeg",
  },
  {
    projectName: "Linkedin Lingling Tabuteau",
    projectDescription: "Hope to continue my following adventures with you ˆ-ˆ",
    link: "https://www.linkedin.com/in/lingling-tabuteau/",
    img: "./images/linkedin_.jpg",
  },
  {
    projectName: "Next Adventure ...",
    projectDescription: "Hope to continue my following adventures with you ˆ-ˆ",
    link: "ongoning",
    img: "./images/dice.jpg",
  },
];

const Cards = () => {
  return (
    <div className="Cards">
      {cardsList.map((card) => (
        <Card
          projectName={card.projectName}
          projectDescription={card.projectName}
          link={card.link}
          img={card.img}
        />
      ))}
      {/* <Card
        projectName="Ghibli Film"
        projectDescription="Ghibli Film Adventure"
        link="https://lingling-tabuteau-movie-list.herokuapp.com/"
        img="./images/ghibli.jpeg"
      />
      <Card
        projectName="Game Dice"
        projectDescription="Funny small game Just have fun Enjoy your gameˆ-ˆ"
        link="https://game-dice-lingling-tabuteau.herokuapp.com/"
        img="./images/dice.jpg"
      />
      <Card
        projectName="Budget Management"
        projectDescription="simple way to manage your budget"
        link="https://budget-project-ltabuteau.herokuapp.com/"
        img="./images/budget.jpg"
      />
      <Card
        projectName="Site Vitrine ANEKO - ongoning"
        projectDescription="site vitrine for start-up ANEKO"
        link="ongoning"
        img="./images/dice.jpg"
      />
      <Card
        projectName="E-commerce site - ongoning"
        projectDescription="E-commerce site - ongoing"
        link="ongoning"
        img="./images/e-commerce.jpeg"
      />
      <Card
        projectName="Sharing your experiences"
        projectDescription="Anonymous social network - ongoing"
        link="ongoning"
        img="./images/dice.jpg"
      />
      <Card
        projectName="Linkedin Lingling Tabuteau"
        projectDescription="Hope to continue my following adventures with you ˆ-ˆ"
        link="https://www.linkedin.com/in/lingling-tabuteau/"
        img="./images/dice.jpg"
      />
      <Card
        projectName="Next Adventure ..."
        projectDescription="Hope to continue my following adventures with you ˆ-ˆ"
        link="ongoning"
        img="./images/dice.jpg"
      /> */}
    </div>
  );
};

export default Cards;
