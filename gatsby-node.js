const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators

  return new Promise((resolve, reject) => {
    const articleTemplate = path.resolve('src/templates/article.js');
    resolve(
      graphql(`
        {
          contentfulWebsite (siteName: {eq: "paperchambers"}) {
            posts {
              slug
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.contentfulWebsite.posts.forEach((post) => {
          createPage ({
            path: post.slug,
            component: articleTemplate,
            context: {
              slug: post.slug
            }
          })
        })
        return
      })
    )
  })
    }
