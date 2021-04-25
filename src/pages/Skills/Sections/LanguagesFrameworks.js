import React from "react";

import SkillItem from "../../../shared/UIElements/SkillItem";
import cSkill from "../../../assets/skills/C.png";
import cplusplusSkill from "../../../assets/skills/C++.png";
import csharpSkill from "../../../assets/skills/CSharp.png";
import basicSkill from "../../../assets/skills/BASIC.png";
import javaSkill from "../../../assets/skills/Java.png";
import phpSkill from "../../../assets/skills/PHP.png";
import aspSkill from "../../../assets/skills/ASP.png";
import pythonSkill from "../../../assets/skills/Python.png";
import typescriptSkill from "../../../assets/skills/TypeScript.png";
import sassSkill from "../../../assets/skills/Sass.png";
import css3Skill from "../../../assets/skills/CSS3.png";
import html5Skill from "../../../assets/skills/HTML5.png";
import javascriptSkill from "../../../assets/skills/JavaScript.png";
import jquerySkill from "../../../assets/skills/jQuery.png";
import nodeSkill from "../../../assets/skills/NodeJS.png";
import expressSkill from "../../../assets/skills/ExpressJS.png";
import reactSkill from "../../../assets/skills/ReactJS.png";
import nextSkill from "../../../assets/skills/NextJS.png";
import angularSkill from "../../../assets/skills/AngularJS.png";
import ajaxSkill from "../../../assets/skills/AJAX.png";
import jsonSkill from "../../../assets/skills/JSON.png";

import tachyonsSkill from "../../../assets/skills/Tachyons.png";
import bootstrapSkill from "../../../assets/skills/Bootstrap.png";
import semanticuiSkill from "../../../assets/skills/SemanticUI.png";
import wordpressSkill from "../../../assets/skills/Wordpress.png";

const LanguagesFrameworks = () => {
  return (
    <>
      <SkillItem name="C" image={cSkill} />
      <SkillItem name="C++" image={cplusplusSkill} />
      <SkillItem name="C#" image={csharpSkill} />
      <SkillItem name="BASIC" image={basicSkill} />
      <SkillItem name="Java" image={javaSkill} />
      <SkillItem name="PHP" image={phpSkill} />
      <SkillItem name="ASP" image={aspSkill} />
      <SkillItem name="Python" image={pythonSkill} />
      <SkillItem name="TypeScript" image={typescriptSkill} />
      <SkillItem name="Sass" image={sassSkill} />
      <SkillItem name="CSS3" image={css3Skill} />
      <SkillItem name="HTML5" image={html5Skill} />
      <SkillItem name="JavaScript" image={javascriptSkill} />
      <SkillItem name="jQuery" image={jquerySkill} />
      <SkillItem name="NodeJS" image={nodeSkill} />
      <SkillItem name="ExpressJS" image={expressSkill} />
      <SkillItem name="ReactJS" image={reactSkill} />
      <SkillItem name="NextJS" image={nextSkill} />
      <SkillItem name="AngularJS" image={angularSkill} />
      <SkillItem name="AJAX" image={ajaxSkill} />
      <SkillItem name="JSON" image={jsonSkill} />

      <SkillItem name="Tachyons" image={tachyonsSkill} />
      <SkillItem name="Bootstrap" image={bootstrapSkill} />
      <SkillItem name="Semantic UI" image={semanticuiSkill} />
      <SkillItem name="Wordpress" image={wordpressSkill} />
    </>
  );
};

export default LanguagesFrameworks;
