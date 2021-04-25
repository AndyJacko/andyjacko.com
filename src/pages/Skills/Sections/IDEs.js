import React from "react";

import SkillItem from "../../../shared/UIElements/SkillItem";
import vscodeSkill from "../../../assets/skills/VSCode.png";
import goormSkill from "../../../assets/skills/Goorm.png";
import dreamweaverSkill from "../../../assets/skills/Dreamweaver.png";
import bracketsSkill from "../../../assets/skills/Brackets.png";
import notepadplusplusSkill from "../../../assets/skills/Notepad++.png";

const IDEs = () => {
  return (
    <>
      <SkillItem name="Virtual Studio Code" image={vscodeSkill} />
      <SkillItem name="Goorm IDE" image={goormSkill} />
      <SkillItem name="Adobe Dreamweaver" image={dreamweaverSkill} />
      <SkillItem name="Brackets" image={bracketsSkill} />
      <SkillItem name="Notepad++" image={notepadplusplusSkill} />
    </>
  );
};

export default IDEs;
