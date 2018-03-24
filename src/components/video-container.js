import React from "react";
import styles from "../styles/video-container.module.css";
import video from "../assets/switch.mp4";

export default ({ children }) => (
  <div className={styles.video_container}>
    <div className={styles.video_wrapper}>
      <video className={styles.video} autoPlay loop muted src={video} />
      <div className={styles.video_structure}></div>
    </div>
    <div className={styles.content_wrapper}>{children}</div>
  </div>
);
