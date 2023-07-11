import React from "react"
import * as containerStyles from "./styles/container.module.css"

export default function Container( {children} ) {
  // console.log(children)  
  
  return (
    <div className={containerStyles.container}>
        {children}
    </div>
  )
}