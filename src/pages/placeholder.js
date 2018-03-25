import React from "react";
import Link from "gatsby-link";
import Menu from "../components/menu";
import ColorContainer from "../components/color-container";
import Footer from "../components/footer";
import styles from "../styles/placeholder.module.css";

export default () => (
  <ColorContainer>
    <div className={styles.site_wrapper}>
      <h1>Nothing here yet. Sorry!</h1>
      <Link to="/">&laquo; Back</Link>
    </div>
  </ColorContainer>
);
