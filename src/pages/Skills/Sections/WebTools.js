import React from "react";

import SkillItem from "../../../shared/UIElements/SkillItem";
import herokuSkill from "../../../assets/skills/Heroku.png";
import clarifaiSkill from "../../../assets/skills/Clarifai.png";
import postmanSkill from "../../../assets/skills/Postman.png";
import fontawesomeSkill from "../../../assets/skills/FontAwesome.png";
import gcloudSkill from "../../../assets/skills/GoogleCloud.png";
import gfontsSkill from "../../../assets/skills/GoogleFonts.png";
import trelloSkill from "../../../assets/skills/Trello.png";
import diagramsSkill from "../../../assets/skills/Diagrams.png";
import githubSkill from "../../../assets/skills/GitHub.png";
import codepenSkill from "../../../assets/skills/CodePen.png";

const WebTools = () => {
  return (
    <>
      <SkillItem name="Heroku" image={herokuSkill} />
      <SkillItem name="Clarifai" image={clarifaiSkill} />
      <SkillItem name="Postman" image={postmanSkill} />
      <SkillItem name="Font Awesome" image={fontawesomeSkill} />
      <SkillItem name="Google Cloud Platform" image={gcloudSkill} />
      <SkillItem name="Google Fonts" image={gfontsSkill} />
      <SkillItem name="Trello" image={trelloSkill} />
      <SkillItem name="Diagrams / Draw.io" image={diagramsSkill} />
      <SkillItem name="GitHub" image={githubSkill} />
      <SkillItem name="Code Pen" image={codepenSkill} />
    </>
  );
};

export default WebTools;
