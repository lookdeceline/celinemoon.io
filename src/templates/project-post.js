import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { MDXProvider } from "@mdx-js/react"

import LayoutBlogpost from "../components/layout-blogpost"
import Layout from "../components/layout"
import IconText from '../components/icon-note'
import styles from "./project-post-styles.module.css"

const Title = styled.h5`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -.05em;
  color: #088BEE;
  margin-bottom: 0;
`

export default function BlogPost({ data }) {
    const post = data.markdownRemark
    return(
        <Layout>
            <div>
                <div className={styles.titleContainer}>
                    <Img className={styles.featuredImage} fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                    <div className={styles.titleContent} style={{ backgroundColor: post.frontmatter.backgroundColor }}>
                        <h1 className={styles.h1}>{post.frontmatter.title}</h1>
                        <h2 className={styles.h2}>{post.frontmatter.intro}</h2>
                        <IconText type={post.frontmatter.type} text={post.frontmatter.text} size="medium"/>
                    </div>
                </div>
                
                <div>
                    <div className={styles.mdBody} dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
                {/* <MDXProvider
                  components={{
                    // Map HTML element tag to React component
                    // h1: styles.H1,
                    // h2: DesignSystem.H2,
                    h3: styles.h3,
                    // Or define component inline
                    // p: props => <p {...props} style={{ color: "rebeccapurple" }} />,
                  }}
                >
                  {data.mdx.body}
                </MDXProvider> */}
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        intro
        featuredImage {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        backgroundColor
        tags
        type
        text
      }
    }
    mdx {
      body
    }
  }
`