const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: {
                order: DESC
                fields: [frontmatter___templateKey, frontmatter___date]
              }
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    templateKey
                  }
                }
                next {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    templateKey
                  }
                }
                previous {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    templateKey
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          result.errors.forEach((e) => console.error(e.toString()))
          return Promise.reject(result.errors)
        }

        const { edges } = result.data.allMarkdownRemark

        edges.forEach(({ node, next, previous }) => {
          const id = node.id
          createPage({
            path: node.fields.slug,
            // tags: edge.node.frontmatter.tags,
            component: path.resolve(
              `src/templates/${String(node.frontmatter.templateKey)}.js`
            ),
            // additional data can be passed via context
            context: {
              id,
              next,
              previous,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  fmImagesToRelative(node) // convert image paths for gatsby images
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      office: Office
    }

    type Office {
      address: String 
      phone: String 
    }
  `
  createTypes(typeDefs)
}
