import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import SmallThumbnailPost from "../components/smallThumbnailPost"
import IconText from "../components/icon-note"
import CVPdf from '../images/CV.pdf';
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

  let pottedPlant = data.allFile.nodes.filter(function(node) {
    return node && node.childImageSharp.fluid.originalName === "pottedPlant.png";
  })[0]
console.log("pottedPlant: ", pottedPlant)
  return (
    // <Layout>
    <div>
      <Header/>
      <SEO title="Home"/>
      {/* <div className={styles.about}> */}
          <div className={styles.abountContainerContainer}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutTextContainer}>
            {/* <u style={{textDecorationThickness: `5px`, textDecorationColor: `#FB2B43`, textUnderlineOffset: `3px`}}> */}
              {/* <Img className={styles.profileImage} fluid={pottedPlant.childImageSharp.fluid} /> */}
              <h1 className={styles.introTitle}>Hi, my name is Celine.</h1>
            {/* <div className={styles.aboutContainer}> */}
              <h2 className={styles.intro}>
              {/* <span style={{color:"#FB2B43", fontWeight: 600}}> */}
              I am currently working as an iOS software engineer at Sendbird. I write code to enable aesthetic and delightful user interfaces.
              I designed, built, and maintain this site. 🪴
              
              </h2>
              <div className={styles.introLinks}>
                <Link to="/about/" className={styles.pageLink}>Read more about me ↗&#xFE0E;</Link>
                {/* style={{padding: `14px 68px`}} */}
                {/* CVPdf */}
                <a href={""} target = "_blank" className={styles.pageLink} id="cvLink">Download CV ↗&#xFE0E;</a>
              </div>
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
          <h3 className={styles.subSectionTitle}>Projects.</h3>
          {/* a list of projects  */}
          <div className={styles.cardsContainer}>
            {projectList.map(({ node }) => (
              <Link to={`/projects/${node.frontmatter.path}`} >
              <div key={node.id} className={styles.cardItem} >
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

        {/* <div className={styles.blogSection}>
          <h3 className={styles.subSectionTitle}>Blog Posts</h3>
                  <div className={styles.cardsContainer}>
                    {blogList
                    .filter(({node}) => node.frontmatter.publish)
                    .map(({ node }) => (
                      <SmallThumbnailPost node={node}/>
                    ))}
                  </div>
        </div> */}
        
      </div>
      <Footer />
      </div>
    // </Layout>

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
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }, filter: {frontmatter: {publish: { eq: true } }}) {
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
                fluid(quality: 100) {
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