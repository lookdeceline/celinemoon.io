const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    // console.log(`Node created of type "${node.internal.type}"`)
    const { createNodeField } = actions 
    if (node.internal.type === `MarkdownRemark`) {
    //   const fileNode = getNode(node.parent)
    //   console.log(`\n`, fileNode.relativePath)
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

// createPages API: Gatsby calls this so that plugins can add pages.
exports.createPages = async ({ graphql, actions }) => {
    const tagTemplate = path.resolve("src/templates/tags.js")

    const { createPage } = actions
    const result = await graphql(`
        query {
            allMarkdownRemark (
                filter: {
                    frontmatter: {
                      publish: { eq: true }
                    }
                  }
            ) {
                edges {
                  node {
                    frontmatter {
                        title
                        path
                        publish
                    }
                    fields {
                      slug
                    }
                  }
                }
            }

            tagsGroup: allMarkdownRemark(
                limit: 2000
                filter: {
                    frontmatter: {
                      publish: { eq: true }
                    }
                }
            ) {
                group(field: frontmatter___tags) {
                  fieldValue
                }
              }
        }
    `)

    result.data.allMarkdownRemark.edges
    // .filter(({node}) => node.frontmatter.publish)
    .forEach(({ node }) => {
        if (node.fields.slug.indexOf('/blog') === 0) {
            createPage({
                path: `/blog/${node.frontmatter.path}`,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug: node.fields.slug,
                },
            })
        } else if (node.fields.slug.indexOf('/projects') === 0) {
            console.log("project createPage")
            createPage({
                // path: node.fields.slug,
                path: `/projects/${node.frontmatter.path}`,
                component: path.resolve(`./src/templates/project-post.js`),
                context: {
                    slug: node.fields.slug,
                },
            })
        }
    })

    // Extract tag data from query
    const tags = result.data.tagsGroup.group
    console.log(tags)
    // Make tag pages
    tags
    .forEach(tag => {
    createPage({
        path: `/tags/${tag.fieldValue}/`,
        component: tagTemplate,
        context: {
            tag: tag.fieldValue,
        },
        })
    })


    // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    //     createPage({
    //       path: node.fields.slug,
    //       component: path.resolve(`./src/templates/blog-post.js`),
    //       context: {
    //         // Data passed to context is available
    //         // in page queries as GraphQL variables.
    //         slug: node.fields.slug,
    //       },
    //     })
    //   })
}
