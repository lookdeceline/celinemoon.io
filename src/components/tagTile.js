import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

import { getColor } from '../templates/blog-post'; 
import * as styles from "./styles/tagTile.module.css"

const TagTile = ({ tag, isSelected}) => {
    // console.log("^^ tagTile: ", tag, "isSelected: ", isSelected)
    // const backgroundColor = isSelected ? "#F0F5F9" : null
    const textColor = isSelected ? "#0061f2" : null 
    const fontWeight = isSelected ? "600" : null

    return (
        <Link to={`/tags/${tag.fieldValue}`} 
        className={styles.pillbox}
        // style={{backgroundColor: getColor(tag.fieldValue)}} 
        >
            <span className={styles.circle} style={{backgroundColor: getColor(tag.fieldValue)}}></span>
            <span style={{color: textColor, fontWeight: fontWeight}}>{tag.fieldValue}</span>
        </Link>
    )
}

export default TagTile;


class Tag {
    constructor(value) {
      this.value = value;
      this.color = this.getColor();
    }
  
    getColor() {
      const colors = {
        'Information': '#007bff',
        'Success': '#28a745',
        'Error': '#dc3545'
      };
  
      return colors[this.value] || '#000000'; // Default color
    }
}

  
  // Using the class
//   const infoTag = new Tag('Information');
//   console.log(infoTag.color);  // Outputs: #007bff
  
//   const successTag = new Tag('Success');
//   console.log(successTag.color);  // Outputs: #28a745
  
//   const errorTag = new Tag('Error');
//   console.log(errorTag.color);  // Outputs: #dc3545
  
//   const undefinedTag = new Tag('Undefined');
//   console.log(undefinedTag.color);  // Outputs: #000000
  