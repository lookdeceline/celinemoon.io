import React from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PagesTitle from "../components/pagesTitle"
import styles from "../styles/about.module.css"
import DownloadYellow from "../images/DownloadYellow.svg"
import CVPdf from '../images/CV-beta.pdf';

export default function About({ data }) {
    return (
        <Layout> 
            <SEO title="About"/>
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
                <Img className={styles.pic} fluid={data.profileImage.childImageSharp.fluid} />  
                <div className={styles.aboutTextContainer}>
                  <div className={styles.aboutText}> 
                  My mission is to build the most seamless user experiences by applying sensing technologies to recognize user context through wearable devices.
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
                  I am currently working on open-source project on Mobile visualization library for Swift.
                  
                  <br/><br/>
                  I designed, built, and maintain this site. 👩🏻‍💻
                  </div>
                  <a href={CVPdf} target = "_blank" className={styles.pageLink}>Download CV</a>
                </div>
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
    profileImage: file(relativePath: { eq: "images/profile-picture.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`