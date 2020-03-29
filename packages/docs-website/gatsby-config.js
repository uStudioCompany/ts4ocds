module.exports = {
  siteMetadata: {
    title: `TS4OCDS`,
    author: `uStudio Front-End Department`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TS4OCDS Documentation`,
        start_url: `/`,
        icon: `src/images/ts4ocds-favicon.png`,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
  ],
};
