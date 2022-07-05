import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

import styles from "./styles/tagTile.module.css"

const TagTile = ({ tag, isSelected}) => {
    console.log("^^ tagTile: ", tag, "isSelected: ", isSelected)
    // const backgroundColor = isSelected ? "#F0F5F9" : null
    const textColor = isSelected ? "#0061f2" : null 
    const fontWeight = isSelected ? "600" : null

    return (
        <Link to={`/tags/${tag.fieldValue}`} 
        className={styles.tile}
        style={{color: textColor, fontWeight: fontWeight}}>
            {tag.fieldValue}
        </Link>
    )
}

export default TagTile;