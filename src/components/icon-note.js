import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import CheckmarkIcon from "../images/checkmark.svg"   
import ResearchIcon from "../images/research.svg"   
import styles from "./styles/icon-note.module.css"

const IconText = (props) => {
    // props: type, text, size 

    // Determine icon & text size.
    let iconSize = styles.iconSmall
    let textSize = styles.textSmall
    if (props.size === "medium") {
        iconSize = styles.iconMedium
        textSize = styles.textMedium
    }

    // Determine icon type.
    let icon = <CheckmarkIcon className={iconSize}/>
    if (props.type === "research") {
        icon = <ResearchIcon className={iconSize}/>
    }
    
    return (
        <div className={styles.container}> 
            {/* {icon} */}
            <div className={textSize}> 
                # {props.text} 
            </div>
        </div>
    )
}


export default IconText;