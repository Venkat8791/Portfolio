import React from "react";
import ExperienceCard from "./ExperienceCard";
import styles from "./ExperienceSection.module.css";
function ExperienceSection() {
  const skills = ["React", "Java", "SpringBoot", "Oracle", "Kafka", "Miracle"];
  return (
    <div className={styles.experienceSection} id="experience">
      <ExperienceCard skills={skills} />
      <ExperienceCard skills={skills} />
      <ExperienceCard skills={skills} />
    </div>
  );
}

export default ExperienceSection;
