import React, { useState } from "react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawerLinks from "./SideDrawerLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import Header from "./Header";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <SideDrawerLinks onRouteChange={props.onRouteChange} />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="main-navigation__title">
          <Header onRouteChange={props.onRouteChange} />
        </div>

        <nav className="main-navigation__header-nav">
          <NavLinks onRouteChange={props.onRouteChange} />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
