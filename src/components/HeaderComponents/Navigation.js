import React from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles["list-item"]}>
          <a href="/">About</a>
        </li>
        <li className={styles["list-item"]}>
          <a href="/">Experience</a>
        </li>
        <li className={styles["list-item"]}>
          <a href="/">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
