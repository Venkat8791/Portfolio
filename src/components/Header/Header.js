import React from "react";
import Bio from "../Bio/Bio";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Bio />
    </div>
  );
}

export default Header;
