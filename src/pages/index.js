import React from "react";
import Link from "gatsby-link";
import VideoContainer from "../components/video-container";
import Footer from "../components/footer";
import Menu from "../components/menu";
import styles from "../styles/index.module.css";
import deskSvg from "../assets/desk.svg";

import "normalize.css";
import "../styles/global.css";

export default () => (
  <VideoContainer>
    <div className={styles.content_wrapper}>
      <Menu />
      <div className={styles.content}>
        <div className={styles.badass_text}>
          <div>
            J &middot; A &middot; M <br />
            stack
          </div>
          <span>explained</span> <br />
        </div>
        <div className={styles.vertical_text}>switch edition</div>        
        <img src={deskSvg} width="550" />
      </div>
      <Footer />
    </div>
  </VideoContainer>
);
