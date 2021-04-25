import React from "react";

import "./SkillItem.css";

const SkillItem = (props) => {
  return (
    <div className="skills tooltip">
      <img src={props.image} alt={props.name} />
      <span className="tooltiptext">{props.name}</span>
    </div>
  );
};

export default SkillItem;
