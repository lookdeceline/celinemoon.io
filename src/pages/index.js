import { graphql } from "gatsby"
import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
  useEffect(() => {
    navigate('/blog/');
  }, []);
  return null;
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