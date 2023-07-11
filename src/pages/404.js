import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

import * as styles from "../styles/404.module.css"


const NotFound = () => {
  return (
    <div>
        
        <div className={styles.page}>
        <Header/>
            <div className={styles.error}>
                <div>404 error! page not found</div>
                <Link className={styles.link} to="/">go to home</Link>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default NotFound