import React from "react";
import styles from "./Main.module.css";
import ProjectsSection from "../Project/ProjectsSection";
import AboutMe from "../About/AboutMe";
import ExperienceSection from "../Experience/ExperienceSection";

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
