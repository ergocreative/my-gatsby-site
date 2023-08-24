const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const articlePost = path.resolve("./src/templates/article-post.js")

  const result = await graphql(
    `
      {
        allRestApiBlogs {
          nodes {
            title
            slug
          }
        }       
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )

    return
  }

  const articles = result.data.allRestApiBlogs.nodes

  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/blog-api/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      })
    })
  }
}
