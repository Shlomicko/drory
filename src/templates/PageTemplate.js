import React from "react";
import Layout from "../components/layout"
//import Helmet from "react-helmet"
//import { graphql, Link } from "gatsby"

class PageTemplate extends React.Component {

  render(){
    const {page} = this.props.data;
    console.log("PPP", page);
    //const siteTitle = this.props.data.site.siteMetadata.title;
    //const siteDescription = page.excerpt;

    return (
      <Layout>
        {/*<Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${page.frontmatter.title} | ${siteTitle}`}
        />*/}
        <h1>{page.frontmatter.title}</h1>
        <main>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </main>
      </Layout>
    )
  }
}

export default PageTemplate;


export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
