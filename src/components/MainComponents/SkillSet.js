import React from "react";
import Skill from "./Skill";
import styles from "./SkillSet.module.css";

function SkillSet() {
  return (
    <ul className={styles.skillset}>
      <Skill />
      <Skill />
    </ul>
  );
}

export default SkillSet;
