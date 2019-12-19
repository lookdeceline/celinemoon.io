import React from "react"
import { graphql } from "gatsby"

import LandingRecent from '../components/landing-recent-blog'
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <LandingBio />
//     {/*<Blog />*/}
//   </Layout>
// )

const IndexPage = ({ data }) => {
  return(
    <Layout>
      <SEO title="lookdeceline" keywords={[`gatsby`, `application`, `react`]} />
      <LandingBio />
      <LandingRecent data={data} />
    </Layout>
  )
}

export default IndexPage


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            description

          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`