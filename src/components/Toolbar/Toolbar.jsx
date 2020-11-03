import React from "react";
import "./Toolbar.css";
// import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      {/* <DrawerToggle clicked={props.sideDrawerTogle} /> */}
      <div className="Logo">Logo</div>
      <nav className="DesktopOnly">projetcts Done</nav>
      <nav className="DesktopOnly">On going projetcts</nav>
    </header>
  );
};

export default Toolbar;
