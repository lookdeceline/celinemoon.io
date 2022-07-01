import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

import styles from "../styles/404.module.css"


const NotFound = () => {
  return (
    <div>
        
        <div className={styles.page}>
        <Header/>
            <div className={styles.error}>
                <h1>404: Page Not Found</h1>
                <Link className={styles.link} to="/">Go back to home</Link>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default NotFound