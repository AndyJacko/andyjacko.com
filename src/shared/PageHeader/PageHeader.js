import React from "react";
import Tilty from "react-tilty";
import andyjacko from "../../assets/andyjackored.png";

import "./PageHeader.css";

const PageHeader = () => {
  return (
    <div className="HeaderContainer">
      <Tilty>
        <img src={andyjacko} alt="Andy Jacko" />
        <p className="FTLOC">#ForTheLoveOfCode</p>
      </Tilty>
    </div>
  );
};

export default PageHeader;
