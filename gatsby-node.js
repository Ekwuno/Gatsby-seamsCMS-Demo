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

