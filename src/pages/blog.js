import React from "react"
import { Link, graphql } from "gatsby"
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

// console.log(styles)

// const Post = props => (
//     <div className={styles.post}>
//       <img src={props.thumbnail} className={styles.thumbnail} alt="" />
//       <div className={styles.description}>
//         <h2 className={styles.title}>{props.title}</h2>
//         <p className={styles.excerpt}>{props.excerpt}</p>
//       </div>
//     </div>
//   )


export default function Blog({ data }) {
  let tags = data.allMarkdownRemark.group
  
  console.log("### nodes: ", data.allMarkdownRemark.edges)
    return (
      // <Layout>
      <div>
        <Header/>
        <SEO title = "All posts"/>
        {/* <div className={styles.pageContainer}> */}

          {/* <PagesTitle 
          title="All posts" 
          // titleIntro="I mostly write about iOS dev"
          /> */}

              {/* tags */}
              {/* <div className={styles.tagTilesSection}>
                <div className={styles.tagTilesContainer}>
                  {tags
                  .map( tag  => (
                    <TagTile tag={tag}/>
                  ))}
                </div>
              </div> */}
              

              {/* posts section */}
              <div className={styles.postsSectionBackground}>
                <div className={styles.pageContainer}>  
                <TagsBar/>
                    {data.allMarkdownRemark.edges
                    .filter(({node}) => node.frontmatter.publish)
                    .map(({ node }) => (
                      <SmallThumbnailPost node={node}/>     
                    ))}
                </div>
              </div>
            
        <Footer/>
      </div>
    )
  }


export const query = graphql`
query {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },
    filter: {
      fileAbsolutePath: {regex: "/(blog)/.*.md$/"}
      frontmatter: {
        publish: { eq: true }
      }
    }
    ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "YYYY. MM. DD.")
          intro
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
          path
          publish
        }
        fields {
          slug
        }
      }
    }

    group(field: frontmatter___tags) {
      fieldValue
      totalCount
      edges {
        node {
          frontmatter {
            publish
            path
          }
        }
      }
    }
  }
}
`