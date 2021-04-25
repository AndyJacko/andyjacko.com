import React from "react";

import SkillItem from "../../../shared/UIElements/SkillItem";
import mayaSkill from "../../../assets/skills/Maya.png";
import maxSkill from "../../../assets/skills/3DSMax.png";
import blenderSkill from "../../../assets/skills/Blender.png";
import photoshopSkill from "../../../assets/skills/Photoshop.png";
import illustratorSkill from "../../../assets/skills/Illustrator.png";
import gimpSkill from "../../../assets/skills/GIMP.png";

const ThreeDImageManip = () => {
  return (
    <>
    <SkillItem name="Maya" image={mayaSkill} />
    <SkillItem name="3DS Max" image={maxSkill} />
    <SkillItem name="Blender" image={blenderSkill} />
    <SkillItem name="Adobe Photoshop" image={photoshopSkill} />
    <SkillItem name="Adobe Illustrator" image={illustratorSkill} />
    <SkillItem name="GIMP" image={gimpSkill} />
    </>
  );
};

export default ThreeDImageManip;
