import React, { useEffect } from "react";

import ContentBox from "../../shared/ContentBox/ContentBox";
import LanguagesFrameworks from "./Sections/LanguagesFrameworks";
import Databases from "./Sections/Databases";
import WebTools from "./Sections/WebTools";
import IDEs from "./Sections/IDEs";
import GameDev from "./Sections/GameDev";
import ThreeDImageManip from "./Sections/3DImageManip";

import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("SkillsBG");

    let element = document.getElementById("MainHeader");
    element.style.background = "rgba(0, 0, 0, 0.9)";
    element.style.borderBottom = "1px solid #fff";

    return () => {
      document.body.classList.remove("SkillsBG");
    };
  }, []);

  return (
    <>
      <ContentBox>
        <h1>Languages{" & "}Frameworks</h1>
        <LanguagesFrameworks />

        <h2>Databases</h2>
        <Databases />

        <h2>Web Tools</h2>
        <WebTools />

        <h2>IDEs</h2>
        <IDEs />

        <h2>Game Development</h2>
        <GameDev />

        <h2>3D{" & "}Image Manipulation</h2>
        <ThreeDImageManip />
      </ContentBox>
    </>
  );
};

export default Skills;
