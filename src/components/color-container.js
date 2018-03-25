import React from "react";
import styles from "../styles/color-container.module.css";

export default ({ children }) => (
  <div className={styles.color_container}>
    <div className={styles.content_wrapper}>{children}</div>
  </div>
);
