import React from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navmenu}>
        <li className={styles["list-item"]}>
          <a href="/">About</a>
        </li>
        <li className={styles["list-item"]}>
          <a href="#experience">Experience</a>
        </li>
        <li className={styles["list-item"]}>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
