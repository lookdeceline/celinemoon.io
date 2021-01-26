const path = require(`path`)
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
    const { createPage } = actions
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug
                    }
                  }
                }
              }
        }
    `)
    // console.log(JSON.stringify(result, null, 4))
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.slug.indexOf('/blog') === 0) {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug: node.fields.slug,
                },
            })
        } else if (node.fields.slug.indexOf('/projects') === 0) {
            console.log("project createPage")
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/project-post.js`),
                context: {
                    slug: node.fields.slug,
                },
            })
        }
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
