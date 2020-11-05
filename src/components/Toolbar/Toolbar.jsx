import React from "react";
import "./Toolbar.css";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      {/* <DrawerToggle clicked={props.sideDrawerTogle} /> */}
      <div className="Logo">Logo</div>
      <nav>Projetcts Done</nav>
      <nav>On going projects</nav>
      <nav>All projects</nav>
    </header>
  );
};

export default Toolbar;
