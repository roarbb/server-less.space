require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'server-less.space',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
  ],
}
