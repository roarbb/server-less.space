import React from "react";
import styles from "../styles/footer.module.css";

export default ({ children }) => (
  <div className={styles.footer}>
    <div>&copy; <a href="https://sajgal.com">sajgal &middot; com</a></div>
  </div>
);
