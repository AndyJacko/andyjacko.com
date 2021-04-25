import React from "react";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li
        onClick={() => props.onRouteChange("about")}
        className="f2 link no-underline grow pointer"
      >
        About
      </li>
      <li
        onClick={() => props.onRouteChange("skills")}
        className="f2 link no-underline grow pointer"
      >
        Skills
      </li>
      <li
        onClick={() => props.onRouteChange("projects")}
        className="f2 link no-underline grow pointer"
      >
        Projects
      </li>
      <li
        onClick={() => props.onRouteChange("contact")}
        className="f2 link no-underline grow pointer"
      >
        Contact
      </li>
    </ul>
  );
};

export default NavLinks;
