/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
/* Your site config here */
  siteMetadata: {
    title: 'Hemantaa',
    description: 'just some description about site',
    author: '@nhemnt',
    data: { name: 'negi', age: 25 }
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
  
}
