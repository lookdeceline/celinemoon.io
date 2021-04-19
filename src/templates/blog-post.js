import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import LayoutBlogpost from "../components/layout-blogpost"
import Layout from "../components/layout"
import styles from "./blog-post-styles.module.css"

// const Title = styled.h5`
//   font-size: 18px;
//   font-weight: 600;
//   letter-spacing: -.05em;
//   color: #088BEE;
//   margin-bottom: 0;
// `

export default function BlogPost({ data }) {
    // console.log('data: ', data)
    const post = data.markdownRemark
    console.log(post)
    return(
        <Layout>
            <div>
                <h1 className={styles.h1}>{post.frontmatter.title}</h1>
                {/* <h5 className={styles.h5}>{post.frontmatter.date}</h5> */}
                <h2 className={styles.h2}>{post.frontmatter.intro}</h2>
                <div className={styles.article} dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        intro
        featuredImage {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`