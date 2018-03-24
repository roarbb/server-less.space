import React from "react";
import styles from "../styles/footer.module.css";

export default ({ children }) => (
  <div className={styles.footer}>
    <div>Created by</div>
    <div><a href="https://sajgal.com">sajgal.com</a></div>
  </div>
);
