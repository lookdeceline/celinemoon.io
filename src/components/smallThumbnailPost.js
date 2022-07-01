import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import SmallTagBox from "./smallTagBox"
import styles from "./styles/smallThumbnailPost.module.css"
import ChevronIcon from "../blog/images/chevron-right.svg"
import SeePostIcon from "../blog/images/seePost.svg"
import ChevronRegularIcon from "../blog/images/chevron-right-regular.svg"

const SmallThumbnailPost = ({ node }) => {
    return (
        <Link to={`/blog/${node.frontmatter.path}`} 
            key={node.id} 
            className={styles.cardItem}>
            {/* <div key={node.id} className={styles.cardItem}> */}
            
            <div className={styles.cardWrapper}>
              <div className={styles.cardContent}>

                <div className={styles.cardContentTitle}>
                  {node.frontmatter.title}
                </div>

                <div className={styles.cardContentIntro}>
                    {node.frontmatter.intro}
                </div>

               {/* <div className={styles.tagsAndArrow}> */}
                <div className={styles.smallTagsContainer}>
                    {node.frontmatter.tags ? node.frontmatter.tags.map(( tag, index ) => {
                        return (
                            <SmallTagBox tag={tag} />
                        )
                    }) 
                    : null
                    }
                </div>

                {/* <SeePostIcon className={styles.chevron}/> */}
               {/* </div>  */}
              </div>
              <SeePostIcon className={styles.chevron}/>
              
              
            </div>

          
        {/* </div> */}
        </Link>
    )
}


export default SmallThumbnailPost;




// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: 
//         { fields: [frontmatter___date], order: DESC },
//         filter: {fileAbsolutePath: {regex: "/(blog)/.*.md$/"}}
//         ) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "YYYY. MM. DD.")
//             intro
//             featuredImage {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             backgroundColor
//             tags
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `