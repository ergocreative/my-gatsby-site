/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      }
    },
    // Does this add images in src/images to graphQL?

    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   }
    // },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
