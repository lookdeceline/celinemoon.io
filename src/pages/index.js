import React from "react"
import { graphql } from "gatsby"
import { useEffect } from 'react';
import { navigate } from 'gatsby';

import SEO from "../components/seo"

export default () => {
  useEffect(() => {
    navigate('/blog/');
  }, []);
  return <SEO title = "Home"/>
};

export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "images/profile-picture.png" }) {
      childImageSharp {
        fluid(maxWidth: 6000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allFile(filter: {
      absolutePath: {regex: "/src/images/"}, 
      extension: {regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/"}
    }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 6000, quality: 100) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }, filter: {frontmatter: {publish: { eq: true } }}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY. MM. DD.")
            intro
            featuredImage {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            backgroundColor
            tags
            type
            text
            path
            publish
            order
          }
          fields {
            slug
          }
        }
      }
    }
  }
`