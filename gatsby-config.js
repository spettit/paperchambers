module.exports = {
  siteMetadata: {
    title: 'Paper Chambers',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {resolve: 'gatsby-source-contentful',
    options: {
      spaceId: 'wltjwt75kcqa',
      accessToken: '82b6d0287f1cf627fcf588acab771e7bce3c86ae01d38e64a6c72a4a29ceb5c4'
    }
  }
  ],
};
