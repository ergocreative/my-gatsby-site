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
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'http://3.10.58.63:1337/blogs'
        ],
      },
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
