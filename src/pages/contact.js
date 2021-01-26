import React from "react"

import Layout from "../components/layout"
import PagesTitle from "../components/pagesTitle"
import styles from "../styles/contact.module.css"

export default function Contact() {
    return (
        <Layout> 
            <div>
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


            </div>
        </Layout> 
        

    )
}