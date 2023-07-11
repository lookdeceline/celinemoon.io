import React from "react"
// import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PagesTitle from "../components/pagesTitle"
import * as styles from "../styles/about.module.css"
import DownloadYellow from "../images/DownloadYellow.svg"
import CVPdf from '../images/CV.pdf';

export default function About({ data }) {

    const profileImage = getImage(data.profileImage)
    return (
        <Layout> 
            <SEO title="About"
            featuredImage={data.profileImage.childImageSharp.fluid.src}/>
            
            <div className={styles.me}>
                <div className={styles.hi}>Hi there, I'm Celine Moon, an iOS software engineer at Sendbird.</div>
            </div>

            {/* <Img className={styles.pic} fluid={data.profileImage.childImageSharp.fluid} />   */}
            {/* <PagesTitle title="About"/> */}
            {/* <div className={styles.resumeContainer}>
                <DownloadYellow className={styles.downloadIcon}/>
                <div> Download Resume </div>
            </div> */}
            <div className={styles.aboutContainer}>
              <div className={styles.imageAndText}>
                {/* <Img className={styles.pic} fluid={data.profileImage.childImageSharp.fluid} />   */}
                <GatsbyImage image={profileImage} />
                {/* <div className={styles.aboutTextContainer}> */}
                  <div className={styles.aboutText}> 
                  My biggest inspiration for writing code is aesthetic and delightful mobile user experiences. 
                  To provide the code base that is most optimal for seamless user experience and user interface designs, 
                  I strive to learn about different corners of software engineering, 
                  such as asynchronous programming, networking, modularization, among others. 

                  I am currently collaborating on a productivity app for iOS. 

                  <br/><br/>
                  In my free time I do side projects, 
                  make <a href="https://www.youtube.com/channel/UCYR-Y9lEq92-zUlqQY1xeIA" target = "_blank" className={styles.youtubeLink}>Youtube videos</a>, 
                  or take care of my plants. 

                  {/* My mission is to build the most seamless user experiences by applying sensing technologies to recognize user context through wearable devices.
                  Particularly, I can thrive when I solve a user-centered problem, by mixing different sensors and sensing technologies.

                  <br/><br/>
                  My dual-background in Computer Science and Fashion helps me understand the wearable technology from both the engineering and the human-centered design point of view. 
                  
                  <br/><br/>
                  I have always been interested in both the academic and industrial settings in building wearable applications. 
                  To experience the both worlds, I have worked as a research assistant at a Human-centered Computer Systems Lab, worked as a research engineer at LG Electronics’ IoT Technologies Group, 
                  and am currently working as a software engineer at a Silicon Valley startup.

                  <br/><br/>
                  On the side lines, I have a huge love for delightful user interface designs. 
                  Particularly, I love both watching and implementing beautiful layers of charts. 
                  I am currently working on open-source project on Mobile visualization library for Swift. */}
                  
                  </div>
                {/* </div> */}
              </div>
              {/* CVPdf */}
              <a href={""} target = "_blank" className={styles.pageLink}>Download CV</a>
            </div> 
            

            {/* <PagesTitle 
            title="Contact Info" 
            // titleIntro={`These are my selected projects. \nPersonal projects, term projects, etc.`}
            />
            <div className={styles.contact}>
                • Mail: celine@snu.ac.kr
            </div>

            <div className={styles.contact}>
                • Github: https://github.com/lookdeceline
            </div> */}

        </Layout> 
        

    )
}

export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "images/profile-picture2.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
        )
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          
        }
      }
    }
  }
`