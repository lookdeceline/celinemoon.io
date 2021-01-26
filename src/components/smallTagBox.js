import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

import styles from "./styles/smallTagBox.module.css"

const SmallTagBox = (props) => {
    return (
        <div className={styles.tag}>{props.tag}</div>
    )
}


export default SmallTagBox;