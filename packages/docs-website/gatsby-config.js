module.exports = {
  pathPrefix: '/ts4ocds',
  siteMetadata: {
    title: `TS4OCDS`,
    author: `uStudio Front-End Department`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TS4OCDS Documentation`,
        start_url: `/`,
        icon: `src/assets/images/ts4ocds-favicon.png`,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};
