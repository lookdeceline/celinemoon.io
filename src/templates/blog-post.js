import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../components/global.css'

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const MarkedHeader = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  display: inline;
  border-radius: 1em 0 1em 0;
  // background-image: linear-gradient(
  //   -100deg,
  //   rgba(255, 250, 150, 0.15),
  //   rgba(255, 250, 150, 0.8) 100%,
  //   rgba(255, 250, 150, 0.25)
  // );
  font-size: 2.75rem;
`

const HeaderDate = styled.h3`
  margin-top: 15px;
  color: #0E51EC;
  font-size: 1.05rem;
  font-weight: 400;
  margin-bottom: 50px;
  // text-align: right;
  // color: #606060;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;
    color: #0E51EC;
  }

  a::after {
    // content: "";
    // position: absolute;
    // z-index: -1;
    // top: 85%;
    // left: -0.1px;
    // right: -0.1px;
    // bottom: 0;
    // transition: top 0.1s ease-in-out;
    // background-color: #0E51EC;
  }

  // a:hover::after {
  //   top: 0;
  // }
  
  a:hover {
    // top: 0;
    color: #fd163f;
  }
`

export default ({ data }) => {
  let styles = {
    zoom: 0.9
  };
  const post = data.markdownRemark
  return (
    <div style = {styles}>
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          // description = "world"
        />
        <Content>
          <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
          <HeaderDate>
            {post.frontmatter.date} - {post.fields.readingTime.text}
          </HeaderDate>
          <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </Content>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
