// import React from "react"
// import PropTypes from "prop-types"

import React from "react"
import { useStaticQuery,Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import PagesTitle from "../components/pagesTitle"
import SmallThumbnailPost from "../components/smallThumbnailPost"
import TagTile from "../components/tagTile"
import TagsBar from "../components/tagsBar"
import * as styles from "../styles/index.module.css"



export default function Tags({ pageContext, data }) {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  
  console.log("### tag: ", tag)
  console.log("### edges: ", edges)
  console.log("### totalCount: ", totalCount)
    return (
      // <Layout>
      <div>
        <Header/>
        <SEO title = "Tags"/>

          <PagesTitle 
          title="Dev Blog" 
          titleIntro="I mostly write about iOS development."
          />

          <TagsBar selectedTag={tag} />

          {/* posts section */}
          <div className={styles.postsSectionBackground}>
            <div className={styles.pageContainer}>  
                {edges
                .map(({ node }) => (
                  <SmallThumbnailPost node={node}/>     
                ))}
            </div>
          </div>
            
        <Footer/>
      </div>
    )
  }


export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        fileAbsolutePath: {regex: "/(blog)/.*.md$/"}
        frontmatter: {
          publish: { eq: true }
          tags: { in: [$tag] }
        }
        
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            intro
            tags
            path
            publish
          }
        }
      }
    }
  }
`