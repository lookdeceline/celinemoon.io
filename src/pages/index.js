import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SmallThumbnailPost from "../components/smallThumbnailPost"
import IconText from "../components/icon-note"
import styles from "../styles/index.module.css"

function compareOrder(node1, node2) {
  return node1.frontmatter.order - node2.frontmatter.order
}

export default function Home({ data }) {
  let projectList = data.allMarkdownRemark.edges.filter(function (edge) {
    return edge && edge.node.fields.slug.indexOf('/projects') === 0;
  })

  let blogList = data.allMarkdownRemark.edges.filter(function (edge) {
    return edge && edge.node.fields.slug.indexOf('/blog') === 0;
  })

  let profilePic = data.allFile.nodes.filter(function(node) {
    return node && node.childImageSharp.fluid.originalName === "profile-picture.png";
  })[0]

  return (
    <Layout>
      <SEO title="Lookdeceline"/>
      {/* <div className={styles.about}> */}
          <div>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutTextContainer}>
              <h1 className={styles.subSectionTitle}>Hi, I'm Celine.</h1>
            {/* <div className={styles.aboutContainer}> */}
              <h2 className={styles.intro}>
              I am an iOS software engineer at Sendbird.
              <br/>
              My mission is to make user experience as implicit as possible through wearable devices.
              <br/>
              I designed, built, and maintain this site. 👩🏻‍💻
              </h2>

              <Link to="/about/" className={styles.pageLink}>Read more about me ↗</Link>
            </div>
              {/* <Img className={styles.profileImage} fluid={data.file.childImageSharp.fluid} /> */}
              {/* <Img className={styles.profileImage} fluid={profilePic.childImageSharp.fluid} /> */}
            {/* </div>  */}
            {/* profilePic.childImageSharp.fluid */}
            {/* <Img className={styles.profileImage} fluid={data.profileImage.childImageSharp.fluid} />   */}
            </div> 
        </div>
      {/* </div>  */}

      <div className={styles.body}>
        <div className = {styles.projectSection}>
          <h3 className={styles.subSectionTitle}>Projects</h3>
          {/* a list of projects  */}
          <div className={styles.cardsContainer}>
            {projectList.map(({ node }) => (
              <Link to={`/projects/${node.frontmatter.path}`} >
              <div key={node.id} className={styles.cardItem}
                style={{backgroundColor: '#f6f6f8'}} >
                  {/* node.frontmatter.backgroundColor */}
                {/* <Link to={node.fields.slug} > */}

                  <div 
                  className={styles.imageContainer}
                  // style={{ backgroundImage: `url(../images.earth)`}}
                  
                  // `url(${node.frontmatter.featuredImage.childImageSharp.fluid})`
                  
                  >
                    <Img 
                    className={styles.image}
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid} 
                    />
                  </div>
                    
                  
                  <div className={styles.cardContent}>
                    <div className={styles.cardContentTitle}>
                      {node.frontmatter.title}
                    </div>
                    {/* <p className={styles.cardContentDate}>
                      {node.frontmatter.date}
                    </p> */}
                    <div className={styles.cardContentIntro}>
                      {node.frontmatter.intro}
                    </div>

                    <IconText type={node.frontmatter.type} text={node.frontmatter.text} size="small"/>
                    
                  </div>
                  
                {/* </Link> */}
              </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.blogSection}>
          <h3 className={styles.subSectionTitle}>Blog Posts</h3>
                  {/* a list of blog posts */}
                  <div className={styles.cardsContainer}>
                    {blogList
                    .filter(({node}) => node.frontmatter.publish)
                    .map(({ node }) => (
                      <SmallThumbnailPost node={node}/>
                      // <Link to={node.fields.slug} 
                      //   key={node.id} 
                      //   className={styles.cardItem}>
                      //   {/* <div key={node.id} className={styles.cardItem}> */}
                      //     <div className={styles.blogpostImageContainer} >
                      //       <Img 
                      //       // className={styles.imageContainer}
                      //       fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                      //     </div>  
                      //     <div className={styles.cardContent}>
                      //       <h4 className={styles.cardContentTitle}>
                      //         {node.frontmatter.title}
                      //       </h4>
                      //       <p className={styles.cardContentDate}>
                      //         {node.frontmatter.date}
                      //       </p>
                      //       <div className={styles.cardContentIntro}>
                      //         {node.frontmatter.intro}
                      //       </div>
                      //       <div className={styles.smallTagsContainer}>
                      //         {node.frontmatter.tags ? node.frontmatter.tags.map(( tag, index ) => {
                      //           return (
                      //             <SmallTagBox tag={tag} />
                      //           )
                      //         }) 
                      //         : null
                      //         }
                      //       </div>
                      //     </div>
                      //   {/* </div> */}
                      // </Link>
                    ))}
                  </div>
                  {/* <div className={styles.cardsContainer}>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                      <div key={node.id}>
                        <Link to={node.fields.slug}>
                          <h3>{node.frontmatter.title}</h3>
                          <h5>{node.frontmatter.date}</h5>
                          <p>{node.frontmatter.intro}</p>
                          <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                        </Link>
                      </div>
                    ))}
                  </div> */}
          </div>
        
      </div>
    </Layout>

  )
}


export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "images/profile-picture.png" }) {
      childImageSharp {
        fluid(maxWidth: 6000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allFile(filter: {
      absolutePath: {regex: "/src/images/"}, 
      extension: {regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/"}
    }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 6000, quality: 100) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
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
            type
            text
            path
            publish
            order
          }
          fields {
            slug
          }
        }
      }
    }
  }
`