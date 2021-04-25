import React from "react";

import SkillItem from "../../../shared/UIElements/SkillItem";
import mysqlSkill from "../../../assets/skills/MySQL.png";
import mongoSkill from "../../../assets/skills/MongoDB.png";
import postgresqlSkill from "../../../assets/skills/PostgreSQL.png";
import accessSkill from "../../../assets/skills/Access.png";
import firebaseSkill from "../../../assets/skills/Firebase.png";

const Databases = () => {
  return (
    <>
      <SkillItem name="MySQL" image={mysqlSkill} />
      <SkillItem name="MongoDB" image={mongoSkill} />
      <SkillItem name="PostgreSQL" image={postgresqlSkill} />
      <SkillItem name="Microsoft Access" image={accessSkill} />
      <SkillItem name="Google Firebase" image={firebaseSkill} />
    </>
  );
};

export default Databases;
