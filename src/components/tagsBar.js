
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import TagTile from "../components/tagTile"
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


export default function TagsBar({ selectedTag }) {

    const data = useStaticQuery (
    graphql`
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
    )
console.log("$$ data: ", data)
  let tags = data.allMarkdownRemark.group
  
  console.log("$$ selectedTag: ", selectedTag)
    return (
      <div>
        {/* <Header/> */}
        {/* <SEO title = "Dev Blog"/> */}

              {/* tags */}

              {/* rectangle tiles */}
              {/* <div className={styles.tagTilesSection}>
                <div className={styles.tagTilesContainer}>
                  {tags
                  .map( tag  => (
                    <TagTile tag={tag} isSelected={tag.fieldValue===selectedTag}/>
                  ))}
                </div>
              </div> */}

              {/* simpler rounder pillbox tiles */}
                <div className={styles.pillboxContainer}>
                  {tags
                  .map( tag  => (
                    <TagTile tag={tag} isSelected={tag.fieldValue===selectedTag}/>
                  ))}
                </div>
        {/* <Footer/> */}
      </div>
    )
  }


// export const query = graphql`
// query {
//   allMarkdownRemark(
//     sort: { fields: [frontmatter___date], order: DESC },
//     filter: {
//       fileAbsolutePath: {regex: "/(blog)/.*.md$/"}
//       frontmatter: {
//         publish: { eq: true }
//       }
//     }
//     ) {
//     group(field: frontmatter___tags) {
//       fieldValue
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             publish
//             path
//           }
//         }
//       }
//     }
//     }
// }
// `