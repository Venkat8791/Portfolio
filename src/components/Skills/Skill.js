import React from "react";
import styles from "./Skill.module.css";
function Skill({ skillName }) {
  return <li className={styles.skill}>{skillName}</li>;
}

export default Skill;
