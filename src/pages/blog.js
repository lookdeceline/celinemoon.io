import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import PagesTitle from "../components/pagesTitle"
import SmallThumbnailPost from "../components/smallThumbnailPost"
import styles from "../styles/index.module.css"

console.log(styles)

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
    return (
      <Layout>
				{/* <Link to="/">Home</Link> */}
        <PagesTitle 
        title="Blog" 
        titleIntro={`I try to organize things I've learned to share & look them up later.\nContents mainly concern three.js, iOS, Swift.`}
        />

        <div className={styles.cardsContainer}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <SmallThumbnailPost node={node}/>
          ))}
        </div>
      </Layout>
    )
  }


export const query = graphql`
query {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },
    filter: {fileAbsolutePath: {regex: "/(blog)/.*.md$/"}}
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
        }
        fields {
          slug
        }
      }
    }
  }
}
`