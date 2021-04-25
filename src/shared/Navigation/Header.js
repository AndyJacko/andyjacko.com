import React from "react";

import andyjacko from "../../assets/andyjackowhite.png";
import "./Header.css";

const Header = (props) => {
  return (
    <div
      id="logo"
      className="header pointer"
      onClick={() => props.onRouteChange("home")}
    >
      <img src={andyjacko} alt="Andy Jacko" />
    </div>
  );
};

export default Header;
