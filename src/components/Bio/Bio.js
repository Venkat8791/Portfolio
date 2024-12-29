import React from "react";
import styles from "./Bio.module.css";
import SocialMedia from "../Header/SocialMedia";
import Navigation from "../Header/Navigation";
function Bio() {
  return (
    <div className={styles.bio}>
      <h1 className={styles.name}>Venkat Gadiyakari</h1>
      <h2 className={styles.designation}>Software Engineer</h2>
      <p className={styles.info}>I build full stack applications</p>
      <Navigation />
      <SocialMedia />
    </div>
  );
}

export default Bio;
