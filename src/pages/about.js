import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function About({ data }) {
    return (
        <Layout>
            <div style={{ color: `teal`}}>
                <h1>About Page {data.site.siteMetadata.title}</h1>
                <p>Hi, I am Celine.</p>
            </div>
        </Layout>
    )
}



export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`