import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// import defaultImage from '../images/previewImage2.png'

function SEO({ description, lang, meta, title, featuredImage}) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            defaultSiteImage
          }
        }
        defaultImage: file(relativePath: { eq: "images/previewImage4.png" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  // const {defaultImage} = useStaticQuery(
  //   graphql`
  //   query {
  //     image: file(relativePath: { eq: "../images/previewImage2.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 6000, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //       }
  //     }
  //   }`
  // ) 

  const metaDescription = description || data.site.siteMetadata.description
  const pagePreviewImage = data.site.siteMetadata.siteUrl + (featuredImage || data.defaultImage.childImageSharp.fluid.src)
  // + (featuredImage || 'src/images/previewImage2.png')
  // console.log("siteURL: ", data.site.siteMetadata.siteUrl)
  // console.log("featuredImage: ", featuredImage)
  // console.log("++ defaultImage: ", data.defaultImage.childImageSharp.fluid.src)
  // console.log("seo: ", pagePreviewImage)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: pagePreviewImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: pagePreviewImage,
        },
        {
          name: "twitter:card",
          content: pagePreviewImage,
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO