import React from "react";
import Icon from "./Icon";
import styles from "./SocialMedia.module.css";

function SocialMedia() {
  const icons = ["github", "facebook", "twitter", "linkedin"];
  return (
    <ul className={styles.socialmedia}>
      {icons.map((icon) => (
        <Icon name={icon} />
      ))}
    </ul>
  );
}

export default SocialMedia;
