import React from "react";
import styles from "./ExperienceCard.module.css";
import SkillSet from "../Skills/SkillSet";
function ExperienceCard({ skills }) {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.period}>
        <p>2022 - Present</p>
      </div>
      <div className={styles.work}>
        <h4 className={styles.designation}>
          Software Engineer, Tata Consultancy Services
        </h4>
        <p className={styles.description}>
          Working for the largest bank in America, J.P. Morgan Chase. Our main
          focus in the project is develop high functioning API's to deal with
          customer data such as Email, Phone and Address. Developing a event
          driven architecture with Kafka that syncs the customer data between
          DB2 and Oracle databases.
        </p>
        <SkillSet skills={skills} />
      </div>
    </div>
  );
}

export default ExperienceCard;
