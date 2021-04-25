import React from "react";

import "./ContentBox.css";

const ContentBox = (props) => {
  const copyDate = new Date().getFullYear();
  return (
    <>
      <div className="CBContainer">
        <div className="content">{props.children}</div>
        <div className="footer">
          <p>Andy Jacko © {copyDate}. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default ContentBox;
