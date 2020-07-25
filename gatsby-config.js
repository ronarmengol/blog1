/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Full-stack bootcamp!',
    author: 'Ron Armengol'
  },

  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `pxn78ivw590b`,
        accessToken: `GO5JptHN2Yp_J9_pWAA6aN7laoXnXaPa4jbKx0iBm3s`,
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/posts`
      },
    },
    `gatsby-plugin-nodejs`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}
