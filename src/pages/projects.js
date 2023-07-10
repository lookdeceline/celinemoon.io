import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

// import * as styles from "../styles/blog.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PagesTitle from "../components/pagesTitle"
import BigThumbnailPost from "../components/bigThumbnailPost"
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
    return (
      <Layout>
				<SEO title="Projects"/>
        <PagesTitle 
        title="Projects" 
        titleIntro={"These are my selected projects. Personal projects, term projects, etc."}
        />
        
        {/* <div className={styles.cardsContainer}> */}
        <div className={styles.projectsPageCardsContainer}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <BigThumbnailPost node={ node }/>
          //   <div key={node.id} className={styles.cardItem}>
          //   <Link to={node.fields.slug}>
          //       <Img 
          //       className={styles.imageContainer}
          //       fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
              
          //     <div className={styles.cardContent}>
          //       <div className={styles.cardContentTitle}>
          //         {node.frontmatter.title}
          //       </div>
          //       <h5 className={styles.cardContentDate}>
          //         {node.frontmatter.date}
          //       </h5>
          //       <div className={styles.cardContentIntro}>
          //         {node.frontmatter.intro}
          //       </div>
          //     </div>
              
          //   </Link>
          // </div>



                // <div key={node.id} className={styles.cardItem}>
                //   <Link to={node.fields.slug}>
                //       <Img 
                //       className={styles.imageContainer}
                //       fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                    
                //     <div className={styles.cardContent}>
                //       <h3 className={styles.cardContentTitle}>
                //         {node.frontmatter.title}
                //       </h3>
                //       <h5 className={styles.cardContentDate}>
                //         {node.frontmatter.date}
                //       </h5>
                //       <p className={styles.cardContentIntro}>
                //         {node.frontmatter.intro}
                //       </p>
                //     </div>
                    
                //   </Link>
                // </div>
          ))}
        </div>
        {/* <Post
					title="Blog post 1"
					thumbnail="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
					excerpt="This is the first blog post and its excerpt."
        />
				<Post
					title="Blog post 2"
					thumbnail="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
					excerpt="This is the second blog post and its excerpt."
        /> */}

      </Layout>
    )
  }


export const query = graphql`
query {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC },
    filter: {fileAbsolutePath: {regex: "/(projects)/.*.md$/"}}
    ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          intro
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          backgroundColor
          text
          type
          path
        }
        fields {
          slug
        }
      }
    }
  }
}
`