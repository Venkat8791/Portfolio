import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectSection.module.css";

function ProjectsSection() {
  return (
    <div className={styles.projectSection} id="projects">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default ProjectsSection;
