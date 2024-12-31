import React from "react";
import Icon from "../UI/Icon";
import styles from "./SocialMedia.module.css";

function SocialMedia() {
  const icons = ["github", "facebook", "twitter", "linkedin", "yahoo", "skype"];
  return (
    <ul className={styles.socialmedia}>
      {icons.map((icon) => (
        <Icon name={icon} key={icon} />
      ))}
    </ul>
  );
}

export default SocialMedia;
