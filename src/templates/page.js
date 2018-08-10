import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Menu from "../components/menu";
import ColorContainer from "../components/color-container";
import Footer from "../components/footer";
import styles from "../styles/placeholder.module.css";

class Page extends Component {
  render() {
    const {
      title,
      body,
    } = this.props.data.contentfulPage

    return (
      <ColorContainer>
        <div className={styles.site_wrapper}>
          <h1><Link to={`/`}>&laquo;</Link>{title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html
            }}
          />
        </div>
      </ColorContainer>
    );
  }
}

Page.PropTypes = {
  data: PropTypes.object.isRequired
};

export default Page;

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
