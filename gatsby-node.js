/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const blogQuery = `
query MyQuery {
    allSeamsCmsBlogpost {
      edges {
        node {
          content {
            title {
              value
            }
            content {
              value
            }
            author {
              value {
                content {
                  name {
                    value
                  }
                }
              }
            }
            categories {
              value {
                content {
                  name {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const query = await graphql(blogQuery)
    createPage({
      path: `/blogs`,
      component: require.resolve("./src/templates/blog-index.js"),
      context: {
        blogPosts: query.data.allSeamsCmsBlogpost.edges,
      },
    })
  }