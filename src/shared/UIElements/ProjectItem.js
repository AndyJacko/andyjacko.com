import React from "react";

import "./ProjectItem.css";

const ProjectItem = (props) => {
  let contentBox = null;
  if (props.left) {
    contentBox = (
      <>
        <div className="ProjectImage">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="ProjectInfo">
          <h2>{props.name}</h2>
          {props.children}
          <a href={props.url} rel="noreferrer" target="_blank">
            Website
          </a>
          {" / "}
          <a href={props.github} rel="noreferrer" target="_blank">
            GitHub Repo
          </a>
        </div>
      </>
    );
  } else {
    contentBox = (
      <>
        <div className="ProjectInfo">
          <h2>{props.name}</h2>
          {props.children}
          <a href={props.url} rel="noreferrer" target="_blank">
            Website
          </a>
          {" / "}
          <a href={props.github} rel="noreferrer" target="_blank">
            GitHub Repo
          </a>
        </div>
        <div className="ProjectImage">
          <img src={props.image} alt={props.name} />
        </div>
      </>
    );
  }

  return <div className="ProjectItem">{contentBox}</div>;
};

export default ProjectItem;
