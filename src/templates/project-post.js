import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

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
                <div className={styles.titleContainer} style={{ backgroundColor: post.frontmatter.backgroundColor }}>
                    <Img className={styles.featuredImage} fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
                    <div className={styles.titleContent}>
                        <h1 className={styles.h1}>{post.frontmatter.title}</h1>
                        <IconText type={post.frontmatter.type} text={post.frontmatter.text} size="medium"/>
                    </div>
                </div>
                
                <div className={styles.mdBody}>
                    {/* <h5>{post.frontmatter.date}</h5> */}
                    {/* <h2>{post.frontmatter.intro}</h2> */}
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
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
        backgroundColor
        tags
        type
        text
      }
    }
  }
`