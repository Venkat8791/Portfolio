import React from "react";
import Skill from "./Skill";
import styles from "./SkillSet.module.css";

function SkillSet({ skills }) {
  return (
    <ul className={styles.skillset}>
      {skills.map((skill) => (
        <Skill skillName={skill} />
      ))}
    </ul>
  );
}

export default SkillSet;
