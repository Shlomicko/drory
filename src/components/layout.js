/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Header from "./header"
import "./layout.css"


class Layout extends React.Component {

  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            pages: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "//pages//" } }
              sort: { fields: [fields___slug], order: ASC }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    menuTitle
                  }
                }
              }
            }
            footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
              id
              html
            }
          }
        `}
        render={data => {
          const { children } = this.props;
          const {
            pages: { edges: pages }
          } = data;

          return (
            <React.Fragment>
              <Header pages={pages}
              />
              <div className={"content"}
                style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `0 1.0875rem 1.45rem`
                }}
              >
                <main>{children}</main>
                <footer>
                 
                </footer>
              </div>
            </React.Fragment>
          );
        }
        }
      />
    );
  }
}

export default Layout;
