import React, { useState } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Cards from "./components/Cards/Cards";

let cardsList = [
  {
    projectName: "Ghibli Film",
    projectDescription: "Ghibli Film Adventure",
    link: "https://lingling-tabuteau-movie-list.herokuapp.com/",
    img: "./images/ghibli.png",
    status: "done",
  },
  {
    projectName: "Game Dice",
    projectDescription: "Funny small game Just have fun Enjoy your game",
    link: "https://game-dice-lingling-tabuteau.herokuapp.com/",
    img: "./images/dice_.jpg",
    status: "done",
  },
  {
    projectName: "Budget Management",
    projectDescription: "simple way to manage your budget",
    link: "https://budget-project-ltabuteau.herokuapp.com/",
    img: "./images/budget.jpg",
    status: "done",
  },
  {
    projectName: "Site Vitrine ANEKO - ongoning",
    projectDescription: "site vitrine for start-up ANEKO",
    link: "ongoning",
    img: "./images/site-vitrine.jpeg",
    status: "ongoing",
  },
  {
    projectName: "Sharing your experiences",
    projectDescription: "Anonymous social network - ongoing",
    link: "ongoning",
    img: "./images/sharing.jpeg",
    status: "ongoing",
  },
  {
    projectName: "E-commerce site - ongoning",
    projectDescription: "E-commerce site - ongoing",
    link: "ongoning",
    img: "./images/e-commerce.jpeg",
    status: "ongoing",
  },
  {
    projectName: "Linkedin Lingling Tabuteau",
    projectDescription:
      "More information about my career. Don't hesite to contact me if my profil is intering for you",
    link: "https://www.linkedin.com/in/lingling-tabuteau/",
    img: "./images/linkedin_.jpg",
    status: "done",
  },
  {
    projectName: "Next Adventure ...",
    projectDescription:
      "Eager to continue my following adventures with you ˆ-ˆ",
    link: "ongoning",
    img: "./images/dice.jpg",
    status: "ongoing",
  },
];

const App = (props) => {
  // array destructuring
  const [cardState, setCardState] = useState(cardsList);

  const filterCardsHandler = (status) => {
    let filterCards = cardsList.filter((card) => card.status === status);
    setCardState(filterCards);
  };

  return (
    <div className="App">
      <Toolbar filterCards={filterCardsHandler} />
      <Cards cardsList={cardState} />
    </div>
  );
};

export default App;
