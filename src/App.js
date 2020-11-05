import React, { useState } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Cards from "./components/Cards/Cards";

let cardsList = [
  {
    projectName: "Ghibli Film",
    projectDescription:
      "Full Stack Project on React, Redux, Node.js, REST API, and MySql",
    link: "https://lingling-tabuteau-movie-list.herokuapp.com/",
    img: "./images/ghibli.png",
    status: "done",
  },
  {
    projectName: "Game Dice",
    projectDescription: "Vanilla JavaScript, HTML, CSS",
    link: "https://game-dice-lingling-tabuteau.herokuapp.com/",
    img: "./images/dice_.jpg",
    status: "done",
  },
  {
    projectName: "Budget Management",
    projectDescription: "Vanilla JavaScript, HTML, CSS",
    link: "https://budget-project-ltabuteau.herokuapp.com/",
    img: "./images/budget.jpg",
    status: "done",
  },
  {
    projectName: "Site Vitrine ANEKO",
    projectDescription:
      "Showcase site for the start-up company ANEKO - ongoing",
    link: "ongoing",
    img: "./images/site-vitrine.jpeg",
    status: "ongoing",
  },
  {
    projectName: "Sharing your experiences",
    projectDescription: "Anonymous social network - ongoing",
    link: "ongoing",
    img: "./images/sharing.jpeg",
    status: "ongoing",
  },
  {
    projectName: "E-commerce site",
    projectDescription: "E-commerce site - ongoing",
    link: "ongoing",
    img: "./images/e-commerce.jpeg",
    status: "ongoing",
  },
  {
    projectName: "Linkedin Lingling Tabuteau",
    projectDescription:
      "More information about my career. Don't hesitate to contact me if my profile sounds interesting",
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
    let filterCards = cardsList.filter(
      (card) => !status || card.status === status
    );
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
