import React from "react";
import styles from "./ProjectCard.module.css";
function ProjectCard() {
  return (
    <div className={styles.projectCard}>
      <img className={styles.projectImg} alt="img" src="imgs/Spotify.png" />
      <div className={styles.project}>
        <h4 className={styles.projectName}>Spotify Clone</h4>
        <p className={styles.projectDescription}>
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I've had the privilege of
          building software for an advertising agency, a start-up, a huge
          corporation, and a digital product studio.
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
