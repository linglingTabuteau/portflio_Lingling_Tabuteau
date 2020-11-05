import React from "react";
import "./Toolbar.css";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      {/* <DrawerToggle clicked={props.sideDrawerTogle} /> */}
      {/* <div className="Logo"> */}
      <img className="Logo" src="./images/smiling-pig.png" alt="smiling-pig" />
      {/* </div> */}
      <nav onClick={() => props.filterCards("done")}>PROJECTS DONE</nav>
      <nav onClick={() => props.filterCards("ongoing")}>ON GOING PROJECTS</nav>
      <nav onClick={() => props.filterCards(null)}>ALL PROJECTS</nav>
    </header>
  );
};

export default Toolbar;
