import React from "react";

import "./SocialItem.css";

const SocialItem = (props) => {
  return (
    <div className="SocialItem tooltip">
      <a href={props.link} target="_blank" rel="noreferrer">
        <i className={`fa fa-${props.icon} fa-2x`}></i>
      </a>
      <span className="tooltiptext">{props.name}</span>
    </div>
  );
};

export default SocialItem;
