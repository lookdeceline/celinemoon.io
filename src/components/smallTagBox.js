import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

import { getColor } from '../templates/blog-post'; 
import * as styles from "./styles/smallTagBox.module.css"

const SmallTagBox = (props) => {
    return (
        <div className={styles.tag} style={{backgroundColor: getColor(props.tag)}}>{props.tag}</div>
        // <div className={styles.tag} >{props.tag}</div>
    )
}


export default SmallTagBox;