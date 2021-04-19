import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PagesTitle from "../components/pagesTitle"
import styles from "../styles/about.module.css"
import DownloadYellow from "../images/DownloadYellow.svg"

export default function About() {
    return (
        <Layout> 
            <SEO title="About"/>
            <PagesTitle title="About"/>
            <div className={styles.resumeContainer}>
                <DownloadYellow className={styles.downloadIcon}/>
                <div> Download Resume </div>
            </div>
            


            <PagesTitle 
            title="Contact Info" 
            // titleIntro={`These are my selected projects. \nPersonal projects, term projects, etc.`}
            />
            <div className={styles.contact}>
                • Mail: celine@snu.ac.kr
            </div>

            <div className={styles.contact}>
                • Github: https://github.com/lookdeceline
            </div>

        </Layout> 
        

    )
}