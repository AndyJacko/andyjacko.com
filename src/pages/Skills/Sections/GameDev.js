import React from "react";

import SkillItem from "../../../shared/UIElements/SkillItem";
import godotSkill from "../../../assets/skills/Godot.png";
import unitySkill from "../../../assets/skills/Unity3D.png";
import unrealSkill from "../../../assets/skills/Unreal.png";
import gamemakerSkill from "../../../assets/skills/GameMaker.png";

const GameDev = () => {
  return (
    <>
      <SkillItem name="Godot" image={godotSkill} />
      <SkillItem name="Unity 3D" image={unitySkill} />
      <SkillItem name="Unreal Engine" image={unrealSkill} />
      <SkillItem name="GameMaker Studio" image={gamemakerSkill} />
    </>
  );
};

export default GameDev;
