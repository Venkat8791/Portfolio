import React from "react";
import styles from "./ExperienceCard.module.css";
import SkillSet from "./SkillSet";
function ExperienceCard() {
  return (
    <div className={styles.card}>
      <div className={styles.period}>
        <p>2022 - Present</p>
      </div>
      <div className={styles.work}>
        <h4 className={styles.designation}>Software Engineer</h4>
        <p className={styles.description}>
          My main focus these days is building accessible user interfaces for
          our customers at Klaviyo. I most enjoy building software in the sweet
          spot where design and engineering meet — things that look good but are
          also built well under the hood. In my free time, I've also released an
          online video course that covers everything you need to know to build a
          web app with the Spotify API.
        </p>
        <SkillSet />
      </div>
    </div>
  );
}

export default ExperienceCard;
