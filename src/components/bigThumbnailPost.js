import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import SmallTagBox from "./smallTagBox"
import IconText from "./icon-note"
import styles from "./styles/bigThumbnailPost.module.css"

const BigThumbnailPost = ({ node }) => {
    return (
        <Link to={node.fields.slug} >
            <div key={node.id} 
                className={styles.cardItem}
                style={{backgroundColor: node.frontmatter.backgroundColor}} >
                <div className={styles.imageContainer}>
                    <Img 
                    className={styles.image}
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid} 
                    />
                </div>
                
                <div className={styles.cardContent}>
                    <h4 className={styles.cardContentTitle}>
                        {node.frontmatter.title}
                    </h4>
                    <div className={styles.cardContentIntro}>
                        {node.frontmatter.intro}
                    </div>
                    <IconText type={node.frontmatter.type} text={node.frontmatter.text} size="small"/>
                </div>
            </div>
        </Link>

        // <Link to={node.fields.slug}
        //     key={node.id} 
        //     className={styles.cardItem}>
        //     <div className={styles.blogpostImageContainer} >
        //         <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
        //     </div>  
        //     <div className={styles.cardContent}>
        //         <h4 className={styles.cardContentTitle}>
        //             {node.frontmatter.title}
        //         </h4>
        //         <p className={styles.cardContentDate}>
        //             {node.frontmatter.date}
        //         </p>
        //         <div className={styles.cardContentIntro}>
        //             {node.frontmatter.intro}
        //         </div>
        //         <div className={styles.smallTagsContainer}>
        //             {node.frontmatter.tags ? node.frontmatter.tags.map(( tag, index ) => {
        //                 return (
        //                     <SmallTagBox tag={tag} />
        //                 )
        //             }) 
        //             : null
        //             }
        //         </div>
        //     </div>
        // </Link>
    )
}


export default BigThumbnailPost;




export const query = graphql`
  query {
    allMarkdownRemark(sort: 
        { fields: [frontmatter___date], order: DESC },
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
            backgroundColor
            tags
            text
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`