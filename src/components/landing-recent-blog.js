import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import './global.css'

import Layout from "./layout"
import SEO from "./seo"
// import Img from 'gatsby-image';

const SectionTitle = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 2em;
  font-weight: 500;
`
const Expand = styled(Link)`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  margin-left: 5vw;
  padding: 3px 14px;
  border-radius: 15px;
  background: #e3f4e5;
  text-decoration: none;
  
  :hover {
    color: #fd163f;
  }
`
const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const MarkerHeader = styled.h3`
  display: inline;
  font-family: 'DM Sans', sans-serif;
  // border-radius: 1em 0 1em 0;
  margin-bottom: 10px;
  // background-image: linear-gradient(
  //   -100deg,
  //   rgba(255, 250, 150, 0.15),
  //   rgba(255, 250, 150, 0.8) 100%,
  //   rgba(255, 250, 150, 0.25)
  // );

  // background-color: rgba(92, 187, 254, 0.45);
  // height: 3px;
  // background-color: rgba(216, 123, 73, 0.5);
  // padding-right: 9px;
  // padding-left: 7px;
  `

const ArticleDate = styled.h5`
  display: inline;
  // color: #606060;
  // color: #063268;
  // color: #c42a00;
  // color: rgb(143, 10, 93);
  color: #fb2811;
  margin-bottom: 10px;
`

const ReadingTime = styled.h5`
  display: inline;
  // color: #606060;
  // color: #063268;
  // color: #c42a00;
  // color: rgb(240, 50, 50);
  // color: rgb(143, 10, 93);
  color: #fb2811;
  margin-bottom: 10px;
`

const SinglePost = styled.section`
  padding: 13px 0;
`;

const IndexPage = ({ data }) => {
  return (
    <div>
      <Content>
        <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center'}}>
          <SectionTitle>Latest Posts</SectionTitle>
          <Expand to="/blog">View All</Expand>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <SinglePost key={node.id}>
            <div>
              {/* // <div key={node.id}> */}
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                {/* {node.frontmatter.image.childImageSharp.fluid} */}
                {/* <div>{node.frontmatter.image}</div> */}
                <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
                <div>{node.frontmatter.description}</div>
                {/* <div><Img fluid={node.frontmatter.thumbnail.childImageSharp}/></div> */}
              </Link>
            </div>
          </SinglePost>
        ))}
      </Content>
    </div>
  )
}

export default IndexPage

