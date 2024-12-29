import React from "react";
import styles from "./ExperienceSection.module.css";
import ExperienceCard from "./ExperienceCard";
function ExperienceSection() {
  const skills = ["React", "Java", "SpringBoot", "Oracle", "Kafka"];
  return (
    <div className={styles.experienceSection} id="experience">
      <ExperienceCard skills={skills} />
      <ExperienceCard skills={skills} />
      <ExperienceCard skills={skills} />
    </div>
  );
}

export default ExperienceSection;
