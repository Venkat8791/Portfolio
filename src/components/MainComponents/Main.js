import React from "react";
import styles from "./Main.module.css";
import AboutMe from "./AboutMe";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";

function Main() {
  return (
    <div className={styles.main}>
      <AboutMe />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

export default Main;
