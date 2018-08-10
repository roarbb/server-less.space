import React from "react";
import Link from "gatsby";
import VideoContainer from "../components/video-container";
import Footer from "../components/footer";
import Menu from "../components/menu";
import styles from "../styles/index.module.css";
import deskSvg from "../assets/desk.svg";

import "normalize.css";
import "../styles/global.css";

export default ({data}) => {
  return (
    <VideoContainer>
      <div className={styles.content_wrapper}>
        <Menu menuItems={data.allContentfulPage.edges} />
        <div className={styles.content}>
          <div className={styles.badass_text}>
            <div>
              <div className={styles.title}>J &middot; A &middot; M</div>
              stack
            </div>
            <span>explained</span> <br />
          </div>
          <div className={styles.vertical_text}>switch edition</div>
          <div className={styles.img_box}>
            <img src={deskSvg} />
          </div>
        </div>
        <Footer />
      </div>
    </VideoContainer>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulPage(limit: 100) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`;
